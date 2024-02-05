import React, { useState } from "react";
import { Table, TimePicker } from "antd";
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
        <TimePicker
          value={record.morningTime}
          onChange={(value) =>
            handleTimeChange("morningTime", record.key, value)
          }
          format="h:mm A" // changed format to match dayjs format
          className="custom-time-picker "
        />

        // <Input
        //   type="time"
        //   name=""
        //   id=""
        //   value={record.morningTime}
        //   onChange={(value) =>
        //     handleTimeChange("morningTime", record.key, value)
        //   }
        // />
      ),
    },
    {
      title: "Evening Time",
      dataIndex: "eveningTime",
      key: "eveningTime",
      render: (record: TimeData) => (
        <TimePicker
          value={record.eveningTime}
          onChange={(value) =>
            handleTimeChange("eveningTime", record.key, value)
          }
          format="h:mm A" // changed format to match dayjs format
          className="custom-time-picker "
        />
      ),
    },
  ];

  const handleTimeChange = (
    type: "morningTime" | "eveningTime",
    key: number,
    value: dayjs.Dayjs | null
  ) => {
    console.log("type:",type, "key: ", key,"value:" , value)
    
    setData((prevData) =>
      prevData.map((item) =>
        item.key === key ? { ...item, [type]: value } : item
      )
    );
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



// import React, { useState } from "react";
// import { Table, TimePicker } from "antd";
// import dayjs from "dayjs";
// import "dayjs/locale/en"; // import the locale if needed
// import utc from "dayjs/plugin/utc";
// import timezone from "dayjs/plugin/timezone";

// dayjs.extend(utc);
// dayjs.extend(timezone);

// interface TimeData {
//   key: number;
//   day: string;
//   morningTime: dayjs.Dayjs | null | string;
//   eveningTime: dayjs.Dayjs | null | string;
// }

// const TimeTable: React.FC = () => {
//   const [data, setData] = useState<TimeData[]>([]);

//   const columns = [
//     {
//       title: "Day",
//       dataIndex: "day",
//       key: "day",
//     },
//     {
//       title: "Morning Time",
//       dataIndex: "morningTime",
//       key: "morningTime",
//       render: (record: TimeData) => (
//         <TimePicker
//           value={record?.morningTime}
//           onChange={(value) =>
//             handleTimeChange("morningTime", record.key, value)
//           }
//           format="h:mm A" // changed format to match dayjs format
//           className="custom-time-picker "
//         />

//         // <Input
//         //   type="time"
//         //   name=""
//         //   id=""
//         //   value={record.morningTime}
//         //   onChange={(value) =>
//         //     handleTimeChange("morningTime", record.key, value)
//         //   }
//         // />
//       ),
//     },
//     {
//       title: "Evening Time",
//       dataIndex: "eveningTime",
//       key: "eveningTime",
//       render: (record: string) => (
//         <TimePicker
//           // value={record}
//           onChange={(value) => {
//             console.log({ value, record });
//             // const date = dayjs(value?.day)
//             // const day =
//             const key = Math.floor(Math.random() * 1999);
//             // const day = value?.day() === 0 ? "Monday" :
//             const day = record;
//             setData((prev) => [
//               ...prev,
//               { key, day, eveningTime: value, morningTime: null },
//             ]);
//             // handleTimeChange("eveningTime", record.key, value);
//           }}
//           format="h:mm A" // changed format to match dayjs format
//           className="custom-time-picker "
//         />
//       ),
//     },
//   ];

//   // const handleTimeChange = (
//   //   type: "morningTime" | "eveningTime",
//   //   key: number,
//   //   value: dayjs.Dayjs | null
//   // ) => {
//   //   console.log({ type, key, value });

//   //   setData((prevData) =>
//   //     prevData.map((item) =>
//   //       item.key === key ? { ...item, [type]: value } : item
//   //     )
//   //   );
//   // };

//   const days = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];

//   const initialData: TimeData[] = days.map((day, index) => ({
//     key: index + 1,
//     day,
//     morningTime: day, // Initialize with the current time
//     eveningTime: day, // Initialize with the current time
//   }));

//   console.log("time data:", initialData, { data });

//   return (
//     <div>
//       <Table
//         dataSource={initialData}
//         columns={columns}
//         pagination={false}
//         className="mb-4 rounded-md"
//       />
//     </div>
//   );
// };

// export default TimeTable;
