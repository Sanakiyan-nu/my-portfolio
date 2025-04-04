import { AiFillGithub,   AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedin } from "react-icons/fa";
const socialLinks = [
  { href: "https://github.com/Sanakiyan-nu", Icon: AiFillGithub, label: "GitHub" },
  { href: "https://www.facebook.com/share/1Cuo7gu1kw/", Icon: AiFillFacebook, label: "Facebook" },
  { href: "https://www.instagram.com/luffy_03d/?__pwa=1", Icon: AiFillInstagram, label: "Instagram" },
  { href: "https://www.linkedin.com/in/sanakiyan-a-86723527b/", Icon: FaLinkedin, label: "LinkedIn" },
  
];

export const Footer = () => {

  return (
    <footer className="py-8 max-w-[1200px] mx-auto px-4">
      <div className="mt-12 flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="text-gray-200">
          © 2025. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socialLinks.map(({ href, Icon, label }) => (
            <a 
              key={label}
              href={href}
              aria-label={label}
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full
                         hover:text-purple-600 transition-colors"
            >
              <Icon size={30} />
            </a>
          ))}
        </ul>
      </div>
    </footer>
  );
};