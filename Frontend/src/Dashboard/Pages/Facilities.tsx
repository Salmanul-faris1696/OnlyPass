import { Input, Switch, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { PiPlusCircle } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { ApiClientPrivate } from '../../utils/axios';

const { Search } = Input;

interface FacilityData {
  key:string
  _id: string;
  facilityName: string;
  place: string;
}

const Facilities: React.FC = () => {
  const [facilityData, setFacilityData] = useState<FacilityData[]>([])
  const [filteredData, setFilteredData] = useState<FacilityData[]>([]);

    // Data fetching.....!
    const fecthFacility = async () => {
      try {
        const res = await ApiClientPrivate.get("/facilities");
        console.log(res.data);

        setFacilityData(res.data);
        setFilteredData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      fecthFacility();
    }, []);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const lowerCasedValue = value.toLowerCase();
    const filtered = facilityData.filter(
      (item) =>
        item.facilityName.toLowerCase().includes(lowerCasedValue) ||
        item.place.toLowerCase().includes(lowerCasedValue) 
       
    );

    setFilteredData(filtered);
  };

    const tableData = filteredData?.map((It: any, i: number) => ({
      ...It,
      key: i + 1,
    }));

  // const handleDelete = (key: string) => {
  //   const updatedData = data.filter((item) => item.key !== key);
  //   setFilteredData(updatedData);
  // };

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  const columns = [
    {
      title: 's.No',
      dataIndex: 'key',
      key: 'sNo',
      width: 100,
    },
    {
      title: 'Facilities',
      dataIndex: 'facilityName',
      key: 'facilityName',
      width: 300,
      render: (text: string) => (
        <Link to={`/FacilitiesDetails/`}>{text}</Link>
      ),
    },
    {
      title: 'Location',
      dataIndex: 'place',
      key: 'place',
      width: 300,
    },
    {
        title: 'Onlypass',
        width: 200,
        key: 'action',
        render: () => (
          <Switch defaultChecked onChange={onChange} />
        ),
      },

      {
        title: 'Web platform',
        width: 200,
        key: 'action',
        render: () => (
          <Switch defaultChecked onChange={onChange} />
        ),
      },
    
  ];

  
  // console.log("facility: ", facilityData);  


  return (
    <div>
      {/* headerSection */}
      <div className='headerSection mt-24'>
        <div className='m-5 p-6 bg-slate-100 font-bold  text-2xl flex justify-between '>
          <h1>Facilities</h1>
          <div className='bg-black w-fit text-white text-sm flex p-2 rounded-lg hover:shadow-lg'>
            <Link to={"/Form"}>
            <button className='md:flex md:items-center gap-2 hidden'>
              <PiPlusCircle size={20} /> New Facilities
            </button>
            <button className=' items-center md:hidden  '>
              <PiPlusCircle size={20} />
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div className='m-3 p-2'>
        <Search
          placeholder='Search Facilities '
          style={{ width: 200, marginBottom: 16 }}
          onChange={onChangeSearch}
        />
      </div>

      {/* Table Section */}
      <div>
        <Table
          columns={columns}
          dataSource={tableData}
          pagination={{ pageSize: 10 }}
          className='m-3 p-2 shadow-lg'
        />
      </div>
    </div>
  );
};

export default Facilities;
