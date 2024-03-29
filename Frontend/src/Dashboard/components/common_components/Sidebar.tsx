import { useEffect, useState } from 'react';
import { CiDiscount1, CiMoneyCheck1, CiWallet } from 'react-icons/ci';
import { FaDumbbell } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa6';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { IoNewspaperOutline } from 'react-icons/io5';
import { LiaKeySolid } from 'react-icons/lia';
import { LuBox } from 'react-icons/lu';
import { SiNginxproxymanager } from 'react-icons/si';
import { TbCategoryFilled, TbSettings2 } from 'react-icons/tb';
import { NavLink, useLocation } from 'react-router-dom';
import image1 from '../../../../public/javad.jpg';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true); //true bcz client reques
  const [selectedItem, setSelectedItem] = useState({ id: '0', open: false });

  const openSubMenu = (id: string) => {
    setSelectedItem({
      id: id,
      open: !selectedItem.open
    });
  };

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      const sidebar = document.getElementById('sidebar');
      if (sidebar && !sidebar.contains(event.target)) {
        setSidebarOpen(true); // true bcz client request
      }
    };

    // Attach the event listener when the sidebar opens
    if (sidebarOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    // Remove the event listener when the component unmounts or the sidebar closes
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [sidebarOpen]);

  const location = useLocation();

  const sidebarIcons = [
    // {
    //     name:'logo',
    //     icon:<TbSettings2 size={40} />
    // },
    {
      name: 'Dashboard',
      icon: (
        <LiaKeySolid
          size={30}
          className="border-2 border-[#5C5C5C] rounded-md p-[3px] font-extrabold"
        />
      ),
      path: '/'
    },
    {
      name: 'Facilities',
      icon: (
        <LuBox size={30} className="border-2 border-[#5C5C5C] rounded-md p-[3px] font-extrabold" />
      ),
      path: '/Facilities'
    },
    {
      name: 'customers',
      icon: (
        <FaRegUser
          size={30}
          className="border-2 border-[#5C5C5C] rounded-md p-[3px] font-extrabold"
        />
      ),
      path: '/Customer'
    },
    {
      name: 'Payments',
      icon: (
        <CiWallet
          size={30}
          className="border-2 border-[#5C5C5C] rounded-md p-[3px] font-extrabold"
        />
      ),
      path: '/Payment'
    },
    {
      name: 'Manages',
      icon: (
        <CiDiscount1
          size={30}
          className="border-2 border-[#5C5C5C] rounded-md p-[3px] font-extrabold"
        />
      ),
      path: '/MembershipPackages'
    }
  ];

  const sideBarItems = [
    {
      id: '1',
      icon: (
        <LiaKeySolid
          size={30}
          className="border-2 border-[#5C5C5C]   rounded-md p-[3px] font-extrabold"
        />
      ),
      MenuItem: 'Dashboard',
      path: '/'
    },
    {
      id: '2',
      icon: (
        <LuBox size={30} className="border-2 border-[#5C5C5C] rounded-md p-[3px] font-extrabold" />
      ),
      MenuItem: 'Facilities',
      path: '/Facilities',
      subMenu: [
        {
          id: '2-1',
          name: 'Categories',
          subIcon: (
            <TbCategoryFilled
              size={22}
              className="border-2 border-[#5C5C5C] rounded-md p-[2px] font-extrabold"
            />
          ),
          path: '/facilityCategories' // want to create the page
        },
        {
          id: '2-2',
          name: 'Tier Management',
          subIcon: (
            <SiNginxproxymanager
              size={22}
              className="border-2 border-[#5C5C5C] rounded-md p-[2px] font-extrabold"
            />
          ),
          path: '/TierManagement ' // want to create the page
        }

        // Add more submenus as needed
      ]
    },
    {
      id: '3',
      icon: (
        <FaRegUser
          size={30}
          className="border-2 border-[#5C5C5C] rounded-md p-[3px] font-extrabold"
        />
      ),
      MenuItem: 'Customer',
      path: '/Customer'
    },
    {
      id: '4',
      icon: (
        <CiWallet
          size={30}
          className="border-2 border-[#5C5C5C] rounded-md p-[3px] font-extrabold"
        />
      ),
      MenuItem: 'Payment',
      path: '/Payment'
    },
    {
      id: '5',
      icon: (
        <CiDiscount1
          size={30}
          className="border-2 border-[#5C5C5C] rounded-md p-[3px] font-extrabold"
        />
      ),
      MenuItem: 'Manage',
      path: '/MembershipPackages',
      subMenu: [
        {
          id: '5-1',
          subIcon: (
            <CiMoneyCheck1
              size={30}
              className="border-2 border-[#5C5C5C] rounded-md p-[3px] font-extrabold"
            />
          ),
          name: 'Membership ',
          path: '/MembershipPackages'
        },
        {
          id: '5-2',
          subIcon: (
            <CiDiscount1
              size={30}
              className="border-2 border-[#5C5C5C] rounded-md p-[3px] font-extrabold"
            />
          ),
          name: 'Amenities',
          path: '/Amenities'
        },

        {
          id: '5-3',
          subIcon: (
            <FaDumbbell
              size={30}
              className="border-2 border-[#5C5C5C] rounded-md p-[3px] font-extrabold"
            />
          ),
          name: 'Equipments',
          path: '/Equipments'
        },

        {
          id: '9',
          subIcon: (
            <IoNewspaperOutline
              size={30}
              className="border-2 border-[#5C5C5C] rounded-md p-[3px] font-extrabold"
            />
          ),
          name: 'User Roles',
          path: '/UserRoles'
        }

        // Add more submenus as needed
      ]
    }
  ];

  return (
    <div id="sidebar " className="flex flex-col   ">
      {/* <<<<<< SIDE MINIMIZE ICON >>>>>>> */}
      <div className={`${sidebarOpen === true ? 'hidden' : 'block'}`}>
        <div className="md:w-24 px-2 md:px-5">
          <div className="mb-10 pt-10 flex justify-center">
            <TbSettings2 size={40} />
          </div>
          <div onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarIcons.map((it: any, ind: any) => (
              <NavLink
                to={it.path}
                key={ind}
                className={({ isActive }) =>
                  `${
                    isActive ? 'text-white bg-black ' : 'hover:bg-slate-100'
                  } py-1 md:py-3 rounded-lg my-5 flex justify-center `
                }
              >
                {it.icon}
              </NavLink>
            ))}
          </div>
          <div className="flex justify-center">
            <img src={image1} alt="" className="h-10 w-10 rounded-full" />
          </div>
        </div>
      </div>

      {/* <<<<<<< SIDE BAR MENU >>>>>>>> */}

      <div
        className={`pl-5 bg-white rounded-md h-screen overflow-y-scroll flex flex-col  ${sidebarOpen === true ? 'block' : 'hidden'} `}
      >
        <div className="mb-10 pt-10 flex items-center">
          <TbSettings2 size={40} />
          <h1 className="font-bold text-xl">
            Onlypass.db<span className="text-[10px] font-normal"> v0.1</span>
          </h1>
        </div>

        <div className="common flex flex-col  flex-1 relative  ">
          <div className=" text-[#5C5C5C] h-[500px] ">
            {sideBarItems.map((it: any) => (
              <div className="mb-7">
                <NavLink
                  to={it.path}
                  key={it.id}
                  onClick={() => openSubMenu(it.id)}
                  className={`${
                    location.pathname === it.path ? 'text-white bg-black' : 'hover:bg-slate-100'
                  } p-3 font-semibold font-name text-md  flex items-center gap-3 rounded-md  `}
                >
                  <div>{it.icon}</div>

                  <div className="flex justify-between items-center w-52">
                    <h1>{it.MenuItem}</h1>
                    <span
                      className={`${
                        selectedItem.id === it.id && selectedItem.open === true ? 'rotate-90' : ''
                      } duration-300`}
                    >
                      <IoIosArrowForward size={20} />
                    </span>
                  </div>
                </NavLink>
                {location.pathname.startsWith(it.path) &&
                  it.subMenu &&
                  it.subMenu.map((subMenuItem: any) => (
                    <NavLink
                      to={subMenuItem.path}
                      key={subMenuItem.id}
                      className={`bg-slate-100 p-3 mt-1 ml-10 font-name text-md  items-center  gap-3 rounded-md  ${
                        selectedItem.id === it.id && selectedItem.open === true
                          ? 'flex '
                          : 'hidden '
                      } `}
                    >
                      <div className="flex gap-3 items-center">
                        {subMenuItem.subIcon}
                        <h1>{subMenuItem.name}</h1>
                      </div>
                    </NavLink>
                    // <div
                    //   key={subMenuItem.id}
                    //   className={`bg-slate-100 p-3 mt-1 ml-10 font-name text-md  items-center  gap-3 rounded-md  ${
                    //     selectedItem.id === it.id && selectedItem.open === true ? 'flex ' : 'hidden '
                    //   } `}
                    // >
                    //   <div className="flex gap-3 items-center">
                    //     {subMenuItem.subIcon}
                    //     <h1>{subMenuItem.name}</h1>
                    //   </div>
                    // </div>
                  ))}
              </div>
            ))}
          </div>

          <div className="profile p-2  bg-white rounded-lg  flex mb-2  gap-3 font-bold ">
            <div className=" rounded-full bg-slate-200 ">
              <img src={image1} alt="" className="h-12 w-12 rounded-full" />
            </div>
            <div className="flex justify-between items-center w-52">
              <div>
                <h1>Javad mohammed</h1>
                <span className="text-xs text-slate-400 font-normal">Project Manager</span>
              </div>
              <span>
                <IoIosArrowDown size={20} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
