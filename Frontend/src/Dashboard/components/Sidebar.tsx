
import { FaBuilding, FaDumbbell, FaWifi } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { PiUserGearFill } from "react-icons/pi";
import { SlGraph } from "react-icons/sl";
import { NavLink } from 'react-router-dom';



const Sidebar = () => {
    const sideBarItems = [
        {
            id :1,
            icon :<SlGraph size={20}/>,
            MenuItem :'Dashboard',
            path : "/",
            
        },{
            id :2,
            icon : <FaWifi size={20}/>,
            MenuItem :'Amenities',
            path : "/Amenities",

        },{
            id :3,
            icon :<FaDumbbell size={20}/>,
            MenuItem :'Equipments',
            path : "/Equipments",

        },{
            id :4,
            icon :<FaBuilding size={20}/>,
            MenuItem :' Facilities',
            path : "/Facilities",

        },{
            id :5,
            icon : <LuLogOut size={20}/>,
            MenuItem :'Log-Out',
            path : "/Login",

        },
    ]
  return (
    <div className='m-2 p-2 bg-slate-100 w-[250px] rounded-md h-full fixed'>
        <div className='m-2 pb-3'>
            logo
        </div>
        <div className='p-5 mt-5 bg-white rounded-lg  flex items-center gap-3 font-bold '>
            <div className='p-3 rounded-full bg-slate-200 '>
                    <PiUserGearFill />
            </div>
            <div className='text-gray-400'>
                 Username
            </div>
        </div> 


        <div className='mt-5' >
            {sideBarItems.map(({id,icon,MenuItem,path}) =>(
           

            <NavLink to={path} key={id} className={({isActive}) =>`${isActive && 'hover:text-blue-600 hover:bg-blue-100 bg-blue-100 '} font-semibold p-3 font-name  flex items-center gap-3 mb-3  rounded-lg  `} >
                <div>
                {icon}

                </div>
                <div>
                   {MenuItem}
                </div>
            </NavLink>
            
            ))}

         

        </div>
    </div>
  )
}

export default Sidebar