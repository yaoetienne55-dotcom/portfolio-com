import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Etienne Yao.
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm text-base leading-relaxed">
              Expert en stratégie digitale et développement web. Je transforme vos idées en solutions performantes et esthétiques pour accélérer votre croissance.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight">Navigation</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="hover:text-primary transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-primary transition-colors">
                  Compétences
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight">Contact & Réseaux</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Abidjan, Côte d&apos;Ivoire</span>
              </li>
              <li>
                <a href="mailto:yaoetienne55@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>yaoetienne55@gmail.com</span>
                </a>
              </li>
              <li>
                 <a href="tel:+2250575809069" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+225 05 75 80 90 69 / +225 07 15 96 74 08</span>
                </a>
              </li>
            </ul>
            
            <div className="pt-2 flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/in/etienne-kouakou-030a07297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.instagram.com/etiennek_12?igsh=d200cHhrOWJkaW96"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@etienne.taki2?_r=1&_t=ZS-93Xj3YBaH0j"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
              {/* Add more as needed */}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col items-center justify-between gap-4 md:flex-row text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Etienne Yao. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">Mentions légales</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
