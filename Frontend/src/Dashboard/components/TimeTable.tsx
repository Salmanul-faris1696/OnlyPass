import { Table } from "antd";
import React, { useState } from "react";
import Time from "./Time";

interface TimeData {
  key: number;
  day: string;
  morningTime?: string;
  eveningTime?: string;
  
}

const TimeTable: React.FC = () => {

const handleTime = (e:any) =>{
  console.log("time222",e.target.value);
  


}

 

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
      render: (record:any) => (
          <div className="grid gap-2" >
            <Time holder={"starting"} timetype="morningTime" day={record} onChange={handleTime} />
            <Time holder={"ending"} day={record} timetype="morningTime" onChange={handleTime}/>
          </div>
      ),
    },
    {
      title: "Evening Time",
      dataIndex: "eveningTime",
      key: "eveningTime",
      render: (record:any) => (
        <div className="grid gap-2" onChange={handleTime} >
          <Time holder={"starting"} timetype="eveningTime" day={record} />
          <Time holder={"ending"} timetype="eveningTime" day={record}/>
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
    morningTime:day,
    eveningTime:day,
    day,
  }));

  return (
    <div>
      <Table
        dataSource={initialData}
        columns={columns}
        pagination={false}
        className="mb-4 rounded-md"
      />
    </div>
  );
};

export default TimeTable;




