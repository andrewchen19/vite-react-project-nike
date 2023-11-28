import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../utility";

const Footer = () => {
  return (
    <footer className="text-white max-container">
      <section className="flex flex-wrap max-lg:flex-col justify-between items-start gap-20">
        <div>
          {/* logo */}
          <a href="/">
            <img src={footerLogo} alt="Logo" width={150} height={46} />
          </a>

          <p className="mt-6 text-base leading-7 font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards.
          </p>

          {/* icons */}
          <div className="mt-4 flex gap-3">
            {socialMedia.map((media) => {
              const { icon, alt } = media;

              return (
                <button
                  key={alt}
                  title={alt}
                  className="bg-white w-[30px] h-[30px] rounded-full grid place-items-center hover:bg-slate-gray duration-300 group"
                >
                  {icon}
                </button>
              );
            })}
          </div>
        </div>

        {/* links */}
        <div className="flex-1 flex flex-wrap justify-between lg:gap-10 gap-16">
          {footerLinks.map((section) => {
            const { title, links } = section;
            return (
              <div key={title}>
                <h4 className="font-montserrat text-coral-red font-bold text-xl">
                  {title}
                </h4>
                <ul className="mt-2">
                  {links.map((item) => {
                    const { name, link } = item;
                    return (
                      <li
                        key={name}
                        className="hover:text-slate-gray duration-300"
                      >
                        <a href={link}>{name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-20 flex max-sm:flex-col justify-between max-sm:items-center max-sm:gap-1.5">
        <p className="font-montserrat">
          &copy; {new Date().getFullYear()} Copyright. All right reserved.
        </p>
        <p className="font-montserrat">Terms & Conditions</p>
      </section>
    </footer>
  );
};

export default Footer;
