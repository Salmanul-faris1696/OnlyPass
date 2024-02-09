import { Switch,  } from "antd";
import React, { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { useAppSelector } from "../Redux/hooks";




 const TimeTable = ()=>{
  const {facilityTimes} = useAppSelector((state) => state.facility);
  console.log("facilityTime", facilityTimes);
  

  return(
    <div className="bg-white rounded-md px-5 mx-3 mb-5 ">
      <div className=" w-[400px] md:w-[500px]  flex justify-between items-center px-4 h-16 border-b-[1px]">
          <div className="md:w-[150px]">DAY</div>
          <div className="md:w-[250px] text-center">MORNING</div>
          <div className="md:w-[250px] text-center">EVENING</div>
      </div>

      <div className="">
        {
          facilityTimes.map((item, ind)=>(
            <div key={ind} className="border-b-[1px] w-[400px] md:w-[500px] flex justify-between items-center p-4">
            <div className="w-[100px]">{item.day}</div>
            <div className="flex flex-col gap-2">
            <Switch
              size="small"
              checkedChildren="Holiday"
              unCheckedChildren="Open"
              className="bg-green-400"
            />
            <TimeMorning
                holder={"starting"}
                timetype="morningTime"
                day={""}
                // disabled={}
              />
            <TimeMorning
                holder={"ending"}
                timetype="morningTime"
                day={""}
                // disabled={}
              />
            </div>
            <div className="flex flex-col gap-2">
            <Switch
              size="small"
              checkedChildren="Holiday"
              unCheckedChildren="Open"
              className="bg-green-400"
            />
            <TimeEvening
                holder={"starting"}
                timetype="morningTime"
                day={""}
                // disabled={}
              />
            <TimeEvening
                holder={"ending"}
                timetype="morningTime"
                day={""}
                // disabled={}
              />
            </div>
            </div>
          ))
        }
      </div>
    </div>
  )
  
 }



// Timepicker input morning....!

interface TimeMorningProps {
  day: string;
  holder: string;
  timetype: string;
  disabled?: boolean;
}

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

export const TimeMorning: React.FC<TimeMorningProps> = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string>('');

  const handleTimeClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTimeSelect = (value: { time: string }) => {
    setSelectedTime(value.time);
    setIsDropdownOpen(false);
    timeConcat(value.time);
  };

  const timeConcat = (selectedValue: string) => {
    const { day, holder, timetype } = props;

    const newData: Record<string, Record<string, string>> = {
      [day]: {
        [timetype]: `${holder === "starting" ? selectedValue : "," }`
      },
    };

    console.log("New Data:", newData);
  };

  return (
    <div className="relative">
      <IoTimeOutline size={20} className="absolute top-[20%] right-[5px] text-gray-400 fon" />
      <input
        type="text"
        placeholder={props.holder}
        className="md:w-[150px] w-[120px] border rounded-md px-2 py-1 focus:outline outline-blue-400 focus:shadow-md placeholder-gray-300 placeholder:font-light "
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
              onClick={() => handleTimeSelect({ time: time.time })}
            >
              {time.time}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Timepicker Input evening........!

interface TimeEveningProps {
  day: string;
  holder: string;
  timetype: string;
  disabled?: boolean;
}

const timePM = [
    
    {
        time:'24 Hours',
    },
    {
        time:'12:00 pm',
    },
    {
        time:'12:30 pm',
    },
    {
        time:'1:00 pm',
    },
    {
        time:'1:30 pm',
    },
    {
        time:'2:00 pm',
    },
    {
        time:'2:30 pm',
    },
    {
        time:'3:00 pm',
    },
    {
        time:'3:30 pm',
    },
    {
        time:'4:00 pm',
    },
    {
        time:'4:30 pm',
    },
    {
        time:'5:00 pm',
    },
    {
        time:'5:30 pm',
    },
    {
        time:'6:00 pm',
    },
    {
        time:'6:30 pm',
    },
    {
        time:'7:00 pm',
    },
    {
        time:'7:30 pm',
    },
    {
        time:'8:00 pm',
    },
    {
        time:'8:30 pm',
    },
    {
        time:'9:00pm',
    },
    {
        time:'9:30pm',
    },
  
    {
        time:'10:00 pm',
    },
    {
        time:'10:30 pm',
    },
    {
        time:'11:00 pm',
    },
    {
        time:'11:30 pm',
    },
    {
        time:'12:00 am',
    },
]

export const TimeEvening: React.FC<TimeEveningProps> = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string>('');

  const handleTimeClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTimeSelect = (value: { time: string }) => {
    setSelectedTime(value.time);
    setIsDropdownOpen(false);
    timeConcat(value.time);
  };

  const timeConcat = (selectedValue: string) => {
    const { day, holder, timetype } = props;

    const newData = {
      [day]: {
        [timetype]: `${holder === "starting" ? selectedValue : ","}`
      },
    };

    console.log("New Data:", newData);
  };

  return (
    <div className="relative">
      <IoTimeOutline size={20} className="absolute top-[20%] right-[5px] text-gray-400 fon" />
      <input
        type="text"
        placeholder={props.holder}
        className="md:w-[150px] w-[120px] border rounded-md px-2 py-1 focus:outline outline-blue-400 focus:shadow-md placeholder-gray-300 placeholder:font-light"
        onClick={handleTimeClick}
        value={selectedTime}
        disabled={props.disabled}
        readOnly
      />
      {isDropdownOpen && (
        <div className="absolute mt-1 bg-white border rounded-md shadow-md z-10 overflow-scroll w-[100px] h-44 overflow-x-hidden md:w-[150px] ">
          {timePM.map((time) => (
            <div
              key={time.time}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleTimeSelect({ time: time.time })}
            >
              {time.time}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default TimeTable;

