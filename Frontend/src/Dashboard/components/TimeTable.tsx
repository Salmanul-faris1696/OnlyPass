import React, { useState } from "react";
import { Input, Switch, Table, TimePicker } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/en"; // import the locale if needed
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);


interface TimeData {
  key: number;
  day: string;
  morningTime: dayjs.Dayjs | null;
  eveningTime: dayjs.Dayjs | null;
}

const TimeTable: React.FC = () => {
  const [data, setData] = useState<TimeData[]>([]);

  const handleTimeChange = (
    type: "morningTime" | "eveningTime",
    key: number,
    value: dayjs.Dayjs | null
  ) => {
    console.log("type:", type, "key: ", key, "value:", value);
  
    setData((prevData) =>
      prevData.map((item) => {
        if (item.key === key) {
          const updatedItem = { ...item, [type]: value ? [value, value] : null };
          return updatedItem;
        }
        return item;
      })
    );
  };
  

  const columns = [
    {
      title: "Day",
      dataIndex: "day",
      key: "day",
    },
    {
      title: "Morning Time",
      dataIndex: "morningTime",
      key: "morningTime",
      render: (record: TimeData) => (
        <div className="flex gap-2 items-center">

          {/* <TimePicker
            value={record.morningTime}
            onChange={(value) =>
              handleTimeChange("morningTime", record.key, value)
            }
            format="h:mm A" // changed format to match dayjs format
            className="custom-time-picker "
            
            
          /> */}
                    {/* <input type="time" for  name="" id="" className="border p-2  rounded-md w-36 h-9 outline-blue-500"/>
                    <TimePicker.RangePicker />
 */}
 <TimePicker.RangePicker
 onChange={handleTimeChange}/>
          <Switch size="small" defaultChecked className="bg-red-500"/>
          
        </div>
      ),
    },
    {
      title: "Evening Time",
      dataIndex: "eveningTime",
      key: "eveningTime",
      render: (record: TimeData) => (

        <div className="flex gap-2 items-center">
          {/* <TimePicker
            value={record.eveningTime}
            onChange={(value) =>
              handleTimeChange("eveningTime", record.key, value)
            }
            format="h:mm A" // changed format to match dayjs format
            className="custom-time-picker "
          /> */}
          <TimePicker.RangePicker />


          {/* <input type="time"  name="" id="" format="h:mm A" className="border p-2  rounded-md w-36 h-9 outline-blue-500"/> */}
           <Switch size="small" defaultChecked className="bg-red-500"/>

        </div>
      ),
    },
  ];





  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const initialData: TimeData[] = days.map((day, index) => ({
    key: index + 1,
    day,
    morningTime: dayjs(), // Initialize with the current time
    eveningTime: dayjs(), // Initialize with the current time
  }));

  return (
    <div>
      <Table
        dataSource={data.length === 0 ? initialData : data}
        columns={columns}
        pagination={false}
        className="mb-4 rounded-md"
      />
    </div>
  );
};

export default TimeTable;




