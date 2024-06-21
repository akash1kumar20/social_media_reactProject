import { FaUserFriends } from "react-icons/fa";
import { PiTagChevronFill, PiClockCountdownBold } from "react-icons/pi";
import { GoVideo } from "react-icons/go";
import { SiCoinmarketcap } from "react-icons/si";
import { MdOutlineEventSeat } from "react-icons/md";
import { CgFeed } from "react-icons/cg";
import { LuUpload } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import "./ActiveComponent.css";

const SideBarLeft = () => {
  return (
    <div className="hidden max-w-[25%] ps-4 pt-4 text-lg md:flex flex-col gap-y-3">
      <p className="flex gap-x-4 items-center hover:activeSideBarOption">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          className="h-8 rounded-full"
        />
        Mr. Alex
      </p>
      <NavLink
        to="/create-post"
        className="flex gap-x-4 items-center activeClass hover:activeSideBarOption"
      >
        <LuUpload className="text-2xl" />
        Create Post
      </NavLink>
      <NavLink to="/*" className="activeClass hover:activeSideBarOption">
        <p className="flex gap-x-4 items-center ">
          <FaUserFriends className="text-2xl" /> Friends
        </p>
      </NavLink>
      <NavLink to="/*" className="activeClass hover:activeSideBarOption">
        <p className="flex gap-x-4 items-center ">
          <PiClockCountdownBold className="text-2xl" />
          Memories
        </p>
      </NavLink>
      <NavLink to="/*" className="activeClass hover:activeSideBarOption">
        <p className="flex gap-x-4 items-center ">
          <PiTagChevronFill className="-rotate-90 text-2xl" />
          Saved
        </p>
      </NavLink>
      <NavLink to="/*" className="activeClass hover:activeSideBarOption">
        <p className="flex gap-x-4 items-center ">
          <GoVideo className="text-2xl" />
          Video
        </p>
      </NavLink>
      <NavLink to="/*" className="activeClass hover:activeSideBarOption">
        <p className="flex gap-x-4 items-center">
          <SiCoinmarketcap className="text-2xl" />
          Marketplace
        </p>
      </NavLink>
      <NavLink to="/*" className="activeClass hover:activeSideBarOption">
        <p className="flex gap-x-4 items-center ">
          <CgFeed className="text-2xl" />
          Feeds
        </p>
      </NavLink>
      <NavLink to="/*" className="activeClass hover:activeSideBarOption">
        <p className="flex gap-x-4 items-center ">
          <MdOutlineEventSeat className="text-2xl" />
          Events
        </p>
      </NavLink>
      <NavLink to="/*" className="activeClass hover:activeSideBarOption">
        <p className="flex gap-x-4 items-center ">
          <PiClockCountdownBold className="text-2xl" />
          History
        </p>
      </NavLink>

      <div className="border-t border-slate-600 pt-6 text-[15px] pr-10">
        <p>
          "You only live once, but if you do it right, once is enough."
          <br /> <b>— Mae Wests</b>
        </p>
      </div>
    </div>
  );
};

export default SideBarLeft;
