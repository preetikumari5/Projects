import { appleImg, searchImg, bagImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex flex-col justify-between items-center">
      <nav className="flex w-full screen-max-width mb-4">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>

      <nav className="bg-gray-100 w-full py-2">
        <p className="text-center">
          Get iPhone 15 Pro from ₹5408.00/mo.‡ for 24 mo. with No Cost EMI from most leading banks.
          <a href="#" className="text-blue-600 hover:underline">  Buy now</a>
        </p>
      </nav>
    </header>
  );
}

export default Navbar;
