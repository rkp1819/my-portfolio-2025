import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/raj-kumar-panda-48b6a5141/",
      icon: <FaLinkedin size={18} />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/rkp1819",
      icon: <FaGithub size={18} />,
      label: "GitHub",
    },
    {
      href: "mailto:rkp1819@gmail.com",
      icon: <FaEnvelope size={18} />,
      label: "Email",
    },
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-secondary/30 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Raj Kumar Panda</h3>
            <p className="mb-4 max-w-md text-pretty">
              Senior Software Engineer specializing in Frontend and Web
              Development with 6 years of experience building dynamic,
              high-performance user interfaces.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic space-y-2 text-sm">
              <p>Berhampur, India</p>
              <p>
                <a
                  href="tel:+919777830889"
                  className="hover:text-primary transition-colors"
                >
                  (+91) 9777830889
                </a>
              </p>
              <p>
                <a
                  href="mailto:rkp1819@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  rkp1819@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-sm">
          <p>&copy; {currentYear} Raj Kumar Panda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
