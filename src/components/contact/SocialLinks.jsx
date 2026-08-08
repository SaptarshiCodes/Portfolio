import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/SaptarshiCodes",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/saptarshi-manna-ju28",
  },
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/share/16AvGBjRMb/",
  },
  {
    icon: <FaInstagram />,
    href: "https://instagram.com/saptarshi_010",
  },
];

export default function SocialLinks() {
  return (
    <div data-scroll-reveal className="flex items-center gap-8">
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-[3.5vw] w-[3.5vw] items-center justify-center rounded-full border-[0.1vw] border-zinc-500 text-zinc-200 hover:bg-zinc-100 hover:border-zinc-100 hover:text-black transition-all duration-300"
        >
          <span className="scale-150">
            {item.icon}
          </span>
        </a>
      ))}
    </div>
  );
}
