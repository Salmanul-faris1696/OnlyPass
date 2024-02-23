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

interface CustomerData {
  key:string
  _id: string;
  facilityName: string;
  address: string;
}

const Customer: React.FC = () => {
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
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
      },

      {
        title: 'Membership',
        key: 'membership',
        dataIndex: 'membership',
        render: (membership:any) => (
          <>
            {membership.map((tag:any) => {
              let color = tag === "Inactive" ? 'red' : 'green';
              
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
    name:"salman" ,
    gender:'male',
    phoneNumber:"7559889699",
    email:"salmanSb0786@gmail.com",
    type:"onlypass",    
    membership:['Active']


   },
   {
    key:2,
    name:"Mohammed Niyad" ,
    gender:'male',
    phoneNumber:"7894561230",
    email:"niyad123@gmail.com",
    type:"onlypass",    
    membership:['Inactive']


   },

  ]


  return (
    <div>
      {/* headerSection */}
        <div className=' bg-[#F2F2F2] px-16 pb-10 '>
          <div className='flex justify-between items-center py-10 '>

            <div className='text-3xl font-semibold '>
              <h1>Customer</h1>
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
                  <p className='text-[#ACACAC]'>Total Customers</p>
                  <h1 className='text-3xl font-semibold'>5,423</h1>
                  <p className='flex items-center gap-2'><span className='text-[#00ac4f] flex items-center gap-2 font-bold'><FaArrowUp  />16%</span> this month</p>
                </div>
            </div>
            <div className='flex gap-5 border-r-2 pr-10'>
               <div>
                <img src={svg3} alt="" />
               </div>
                <div>
                  <p className='text-[#ACACAC]'>Membership Sold</p>
                  <h1 className='text-3xl font-semibold'>1893</h1>
                  <p className='flex items-center gap-2'><span className='text-[#D0004B] flex items-center gap-2 font-bold'><FaArrowDown  />1%</span> this month</p>
                </div>
            </div>
            <div className='flex gap-5  pr-10 '>
               <div>
                <img src={svg2} alt="" />
               </div>
                <div>
                  <p className='text-[#ACACAC]'> Active Now</p>
                  <h1 className='text-3xl font-semibold'>183</h1>
                  <p className='flex items-center gap-2'><span className='text-[#D0004B] flex items-center gap-2 font-bold'><FaArrowDown  />39%</span> this month</p>
                </div>
            </div>
          </div>
          
          {/* Table Section */}
          <div className='w-fit sm:w-auto bg-white p-10 mb-8'>
            <div className='font-bold pb-5 text-lg'>
              <h1>All Customers </h1>

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

export default Customer;
