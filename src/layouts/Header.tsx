import logo from "@/assets/images/logo.svg";

interface myProps{
  name : string
}

const Header = (props : myProps) => {
  return (
    <header className="w-full h-[100px] flex justify-between items-center border border-gray-400/30">
        <div className="siteContainer">
          <div className="w-[50px]">
              <img className="w-full h-full" src={logo} alt="" />
          </div>
          <nav>
            {props.name}
          </nav>
        </div>
    </header>
  )
}

export default Header