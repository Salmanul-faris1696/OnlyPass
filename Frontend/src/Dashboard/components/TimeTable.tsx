import { Switch, Table } from "antd";
import React, { useState } from "react";
import TimeMorning from "./TimeMorning";
import TimeEvening from "./TimeEvening";

interface TimeData {
  key: number;
  day: string;
  morningTime?: string;
  eveningTime?: string;
  isChecked: boolean;
  morningDisabled:boolean
  eveningDisabled:boolean
}

const TimeTable: React.FC = () => {
  const handleTime = (e: any) => {
    console.log("time222", e.target.value);
  };

  const handleSwitchChange = (index: number, checked: boolean, timeType: "morning" | "evening") => {
    setInitialData((prevData) => {
      const newData = [...prevData];
      newData[index].isChecked = checked;
  
      if (timeType === "morning") {
        newData[index].morningDisabled = checked;
      } else if (timeType === "evening") {
        newData[index].eveningDisabled = checked;
      }
  
      return newData;
    });
  };

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [initialData, setInitialData] = useState<TimeData[]>(() =>
    days.map((day, index) => ({
      key: index + 1,
      morningTime: day,
      eveningTime: day,
      day,
      isChecked: false,
      morningDisabled:false,
      eveningDisabled:false
    }))
  );

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
      render: (record: any, rowData: TimeData) => (
        <div className={`grid gap-2 ${rowData.isChecked ? 'text-red-500' : ''}`}>
          <TimeMorning
            holder={"starting"}
            timetype="morningTime"
            day={record}
            onChange={handleTime}
            disabled={rowData.morningDisabled}
          />

          <TimeMorning
            holder={"ending"}
            day={record}
            timetype="morningTime"
            onChange={handleTime}
            disabled={rowData.morningDisabled}
          />
           <Switch
  size="small"
  checked={rowData.morningDisabled}
  onChange={(checked) => handleSwitchChange(rowData.key - 1, checked, "morning")}
  checkedChildren="Holiday"
  unCheckedChildren="Open"
  className="bg-green-400"
/>
        </div>
      ),
    },
    {
      title: "Evening Time",
      dataIndex: "eveningTime",
      key: "eveningTime",
      render: (record: any, rowData: TimeData) => (
        <div className="grid gap-2" onChange={handleTime}>
          <TimeEvening
            holder={"starting"}
            timetype="eveningTime"
            day={record}
            disabled={rowData.eveningDisabled}
          />
          <TimeEvening
            holder={"ending"}
            timetype="eveningTime"
            day={record}
            disabled={rowData.eveningDisabled}
          />
            <Switch
          size="small"
          checked={rowData.eveningDisabled}
          onChange={(checked) => handleSwitchChange(rowData.key - 1, checked, "evening")}
          checkedChildren="Holiday"
          unCheckedChildren="Open"
          className="bg-green-400"
        />
        </div>
      ),
    },
  ];

  return (
    <div className="md:w-fit ">
      <Table
        dataSource={initialData}
        columns={columns}
        pagination={false}
        className="mb-4 rounded-md w-fit"
      />
    </div>
  );
};


export default TimeTable;




