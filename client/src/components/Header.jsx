import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { GiShoppingBag } from "react-icons/gi";

function Header() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "text-[#FF3811]" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    isActive ? "text-[#FF3811]" : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#FF3811]" : ""
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#FF3811]" : ""
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#FF3811]" : ""
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2 space-x-6 text-[18px]">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "text-[#FF3811]" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) => (isActive ? "text-[#FF3811]" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-[#FF3811]" : "")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-[#FF3811]" : "")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-[#FF3811]" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link>
            <GiShoppingBag size={35} className="mr-6" />
          </Link>
          <Link className="bg-transparent border border-[#FF3811] text-[#FF3811] px-8 py-3 rounded-md font-semibold">
            Appointment
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
