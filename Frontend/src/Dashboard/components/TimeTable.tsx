import { Switch, Tooltip } from "antd";
import React, { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { useAppSelector } from "../Redux/hooks";
import { useDispatch } from "react-redux";
import {setAllTimingField,setfacilityTiming,} from "../Redux/Features/FacilityFeature/FacilititySlice";
import { IoMdColorFill } from "react-icons/io";


const TimeTable = () => {
  const { facilityTiming } = useAppSelector((state) => state.facility);
  // console.log("facilityTime", facilityTiming);
  const dispatch = useDispatch();

  const handleChangeAllField = () => {
    dispatch(setAllTimingField(facilityTiming));
  };

  return (
    <div className="bg-white rounded-md px-5 mx-3 mb-5 ">
      <div className=" w-[400px] md:w-[500px]  flex justify-between items-center px-4 h-16 border-b-[1px]">
        <div className="md:w-[150px]">DAY</div>
        <div className="md:w-[250px] text-center">MORNING</div>
        <div className="md:w-[250px] text-center">EVENING</div>
      </div>

      <div className="">
        {facilityTiming.map((item, ind) => (
          <div
            key={ind}
            className="border-b-[1px] w-[400px] md:w-[500px] flex justify-between items-center p-4 relative"
          >
            <div className="w-[100px]">{item.day}</div>
            <div className="flex flex-col gap-2">
              <SwitchHoliday
                data={item}
                day={item.day}
                timetype="morning"
                defValue={item.morning.holiday}
              />
              <TimeMorning
                data={item}
                holder={"start"}
                timetype="morning"
                day={item.day}
                disabled={item.morning.holiday === true}
                defValue={item.morning.start}
              />
              <TimeMorning
                data={item}
                holder={"end"}
                timetype="morning"
                day={item.day}
                disabled={
                  item.morning.start === "24 hours" ||
                  item.morning.holiday === true
                }
                defValue={item.morning.end}
              />
            </div>
            <div className="flex flex-col gap-2">
              <SwitchHoliday
                data={item}
                day={item.day}
                timetype="evening"
                defValue={item.evening.holiday}
              />
              <TimeEvening
                data={item}
                holder={"start"}
                timetype="evening"
                day={item.day}
                disabled={
                  item.morning.start === "24 hours" ||
                  item.evening.holiday === true
                }
                defValue={item.evening.start}
              />
              <TimeEvening
                data={item}
                holder={"end"}
                timetype="evening"
                day={item.day}
                disabled={
                  item.morning.start === "24 hours" ||
                  item.evening.holiday === true
                }
                defValue={item.evening.end}
              />
            </div>
            <Tooltip title="Fill all fields with same Time">
              <div
                className={`${
                  item.day === "Monday" ? "flex" : "hidden"
                } absolute left-3 top-24`}
              >
                <IoMdColorFill
                  size={20}
                  className="duration-300 scale-[1.2] hover:scale-[1.5]"
                  onClick={handleChangeAllField}
                />
              </div>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
};

// Timepicker input morning....!

interface TimeMorningProps {
  day: string;
  holder: string;
  timetype: string;
  disabled?: boolean;
  holiday?: boolean;
  defValue?: string;
  data: {
    day: string;
    morning: {
      start: string;
      end: string;
      holiday: boolean;
    };
    evening: {
      start: string;
      end: string;
      holiday: boolean;
    };
    // fullDay: boolean;
  };
}

const timeAM = [
  {
    time: "24 hours",
  },
  {
    time: "12:00 am",
  },
  {
    time: "12:30 am",
  },
  {
    time: "1:00 am",
  },
  {
    time: "1:30 am",
  },
  {
    time: "2:00 am",
  },
  {
    time: "2:30 am",
  },
  {
    time: "3:00 am",
  },
  {
    time: "3:30 am",
  },
  {
    time: "4:00 am",
  },
  {
    time: "4:30 am",
  },
  {
    time: "5:00 am",
  },
  {
    time: "5:30 am",
  },
  {
    time: "6:00 am",
  },
  {
    time: "6:30 am",
  },
  {
    time: "7:00 am",
  },
  {
    time: "7:30 am",
  },
  {
    time: "8:00 am",
  },
  {
    time: "8:30 am",
  },
  {
    time: "9:00 am",
  },
  {
    time: "9:30 am",
  },
  {
    time: "10:00 am",
  },
  {
    time: "10:30 am",
  },
  {
    time: "11:00 am",
  },
  {
    time: "11:30 am",
  },
  {
    time: "12:00 pm",
  },
];

export const TimeMorning: React.FC<TimeMorningProps> = (props) => {
  // console.log({ dataprop: props.data });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const dispatch = useDispatch();
  const handleTimeClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTimeSelect = (value: {
    time: string;
    day: string;
    holder: string;
    timeType: string;
  }) => {
    setSelectedTime(value.time);
    setIsDropdownOpen(false);
    // console.log({ value });
    interface DayTiming {
      start: string;
      end: string;
      holiday: boolean;
    }

    interface DayData {
      day: string;
      morning: DayTiming;
      evening: DayTiming;
      // fullDay: boolean;
    }
    const timeData: DayData = {
      day: props.day,
      morning: {
        start: props.data.morning.start,
        end: props.data.morning.end,
        holiday: props.data.morning.holiday,
      },
      evening: {
        start: props.data.evening.start,
        end: props.data.evening.end,
        holiday: props.data.evening.holiday,
      },
      // fullDay: props.data.fullDay,
    };

    timeData[value.timeType][value.holder] = value.time;

    // console.log("datati:", timeData);

    dispatch(setfacilityTiming(timeData));
  };

  // console.log("props:", props)

  return (
    <div className="relative">
      <IoTimeOutline
        size={20}
        className="absolute top-[20%] right-[5px] text-gray-400 fon"
      />
      <input
        type="text"
        placeholder={props.holder}
        className="md:w-[150px] w-[120px] border rounded-md px-2 py-1 focus:outline outline-blue-400 focus:shadow-md placeholder-gray-300 placeholder:font-light "
        onClick={handleTimeClick}
        value={selectedTime || props.defValue}
        disabled={props.disabled}
        readOnly
      />
      {isDropdownOpen && (
        <div className="absolute mt-1 bg-white border rounded-md shadow-md z-10 overflow-scroll w-[100px] h-44 overflow-x-hidden md:w-[150px] ">
          {timeAM.map((time) => (
            <div
              key={time.time}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() =>
                handleTimeSelect({
                  time: time.time,
                  day: props.day,
                  holder: props.holder,
                  timeType: props.timetype,
                })
              }
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
  holiday?: boolean;
  defValue?: string;
  data: {
    day: string;
    morning: {
      start: string;
      end: string;
      holiday: boolean;
    };
    evening: {
      start: string;
      end: string;
      holiday: boolean;
    };
    // fullDay: boolean;
  };
}

const timePM = [
  {
    time: "24 Hours",
  },
  {
    time: "12:00 pm",
  },
  {
    time: "12:30 pm",
  },
  {
    time: "1:00 pm",
  },
  {
    time: "1:30 pm",
  },
  {
    time: "2:00 pm",
  },
  {
    time: "2:30 pm",
  },
  {
    time: "3:00 pm",
  },
  {
    time: "3:30 pm",
  },
  {
    time: "4:00 pm",
  },
  {
    time: "4:30 pm",
  },
  {
    time: "5:00 pm",
  },
  {
    time: "5:30 pm",
  },
  {
    time: "6:00 pm",
  },
  {
    time: "6:30 pm",
  },
  {
    time: "7:00 pm",
  },
  {
    time: "7:30 pm",
  },
  {
    time: "8:00 pm",
  },
  {
    time: "8:30 pm",
  },
  {
    time: "9:00pm",
  },
  {
    time: "9:30pm",
  },

  {
    time: "10:00 pm",
  },
  {
    time: "10:30 pm",
  },
  {
    time: "11:00 pm",
  },
  {
    time: "11:30 pm",
  },
  {
    time: "12:00 am",
  },
];

export const TimeEvening: React.FC<TimeEveningProps> = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const dispatch = useDispatch();

  const handleTimeClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTimeSelect = (value: {
    time: string;
    day: string;
    holder: string;
    timeType: string;
  }) => {
    setSelectedTime(value.time);
    setIsDropdownOpen(false);
    // console.log({ value });
    interface DayTiming {
      start: string;
      end: string;
      holiday: boolean;
    }

    interface DayData {
      day: string;
      morning: DayTiming;
      evening: DayTiming;
      // fullDay: boolean;
    }
    const timeData: DayData = {
      day: props.day,
      morning: {
        start: props.data.morning.start,
        end: props.data.morning.end,
        holiday: props.data.morning.holiday,
      },
      evening: {
        start: props.data.evening.start,
        end: props.data.evening.end,
        holiday: props.data.evening.holiday,
      },
      // fullDay: props.data.fullDay,
    };

    timeData[value.timeType][value.holder] = value.time;

    // console.log("datati:", timeData);

    dispatch(setfacilityTiming(timeData));
  };

  return (
    <div className="relative">
      <IoTimeOutline
        size={20}
        className="absolute top-[20%] right-[5px] text-gray-400 fon"
      />
      <input
        type="text"
        placeholder={props.holder}
        className="md:w-[150px] w-[120px] border rounded-md px-2 py-1 focus:outline outline-blue-400 focus:shadow-md placeholder-gray-300 placeholder:font-light"
        onClick={handleTimeClick}
        value={selectedTime || props.defValue}
        disabled={props.disabled}
        readOnly
      />
      {isDropdownOpen && (
        <div className="absolute mt-1 bg-white border rounded-md shadow-md z-10 overflow-scroll w-[100px] h-44 overflow-x-hidden md:w-[150px] ">
          {timePM.map((time) => (
            <div
              key={time.time}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() =>
                handleTimeSelect({
                  time: time.time,
                  day: props.day,
                  holder: props.holder,
                  timeType: props.timetype,
                })
              }
            >
              {time.time}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

interface SwitchHolidayProps {
  day: string;
  timetype: string;
  // disabled?: boolean;
  checked?: boolean;
  defValue?: boolean;
  data: {
    day: string;
    morning: {
      start: string;
      end: string;
      holiday: boolean;
    };
    evening: {
      start: string;
      end: string;
      holiday: boolean;
    };
    // fullDay: boolean;
  };
}

export const SwitchHoliday: React.FC<SwitchHolidayProps> = (props) => {
  // const [holiday, setHoliday] = useState(false);
  const dispatch = useDispatch();

  const handleHolidayChange = (value: {
    day: string;
    timeType: string;
    checked: boolean;
  }) => {
    // setHoliday(value.checked);

    interface DayTiming {
      start: string;
      end: string;
      holiday: boolean;
    }

    interface DayData {
      day: string;
      morning: DayTiming;
      evening: DayTiming;
      // fullDay: boolean;
    }
    const timeData: DayData = {
      day: props.day,
      morning: {
        start: props.data.morning.start,
        end: props.data.morning.end,
        holiday: props.data.morning.holiday,
      },
      evening: {
        start: props.data.evening.start,
        end: props.data.evening.end,
        holiday: props.data.evening.holiday,
      },
      // fullDay: props.data.fullDay,
    };

    if (value.timeType === "morning") {
      timeData.morning.holiday = value.checked;
    } else if (value.timeType === "evening") {
      timeData.evening.holiday = value.checked;
    }

    console.log("datati:", timeData);

    dispatch(setfacilityTiming(timeData));
  };

  return (
    <>
      <Switch
        size="small"
        checkedChildren="Holiday"
        unCheckedChildren="Open"
        className="bg-green-400"
        value={props.defValue}
        onChange={(checked: boolean) =>
          handleHolidayChange({
            day: props.day,
            // holder: props.holder,
            timeType: props.timetype,
            checked: checked,
          })
        }
      />
    </>
  );
};

export default TimeTable;