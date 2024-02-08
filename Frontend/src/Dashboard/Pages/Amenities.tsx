import { Button, Input, Modal, Switch, Table } from 'antd';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { PiPlusCircle } from 'react-icons/pi';
import { ApiClientPrivate } from '../../utils/axios';

interface Amenity {
  key: string;
  name: string;
}

const Amenities: React.FC = () => {
  const [amentyData, setAmentyData] = useState<Amenity[]>([]);
  const [filteredData, setFilteredData] = useState<Amenity[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [newAmenityName, setNewAmenityName] = useState<string>('');

  const fetchData = async () => {
    try {
      const res = await ApiClientPrivate.get("/amenities");
      setAmentyData(res.data);
      setFilteredData(res.data); 
      // Set filtered data initially with all data
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []); 

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const lowerCasedValue = value.toLowerCase();
    const filtered = amentyData.filter((item) =>
      item.name.toLowerCase().includes(lowerCasedValue)
    );

    setFilteredData(filtered);
  };

  const tableData = filteredData?.map((It :any,i:number) =>(
    {
      ...It, key:i+1
    }
  ))

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  const columns = [
    {
      title: 's.No',
      dataIndex: "key",
      key: 'sNo',
      width: 100,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 300,
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Enable/ Disable',
      width: 200,
      key: 'action',
      render: () => (
        <Switch defaultChecked onChange={onChange} />
      ),
    },
  ];

  

  const showModal = () => {
    setNewAmenityName('');
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleAddAmenity = async () => {

    try {
      const newData = [...amentyData, { key: (amentyData.length + 1).toString(), name: newAmenityName }];
      console.log(newData);
      
      setAmentyData(newData);
      setFilteredData(newData);
      setIsModalVisible(false);
  
      await ApiClientPrivate.post("/amenities/create",{name :newAmenityName})
      console.log("added");

      setNewAmenityName('');
      console.log(105, )
      
      
    } catch (error) {
      console.log(error);
      
      
    }
   


  };

  return (
    <div className=''>
      {/* header-Section */}
      <div className='headerSection mt-24'>
        <div className=' p-6 bg-slate-100 font-extrabold   text-2xl flex justify-between '>
          <h1>Amenities</h1>
          <div className='bg-black w-fit text-white text-sm flex p-2 rounded-lg hover:shadow-lg'>
            <button className='md:flex md:items-center gap-2 hidden ' onClick={showModal}>
              <PiPlusCircle size={20} /> New Amenities
            </button>
            <button className='items-center md:hidden ' onClick={showModal}>
              <PiPlusCircle size={20} />
            </button>
          </div>
        </div>
      </div>
      {/* Search bar */}
      <div className='m-3 p-2'>
        <Input
          placeholder='Search amenities'
          style={{ width: 200, marginBottom: 16 }}
          onChange={onChangeSearch}
        />
      </div>
      {/* table-Secion */}
      <div>
        <Table
          columns={columns}
          dataSource={tableData} // Use filteredData instead of amentyData
          pagination={{ pageSize: 10 }}
          className='m-3 p-2  shadow-lg '
        />
      </div>
      <Modal
        title='Add New Amenity'
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key='cancel' onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key='add' type='primary' onClick={handleAddAmenity} className='bg-blue-500'>
            Add
          </Button>,
        ]}
      >
        <Input
          placeholder='Enter Amenity Name'
          onChange={(e) => setNewAmenityName(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default Amenities;
