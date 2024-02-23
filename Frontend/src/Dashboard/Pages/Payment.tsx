import type { DatePickerProps } from 'antd';
import { DatePicker, Space, Switch, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import svg3 from "../../../public/svg3-onlypass.svg";
import svg2 from "../../../public/svg2-onlypass.svg";
import svg4 from "../../../public/svg4-onlypass.svg";

import { ApiClientPrivate } from '../../utils/axios';

import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from "react-icons/fa6";

// const { Search } = Input;

// interface CustomerData {
//   key:string
//   _id: string;
//   facilityName: string;
//   address: string;
// }

const Payment: React.FC = () => {
//   const [facilityData, setFacilityData] = useState<FacilityData[]>([])
//   const [filteredData, setFilteredData] = useState<FacilityData[]>([]);

    // Data fetching.....!
    // const fetchFacility = async () => {
    //   try {
    //     const res = await ApiClientPrivate.get("/facilities");
    //     console.log({'aaaaa':res.data});

    //     setFacilityData(res.data);
    //     setFilteredData(res.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // useEffect(() => {
    //   fetchFacility();
    // }, []);

    const onChangeDatePicker: DatePickerProps['onChange'] = (date, dateString) => {
      console.log(date, dateString);

    };

//   const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     const lowerCasedValue = value.toLowerCase();
//     const filtered = facilityData.filter(
//       (item) =>
//         item.facilityName.toLowerCase().includes(lowerCasedValue) ||
//         item.address.toLowerCase().includes(lowerCasedValue) 
       
//     );

//     setFilteredData(filtered);
//   };

    // const tableData = filteredData?.map((It: any, i: number) => ({
    //   ...It,
    //   key: i + 1,
    // }));

 

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  const columns = [
    // {
    //   title: 's.No',
    //   dataIndex: 'key',
    //   key: 'sNo',
    // },
    // {
    //   title: 'Name',
    //   dataindex:'name',
    //   key: 'name',
    // //   render: (record:any) => (
    // //     <Link to={`/FacilitiesDetails/${record._id}`}>{record.facilityName}</Link>
    // //   ),
    // },
    {
        title: 'Date & Time',
        dataIndex: 'dateAndTime',
        key: 'dateAndTime',
      },
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId',
    },
    {
      title: 'Faciity / Customer Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'ampunt',
      },

      {
        title: 'Status',
        key: 'sts',
        dataIndex: 'sts',
        render: (sts:any) => (
          <>
            {sts.map((tag:any) => {
             let color = tag === "Active" || tag === "Debited" ? 'green' : 'red';

              
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
      
    
  ];

  
  // console.log("facility: ", facilityData); 
  const dummyCustomer  =[
   {
    key:1,
    dateAndTime:"20/02/2024" ,
    transactionId:'#123456',
    name:"salman",
    description:"Payment received for Gold membership",
    amount:"2,000.00",    
    sts:['Active']


   },
   {
    key:2,
    dateAndTime:"23/02/2024" ,
    transactionId:'#1278956',
    name:"Niyad",
    description:"Payment received for platinium membership",
    amount:"5,000.00",    
    sts:['Debited']


   },
   {
    key:3,
    dateAndTime:"03/03/2024" ,
    transactionId:'#755988',
    name:"Hulk Fit",
    description:"hulkFit2@gmail.com",
    amount:"3,199.00",    
    sts:['Credited']


   },
   {
    key:4,
    dateAndTime:"05/03/2024" ,
    transactionId:'#11111',
    name:"sahad",
    description:"refunded",
    amount:"199.00",    
    sts:['Refunded']


   },
   {
    key:5,
    dateAndTime:"12/03/2024" ,
    transactionId:'#22222',
    name:"Ali",
    description:"Pending",
    amount:"299.00",    
    sts:['Pending']


   },
   

  ]


  return (
    <div>
      {/* headerSection */}
        <div className=' bg-[#F2F2F2] px-16 pb-10 '>
          <div className='flex justify-between items-center py-10 '>

            <div className='text-3xl font-semibold '>
              <h1>Payments</h1>
            </div>

            <div className='relative'>
              <input type="text"
              placeholder='Search'
            //   onChange={onChangeSearch}
              className='lg:w-[500px] w-[250px] h-[40px] text-sm pl-8 outline-none'
              
              />
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                    <RiSearchLine className="text-gray-500" size={18} />
                </div>
            </div>

            <div className='flex text-sm items-center font-medium gap-5 text-[#7e7e7e] '>

              <div >
                <h1>
                  Showing result of
                </h1>
              </div>

              <div>
                <Space direction="vertical">
                <DatePicker
                      onChange={onChangeDatePicker}
                      picker="month"
                      format="MMMM YYYY" // Set the format to display the full month name and year
                      style={{ width: '100%' }}
                      className='w-[250px] h-[40px]'
                />
                </Space>
              </div>
            </div>
          </div>

          {/* Facility REsult Show */}
          <div className='flex justify-evenly bg-white mb-10  py-8'>
            <div className='flex gap-5 border-r-2 pr-10 '>
               <div>
                <img src={svg4} alt="" />
               </div>
                <div>
                  <p className='text-[#ACACAC]'>Total Amount Recieved</p>
                  <h1 className='text-3xl font-semibold'>53,423.00</h1>
                  <p className='flex items-center gap-2'><span className='text-[#00ac4f] flex items-center gap-2 font-bold'><FaArrowUp  />16%</span> this month</p>
                </div>
            </div>
            <div className='flex gap-5 border-r-2 pr-10'>
               <div>
                <img src={svg3} alt="" />
               </div>
                <div>
                  <p className='text-[#ACACAC]'>Total Amount Paid</p>
                  <h1 className='text-3xl font-semibold'>18,950.00</h1>
                  <p className='flex items-center gap-2'><span className='text-[#D0004B] flex items-center gap-2 font-bold'><FaArrowDown  />1%</span> this month</p>
                </div>
            </div>
            <div className='flex gap-5  pr-10 '>
               <div>
                <img src={svg2} alt="" />
               </div>
                <div>
                  <p className='text-[#ACACAC]'> Membership Sold</p>
                  <h1 className='text-3xl font-semibold'>117</h1>
                  <p className='flex items-center gap-2'><span className='text-[#D0004B] flex items-center gap-2 font-bold'><FaArrowDown  />39%</span> this month</p>
                </div>
            </div>
          </div>
          
          {/* Table Section */}
          <div className='w-fit sm:w-auto bg-white p-10 mb-8'>
            <div className='font-bold pb-5 text-lg'>
              <h1>All Payments </h1>

            </div>
            <Table

              columns={columns}
              dataSource={dummyCustomer}
            //   dataSource={tableData}
              pagination={{ pageSize: 10 }}
              className=''
            />
          </div>
        </div>
    </div>
  );
};

export default Payment;
