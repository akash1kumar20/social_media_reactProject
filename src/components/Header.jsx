import { FaSearch } from "react-icons/fa";
import { SiGooglehome } from "react-icons/si";
import { BsPlayBtn } from "react-icons/bs";
import { TbUsersGroup } from "react-icons/tb";
import { IoGameControllerOutline } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import { BiSolidMessageRounded } from "react-icons/bi";
import { BiSolidBell } from "react-icons/bi";
const Header = ({ setTabSelected }) => {
  return (
    //  header container
    <div className="bg-zinc-800 h-16 text-white border-b py-2 px-5 flex items-center justify-between">
      {/* left part of container */}
      <div className="flex items-center gap-2">
        <span className="bg-amber-500 text-3xl px-2 pb-2 rounded-[50%] italic font-serif">
          s
        </span>
        <span className="hidden md:flex items-center gap-2 bg-zinc-700 px-2 py-2 rounded-2xl">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Media"
            className="bg-zinc-700"
          />
        </span>
        <span className="flex md:hidden items-center gap-2 bg-zinc-700 px-2 py-2 rounded-2xl">
          <FaSearch />
        </span>
      </div>
      {/* middle part of container */}
      <div className="hidden md:flex gap-x-20 items-center text-3xl">
        <SiGooglehome
          className="hover:activeClass"
          onClick={() => setTabSelected("Home")}
        />
        <BsPlayBtn className="hover:activeClass" />
        <TbUsersGroup className="hover:activeClass" />
        <IoGameControllerOutline className="hover:activeClass" />
      </div>
      {/* right part of container */}
      <div className="flex items-center text-3xl md:gap-x-4 gap-x-1">
        <CgMenuGridR className="bg-zinc-700 p-2 rounded-full text-[40px]" />
        <BiSolidMessageRounded className="bg-zinc-700 p-2 rounded-full text-[40px]" />
        <BiSolidBell className="bg-zinc-700 p-2 rounded-full text-[40px]" />
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          className="h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
