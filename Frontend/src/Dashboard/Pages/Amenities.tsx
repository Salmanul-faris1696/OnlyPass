import React, { useState, ChangeEvent } from 'react';
import { PiPlusCircle } from 'react-icons/pi';
import { Switch, Table, Input, Modal, Button } from 'antd';

interface Amenity {
  key: string;
  name: string;
}

const data: Amenity[] = [
  {
    key: '1',
    name: 'Wifi',
  },
  {
    key: '2',
    name: 'steam bath',
  },
  {
    key: '3',
    name: 'Dressing room',
  },
];

const Amenities: React.FC = () => {
  const { Search } = Input;
  const [searchText, setSearchText] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Amenity[]>(data);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    const lowerCasedValue = value.toLowerCase();
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(lowerCasedValue)
    );

    setFilteredData(filtered);
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
      render: ( record: Amenity) => (
        <Switch defaultChecked onChange={onChange} />
      ),
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [newAmenityName, setNewAmenityName] = useState<string>('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleAddAmenity = () => {
    const newData = [...data, { key: (data.length + 1).toString(), name: newAmenityName }];
    setFilteredData(newData);
    setIsModalVisible(false);
  };

  return (
    <div className=''>
      {/* header-Section */}
      <div className='headerSection mt-24'>
        <div className='m-5 p-6 bg-slate-100 font-extrabold  text-2xl flex justify-between '>
          <h1>Amenities</h1>
          <div className='bg-black w-fit text-white text-sm flex p-2 rounded-lg hover:shadow-lg'>
            <button className='md:flex md:items-center gap-2 hidden  md:block' onClick={showModal}>
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
        <Search
          placeholder='Search amenities'
          style={{ width: 200, marginBottom: 16 }}
          onChange={onChangeSearch}
        />
      </div>
      {/* table-Secion */}
      <div>
        <Table
          columns={columns}
          dataSource={filteredData ? filteredData : data}
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
