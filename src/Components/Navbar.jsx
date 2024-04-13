import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [show, setShow] = useState(false);      
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };
  return (
    <>
      <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-[black]">
        <div className="max-w-screen-xl w-[90%] flex flex-wrap items-center justify-between mx-auto">
          <img src={logo} alt="" className="w-[7rem]" />
          <div className=" md:hidden">
            <ul className="flex gap-10">
              <NavLink to="/" className="text-black text-[20px]">
                Home
              </NavLink>
              <NavLink to="/contact" className="text-black text-[20px]">
                Contact
              </NavLink>
              <NavLink to="about" className="text-black text-[20px]">
                About
              </NavLink>
              {!cookies.access_token ? (
                <NavLink to="/signup" className="text-black text-[20px]">
                  Sign Up
                </NavLink>
              ) : (
                <button onClick={logout} className="text-black text-[20px]">
                  Logout
                </button>
              )}
            </ul>
          </div>
          <div class="flex items-center justify-center">
            <div class="rounded-lg bg-gray-300">
              <div class="flex">
                <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-gray-300 p-5">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    class="pointer-events-none absolute w-5 fill-gray-700 transition"
                  >
                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  class="w-full max-w-[160px] bg-gray-300 pl-2 text-base font-semibold outline-0"
                  placeholder=""
                  id=""
                />
                <input
                  type="button"
                  value="Search"
                  class="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
