import logo from "@/assets/images/logo.svg";
import { SlBasket } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-10 right-0 w-full h-[100px] flex justify-between items-center border text-white bg-main border-gray-400/30">
        <div className="siteContainer flex justify-between items-center">
          <div className="w-[50px]">
              <img className="w-full h-full" src={logo} alt="" />
          </div>
          <div className="flex items-center gap-x-5">
            <button className=" text-2xl">
              <NavLink to={'/favorites'}><IoMdHeartEmpty /></NavLink>
            </button>
            <button className=" text-2xl">
              <SlBasket />
            </button>
          </div>
        </div>
    </header>
  )
}

export default Header