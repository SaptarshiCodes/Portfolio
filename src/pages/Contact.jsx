import ContactRight from "../components/contact/ContactRight";
import SocialLinks from "../components/contact/SocialLinks";
import String from "../components/String";

const Contact = () => {
  return (
    <div id="contact" className="relative min-h-screen w-full bg-[hsl(0,0%,3%)] pt-[5vw] px-[2vw]">
      {/* About */}
      <h1 data-scroll-reveal className="text-zinc-100 uppercase font-[font2] text-[2vw] font-extrabold leading-relaxed transform-[scaleY(1.6)]">
        Contact Me
      </h1>
      <String />
      <div className="flex py-[4vw] px-[1vw]">
        {/* LEFT SECTION */}
        <div className="w-[60%]">
          <h1 data-scroll-reveal className="text-zinc-100 text-[8vw] font-[font2] font-bold tracking-tight mt-[2vw]">
            Saptarshi.
          </h1>

          <p data-scroll-reveal className="text-zinc-600 text-[1.5vw] ">
            Crafting digital experiences that leave a lasting <br /> impression.
          </p>

          <div className="mt-[3vw]">
            <SocialLinks />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-[40%] flex justify-end">
          <ContactRight />
        </div>
      </div>

      <div className="h-[0.1vw] w-full bg-zinc-700 my-[1vw]"></div>

      <footer className="text-zinc-600 font-light text-[1vw] pt-[1vw]">
        <p>© Saptarshi Manna, All rights reserved.</p>
        <p>Designed & Built with passion.</p>
      </footer>
    </div>
  );
};

export default Contact;
