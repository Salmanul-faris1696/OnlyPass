import { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
const timeAM = [

    {
        time: '24 hours'
    },
    {
        time:'12:00 am',
    },
    {
        time:'12:30 am',
    },
    {
        time:'1:00 am',
    },
    {
        time:'1:30 am',
    },
    {
        time:'2:00 am',
    },
    {
        time:'2:30 am',
    },
    {
        time:'3:00 am',
    },
    {
        time:'3:30 am',
    },
    {
        time:'4:00 am',
    },
    {
        time:'4:30 am',
    },
    {
        time:'5:00 am',
    },
    {
        time:'5:30 am',
    },
    {
        time:'6:00 am',
    },
    {
        time:'6:30 am',
    },
    {
        time:'7:00 am',
    },
    {
        time:'7:30 am',
    },
    {
        time:'8:00 am',
    },
    {
        time:'8:30 am',
    },
    {
        time:'9:00 am',
    },
    {
        time:"9:30 am"
    },
    {
        time:'10:00 am',
    },
    {
        time:'10:30 am',
    },
    {
        time:'11:00 am',
    },
    {
        time:'11:30 am',
    },
    {
        time:'12:00 pm',
    },
    
]


const TimeMorning = (props:any) => {
    // console.log({props});
    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState('');
  
    const handleTimeClick = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleTimeSelect = (
        // time:string
        value:any
        ) => {
            console.log({value});
            
      setSelectedTime(value.time);
      setIsDropdownOpen(false);
      timeConcat(value.time)
    };

    // console.log('time' , selectedTime);

    const timeConcat = (selectedValue: any) => {
        const { day, holder, timetype } = props;
        console.log("tst1" ,selectedValue);
        
    
        // Create a new object to hold the facility_Timing data
        const newData = {
          [day]: {
            [timetype]: 
            `${holder==="starting"? selectedValue : "," }`
            //   [holder]: selectedValue.time,
            // },
          },
        };
    
        // Use this newData object as needed (e.g., send it to a parent component)
        console.log("tst2:",newData);
      };

console.log("oooo",props);

    
  
    return (
        
      <div className="relative">
        <IoTimeOutline className="absolute top-[20%] right-[5px]  text-gray-400 fon" />
        <input
          type="text"
          placeholder={props.holder}
          className="md:w-[150px] w-[100px] border rounded-md px-2 focus:outline outline-blue-400 focus:shadow-md placeholder-gray-300"
          onClick={handleTimeClick}
          value={selectedTime}
          disabled={props.disabled}
        
          readOnly
        />
        {isDropdownOpen && (
          <div className="absolute mt-1 bg-white border rounded-md shadow-md z-10 overflow-scroll w-[100px] h-44 overflow-x-hidden md:w-[150px] ">
            {timeAM.map((time) => (
              <div
                key={time.time}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleTimeSelect({time:time.time, })}
              >
                {time.time}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default TimeMorning;