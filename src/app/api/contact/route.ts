import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("GHL_WEBHOOK_URL is not set");
    return NextResponse.json(
      { ok: false, error: "Server is not configured to accept submissions." },
      { status: 500 }
    );
  }

  const [firstName, ...rest] = String(data.name ?? "").trim().split(" ");
  const lastName = rest.join(" ");

  const payload = {
    firstName: firstName ?? "",
    lastName: lastName ?? "",
    full_name: data.name ?? "",
    email: data.email ?? "",
    phone: data.phone ?? "",
    service_needed: data.service ?? "",
    city: data.city ?? "",
    timeline: data.timeline ?? "",
    project_details: data.details ?? "",
    source: "Website Contact Form",
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("GHL webhook failed:", res.status, text);
      return NextResponse.json(
        { ok: false, error: "Failed to submit request." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("GHL webhook request error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to submit request." },
      { status: 502 }
    );
  }
}
