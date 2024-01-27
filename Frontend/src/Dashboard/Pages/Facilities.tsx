import React, { useState } from 'react';
import { PiPlusCircle } from 'react-icons/pi';
import { Table, Input, Button, Switch } from 'antd';
import { Link } from 'react-router-dom';

const { Search } = Input;

interface FacilityData {
  key: string;
  facilityName: string;
  location: string;
}

const data: FacilityData[] = [
    {
      key: '1',
      facilityName: 'Hulk Fit',
      location: 'ABC',
      
    },
    {
      key: '2',
      facilityName: 'Fit And Style Multi Gym',
      location: 'CDE',
    },
    {
      key: '3',
      facilityName: 'Hulk Fit',
      location: 'ABC',
    },
  ];

const Facilities: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [filteredData, setFilteredData] = useState<FacilityData[]>(data);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    const lowerCasedValue = value.toLowerCase();
    const filtered = data.filter(
      (item) =>
        item.facilityName.toLowerCase().includes(lowerCasedValue) ||
        item.location.toLowerCase().includes(lowerCasedValue) 
       
    );

    setFilteredData(filtered);
  };

  const handleDelete = (key: string) => {
    const updatedData = data.filter((item) => item.key !== key);
    setFilteredData(updatedData);
  };

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
      render: (text: string, record: FacilityData) => (
        <Link to={`/FacilitiesDetails/`}>{text}</Link>
      ),
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      width: 300,
    },
    {
        title: 'Onlypass',
        width: 200,
        key: 'action',
        render: ( record: FacilityData) => (
          <Switch defaultChecked onChange={onChange} />
        ),
      },

      {
        title: 'Web platform',
        width: 200,
        key: 'action',
        render: ( record: FacilityData) => (
          <Switch defaultChecked onChange={onChange} />
        ),
      },
    
  ];



  return (
    <div>
      {/* headerSection */}
      <div className='headerSection mt-24'>
        <div className='m-5 p-6 bg-slate-100 font-bold  text-2xl flex justify-between '>
          <h1>Facilities</h1>
          <div className='bg-black w-fit text-white text-sm flex p-2 rounded-lg hover:shadow-lg'>
            <Link to={"/Form"}>
            <button className='md:flex md:items-center gap-2 hidden  md:block'>
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
          
          dataSource={filteredData ? filteredData : data}
          pagination={{ pageSize: 10 }}
          
          className='m-3 p-2 shadow-lg'
        />
      </div>
    </div>
  );
};

export default Facilities;
