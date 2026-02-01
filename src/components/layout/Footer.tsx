import { Link } from "react-router-dom";
import { GraduationCap, Phone, MapPin, Mail } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/staff", label: "Our Staff" },
  { href: "/news", label: "News & Updates" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <span className="font-serif text-xl font-bold">
                Clairwood Secondary School
              </span>
            </div>
            <p className="text-primary-foreground/80 max-w-md mb-6">
              Empowering learners for a brighter future through academic excellence, 
              discipline, and holistic development since our establishment.
            </p>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" />
                <span>Done Road, Clairwood, Durban, 4052</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" />
                <span>031 465 6846</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" />
                <span>info@clairwoodsecondary.co.za</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-gold">Resources</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Department of Basic Education
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  KZN Education Department
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  School Governing Body
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Parent Portal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>
              © {new Date().getFullYear()} Clairwood Secondary School. All rights reserved.
            </p>
            <p className="text-center md:text-right text-xs">
              Disclaimer: This website is a proposed digital platform for Clairwood Secondary School 
              and is not yet the official school website.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
