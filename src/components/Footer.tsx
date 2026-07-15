import Link from "next/link";
import { navLinks, services, phoneDisplay, phoneHref, email } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold">Finesse Cleaning</p>
            <p className="mt-4 text-sm text-white/70">
              Premium pressure washing and soft washing services. Punctuality,
              careful protection, and satisfaction guaranteed.
            </p>
            <div className="mt-4 space-y-1 text-sm text-white/70">
              <a href={phoneHref} className="block hover:text-white">
                {phoneDisplay}
              </a>
              <a href={`mailto:${email}`} className="block hover:text-white">
                {email}
              </a>
              <p>24/7 Service</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-white/90">
              QUICK LINKS
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-white/90">
              SERVICES
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href="/services" className="hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-white/90">
              SERVICE AREA
            </p>
            <p className="mt-4 text-sm text-white/70">
              Proudly serving Palm Beach County, Broward County, and
              Miami-Dade County.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Finesse Cleaning. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
