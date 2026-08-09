import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const contacts = [
  {
    icon: <FaPhoneAlt />,
    href: "tel:+919876543210",
    text: "+91-93324 04436",
  },
  {
    icon: <IoMail />,
    href: "mailto:your@email.com",
    text: "mannasaptarshi1@gmail.com"
  },
];

const ContactRight = () => {
  return (
    <div className="text-zinc-400 text-right">
      <div data-scroll-reveal className="text-[7vw] leading-none font-[font2] font-medium">
        <h1 className="text-zinc-200">Let's Work</h1>
        <h1 className="text-zinc-500">Together</h1>
      </div>
      <p data-scroll-reveal className="text-[1.3vw] my-[2vw] tracking-wide">
        Currently available for freelance projects and <br />
        open to full-time opportunities.
      </p>

      <div data-scroll-reveal className="flex flex-col gap-[1vw] items-end mt-[2vw]">
        {contacts.map((items, index) => (
          <a
            key={index}
            href={items.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-center gap-[1vw] text-zinc-100 leading-none font-[font1]"
          >
            <span className="scale-125">{items.icon}</span>
            <h1 className="text-[1.2vw] font-light tracking-wide">
              {items.text}
            </h1>
          </a>
        ))}
      </div>
      <div data-scroll-reveal className="flex items-center gap-[1vw] justify-end mt-[1.2vw] text-zinc-100 font-[font1] leading-none">
        <FaLocationDot className="scale-125" />
        <p className="text-[1.2vw] font-light tarcking-wide">
          West Bengal, India
        </p>
      </div>
    </div>
  );
}

export default ContactRight