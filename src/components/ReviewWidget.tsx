import Script from "next/script";

export default function ReviewWidget() {
  return (
    <section className="w-full bg-white">
      <Script
        src="https://reputationhub.site/reputation/assets/review-widget.js"
        strategy="lazyOnload"
      />
      <iframe
        className="lc_reviews_widget"
        src="https://reputationhub.site/reputation/widgets/review_widget/9xvnu89ORDnXefg4ArFH"
        title="Customer reviews"
        loading="lazy"
        scrolling="no"
        style={{ minWidth: "100%", width: "100%", border: 0 }}
      />
    </section>
  );
}
