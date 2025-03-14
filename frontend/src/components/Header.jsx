import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md ">
      <div className="flex items-center justify-between max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Estate</span>
            <span className="text-slate-700">Hub</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex  items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-0 w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>

        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="hidden sm:inline hover:underline text-slate-700 hover:font-bold cursor-pointer">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline hover:underline text-slate-700 hover:font-bold cursor-pointer">
              About
            </li>
          </Link>
          <Link to={"/sign-in"}>
            <li className=" hover:underline text-slate-700 hover:font-bold cursor-pointer">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
