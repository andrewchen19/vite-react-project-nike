import { headerLogo } from "../assets/images";
import { LuAlignJustify } from "react-icons/lu";
import { navLinks } from "../utility";

const Navbar = () => {
  return (
    <header className="absolute padding-x py-8 w-full z-10">
      <nav className="flex justify-between items-center max-container">
        {/* logo */}
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        {/* links */}
        <ul className="flex-1 hidden lg:flex justify-center items-center gap-16">
          {navLinks.map((link) => {
            const { label, href } = link;

            return (
              <li key={label}>
                <a
                  href={href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* dropdown */}
        <div className="dropdown dropdown-end lg:hidden">
          <button>
            <LuAlignJustify className="w-6 h-6" />
          </button>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            {navLinks.map((link) => {
              const { label, href } = link;

              return (
                <li key={label}>
                  <a
                    href={href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
