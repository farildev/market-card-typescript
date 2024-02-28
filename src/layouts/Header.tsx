import logo from "@/assets/images/logo.svg";
import { SlBasket } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-10 right-0 w-full h-[100px] flex justify-between items-center border bg-primary border-gray-400/30">
        <div className="siteContainer flex justify-between items-center">
          <div className="w-[50px]">
              <img className="w-full h-full" src={logo} alt="" />
          </div>
          <div className="flex items-center gap-x-5">
            <button className="text-white text-2xl">
              <IoMdHeartEmpty />
            </button>
            <button className="text-white text-2xl">
              <SlBasket />
            </button>
          </div>
        </div>
    </header>
  )
}

export default Header