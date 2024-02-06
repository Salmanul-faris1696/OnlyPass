import { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
const time = [

    {
        time:'Holiday',
    },
    {
        time: '24 hours'
    },
    {
        time:'12:00 am',
    },
    {
        time:'12:15 am',
    },
    {
        time:'12:30 am',
    },
    {
        time:'12:45 am',
    },
    {
        time:'1:00 am',
    },
    {
        time:'1:15 am',
    },
    {
        time:'1:30 am',
    },
    {
        time:'1:45 am',
    },
    {
        time:'2:00 am',
    },
    {
        time:'2:15 am',
    },
    {
        time:'2:30 am',
    },
    {
        time:'2:45 am',
    },
    {
        time:'3:00 am',
    },
    {
        time:'3:15 am',
    },
    {
        time:'3:30 am',
    },
    {
        time:'3:45 am',
    },
    {
        time:'4:00 am',
    },
    {
        time:'4:15 am',
    },
    {
        time:'4:30 am',
    },
    {
        time:'4:45 am',
    },
    {
        time:'5:00 am',
    },
    {
        time:'5:15 am',
    },
    {
        time:'5:30 am',
    },
    {
        time:'5:45 am',
    },
    {
        time:'6:00 am',
    },
    {
        time:'6:15 am',
    },
    {
        time:'6:30 am',
    },
    {
        time:'6:45 am',
    },
    {
        time:'7:00 am',
    },
    {
        time:'7:15 am',
    },
    {
        time:'7:30 am',
    },
    {
        time:'7:45 am',
    },
    {
        time:'8:00 am',
    },
    {
        time:'8:15 am',
    },
    {
        time:'8:30 am',
    },
    {
        time:'9:45 am',
    },
    {
        time:'10:00 am',
    },
    {
        time:'10:15 am',
    },
    {
        time:'10:30 am',
    },
    {
        time:'10:45 am',
    },
    {
        time:'11:00 am',
    },
    {
        time:'11:15 am',
    },
    {
        time:'11:30 am',
    },
    {
        time:'11:45 am',
    },
    {
        time:'12:00 pm',
    },
    {
        time:'12:15 pm',
    },
    {
        time:'12:30 pm',
    },
    {
        time:'12:45 pm',
    },
    {
        time:'1:00 pm',
    },
    {
        time:'1:15 pm',
    },
    {
        time:'1:30 pm',
    },
    {
        time:'1:45 pm',
    },
    {
        time:'2:00 pm',
    },
    {
        time:'2:15 pm',
    },
    {
        time:'2:30 pm',
    },
    {
        time:'2:45 pm',
    },
    {
        time:'3:00 pm',
    },
    {
        time:'3:15 pm',
    },
    {
        time:'3:30 pm',
    },
    {
        time:'3:45 pm',
    },
    {
        time:'4:00 pm',
    },
    {
        time:'4:15 pm',
    },
    {
        time:'4:30 pm',
    },
    {
        time:'4:45 pm',
    },
    {
        time:'5:00 pm',
    },
    {
        time:'5:15 pm',
    },
    {
        time:'5:30 pm',
    },
    {
        time:'5:45 pm',
    },
    {
        time:'6:00 pm',
    },
    {
        time:'6:15 pm',
    },
    {
        time:'6:30 pm',
    },
    {
        time:'6:45 pm',
    },
    {
        time:'7:00 pm',
    },
    {
        time:'7:15 pm',
    },
    {
        time:'7:30 pm',
    },
    {
        time:'7:45 pm',
    },
    {
        time:'8:00 pm',
    },
    {
        time:'8:15 pm',
    },
    {
        time:'8:30 pm',
    },
    {
        time:'9:45 pm',
    },
    {
        time:'10:00 pm',
    },
    {
        time:'10:15 pm',
    },
    {
        time:'10:30 pm',
    },
    {
        time:'10:45 pm',
    },
    {
        time:'11:00 pm',
    },
    {
        time:'11:15 pm',
    },
    {
        time:'11:30 pm',
    },
    {
        time:'11:45 pm',
    },
]

const Time = (props:any) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState('');
  
    const handleTimeClick = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleTimeSelect = (time:string) => {
      setSelectedTime(time);
      setIsDropdownOpen(false);
    };
  
    return (
      <div className="relative">
        <IoTimeOutline className="absolute top-[20%] right-[5px] md:right-[25px] text-gray-400 fon" />
        <input
          type="text"
          placeholder={props.holder}
          className="md:w-[150px] w-[100px] border rounded-md px-2 focus:outline outline-blue-400 focus:shadow-md placeholder-gray-300"
          onClick={handleTimeClick}
          value={selectedTime}
          readOnly
        />
        {isDropdownOpen && (
          <div className="absolute mt-1 bg-white border rounded-md shadow-md z-10 overflow-scroll w-[100px] h-44 overflow-x-hidden md:w-[150px] ">
            {time.map((time) => (
              <div
                key={time.time}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleTimeSelect(time.time)}
              >
                {time.time}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Time;