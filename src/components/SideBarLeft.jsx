import { FaUserFriends } from "react-icons/fa";
import { PiClockCountdownBold } from "react-icons/pi";
import { PiTagChevronFill } from "react-icons/pi";
import { GoVideo } from "react-icons/go";
import { SiCoinmarketcap } from "react-icons/si";
import { MdOutlineEventSeat } from "react-icons/md";
import { CgFeed } from "react-icons/cg";
import { LuUpload } from "react-icons/lu";
const SideBarLeft = () => {
  return (
    <div className="hidden max-w-[25%] ps-4 pt-4 text-lg md:flex flex-col gap-y-3">
      <p className="flex gap-x-4 items-center">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          className="h-8 rounded-full"
        />
        Mr. Alex
      </p>
      <p className="flex gap-x-4 items-center">
        <FaUserFriends className="text-2xl" /> Friends
      </p>
      <p className="flex gap-x-4 items-center">
        <PiClockCountdownBold className="text-2xl" />
        Memories
      </p>
      <p className="flex gap-x-4 items-center">
        <PiTagChevronFill className="-rotate-90 text-2xl" />
        Saved
      </p>
      <p className="flex gap-x-4 items-center">
        <GoVideo className="text-2xl" />
        Video
      </p>
      <p className="flex gap-x-4 items-center">
        <SiCoinmarketcap className="text-2xl" />
        Marketplace
      </p>
      <p className="flex gap-x-4 items-center">
        <CgFeed className="text-2xl" />
        Feeds
      </p>
      <p className="flex gap-x-4 items-center">
        <MdOutlineEventSeat className="text-2xl" />
        Events
      </p>
      <p className="flex gap-x-4 items-center">
        <PiClockCountdownBold className="text-2xl" />
        History
      </p>
      <p className="flex gap-x-4 items-center">
        <LuUpload className="text-2xl" />
        Create Post
      </p>
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
