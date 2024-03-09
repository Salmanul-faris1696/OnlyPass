import { useState } from 'react';
import { AiOutlineMenuFold, AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineUser } from 'react-icons/hi2';
import { IoIosNotificationsOutline } from 'react-icons/io';
import Sidebar from './Sidebar';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full md:w-[100%] md:h-24  lg:w-[75%] xl:w-[80%] bg-white p-5 z-10 ">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div
            className="border rounded-full shadow-lg p-1 lg:hidden"
            onClick={() => setIsSidebarOpen((sidebarhide) => !sidebarhide)}
          >
            {/* <AiOutlineMenuFold  size={20} onClick={() =>setIsSidebarOpen((sidebarhide) => !sidebarhide) }/> */}
            {isSidebarOpen ? <RxCross2 size={20} /> : <AiOutlineMenuFold size={20} />}
          </div>
          <div className="border rounded-full shadow-lg p-1">
            <AiOutlineSearch size={20} />
          </div>
        </div>

        <div className="flex gap-3 pr-5 lg:pr-0">
          <div className="border rounded-full shadow-lg p-1">
            <IoIosNotificationsOutline size={20} />
          </div>
          <div className="border rounded-full shadow-lg p-1">
            <HiOutlineUser size={20} />
          </div>
        </div>
      </div>

      <div
        className={`${isSidebarOpen ? 'flex' : 'hidden'} absolute -left-2 top-[95px] `}
        onClick={() => setIsSidebarOpen((sidebarhide) => !sidebarhide)}
      >
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
