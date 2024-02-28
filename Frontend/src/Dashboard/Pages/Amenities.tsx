import { Button, Input, Modal, Switch, Table, Upload } from 'antd';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { PiPlusCircle } from 'react-icons/pi';
import { ApiClientPrivate } from '../../utils/axios';
import { MdDeleteForever } from 'react-icons/md';
import { UploadOutlined } from '@ant-design/icons';
import { iconURL } from '../../utils/urls';
import { RiSearchLine } from 'react-icons/ri';

interface Amenity {
  key: string;
  name: string;
}

const Amenities: React.FC = () => {
  const [amentyData, setAmentyData] = useState<Amenity[]>([]);
  const [filteredData, setFilteredData] = useState<Amenity[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [newAmenityName, setNewAmenityName] = useState<string>('');
  const [newAmenityIcon, setnewAmenityIcon] = useState<File | null>(null);

  const fetchData = async () => {
    try {
      const res = await ApiClientPrivate.get('/amenities');
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
    const filtered = amentyData.filter((item) => item.name.toLowerCase().includes(lowerCasedValue));

    setFilteredData(filtered);
  };

  const tableData = filteredData?.map((It: any, i: number) => ({
    ...It,
    key: i + 1
  }));

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  const columns = [
    {
      title: 's.No',
      dataIndex: 'key',
      key: 'sNo',
      width: 100
    },
    {
      title: 'Name',
      // dataIndex: 'name',
      key: 'name',
      // width: 250,
      render: (record: any) => (
        <div className="flex items-center gap-3">
          <img src={`${iconURL}/${record.icon} `} alt={record} style={{ width: '25px' }} />
          <a>{record.name}</a>
        </div>
      )
    },
    {
      title: 'Enable/ Disable',
      width: 150,
      key: 'action',
      render: () => (
        <div className="flex items-center justify-center">
          <Switch size="small" defaultChecked onChange={onChange} />
        </div>
      )
    },
    {
      // title: 'Enable/ Disable',
      width: 100,
      key: 'action',
      render: (record: any) => (
        <MdDeleteForever
          size={20}
          className="hover:text-red-500 scale-100 hover:scale-125 duration-200"
          onClick={() => deleteAmenities(record._id)}
        />
      )
    }
  ];

  const deleteAmenities = async (id: string) => {
    console.log('mm', id);

    try {
      const res = await ApiClientPrivate.delete(`/amenities/remove/${id}`);
      if (res) {
        window.location.reload();
      }
    } catch (error) {
      alert('cannot delete amenities ');
    }
  };
  const showModal = () => {
    setNewAmenityName('');
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setNewAmenityName('');
  };
  const handleAddAmenity = async () => {
    try {
      const newData = [
        ...amentyData,
        { key: (amentyData.length + 1).toString(), name: newAmenityName }
      ];
      console.log(newData);
      setIsModalVisible(false);
      setNewAmenityName('');

      const formData = new FormData();
      formData.append('name', newAmenityName);
      formData.append('icon', newAmenityIcon as File);

      await ApiClientPrivate.post('/amenities/create', formData, {
        headers: {
          'Content-Type': 'form-data'
        }
      });

      // Fetch updated data from the server after adding a new equipment
      fetchData();
      setNewAmenityName('');

      // console.log('Equipment added:', newEquipmentName, newEquipmentImage);
      setIsModalVisible(false);
    } catch (error) {
      console.error('Error adding equipment:', error);
    }
  };

  const onAmenityChange = (info: any) => {
    try {
      const imageUrl = info.file;
      setnewAmenityIcon(imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="bg-[#F2F2F2] px-16 pb-10">
      {/* header-Section */}
      <div className="headerSection ">
        <div className=" py-10 text-3xl font-semibold flex justify-between ">
          <h1>Amenities</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              onChange={onChangeSearch}
              className="lg:w-[500px] w-[250px] h-[40px] text-sm pl-8 outline-none"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <RiSearchLine className="text-gray-500" size={18} />
            </div>
          </div>
          <div className="bg-black w-fit text-white text-sm flex p-2 rounded-lg hover:shadow-lg">
            <button className="md:flex md:items-center gap-2 hidden " onClick={showModal}>
              <PiPlusCircle size={20} /> New Amenities
            </button>
            <button className="items-center md:hidden " onClick={showModal}>
              <PiPlusCircle size={20} />
            </button>
          </div>
        </div>
      </div>
      {/* table-Secion */}
      <div>
        <Table
          columns={columns}
          dataSource={tableData} // Use filteredData instead of amentyData
          pagination={{ pageSize: 10 }}
          className="m-3 p-2  shadow-lg "
        />
      </div>

      <Modal
        title="Add New Amenity"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button
            key="add"
            type="primary"
            onClick={handleAddAmenity}
            disabled={!newAmenityName.trim()}
            className="bg-blue-500"
          >
            Add
          </Button>
        ]}
      >
        <Input
          placeholder="Enter Amenity Name"
          onChange={(e) => setNewAmenityName(e.target.value)}
          value={newAmenityName}
          className="mb-3"
        />

        <Upload
          name="amenityicon"
          showUploadList={false}
          beforeUpload={() => false}
          onChange={onAmenityChange}
        >
          <Button icon={<UploadOutlined />}>Upload Image</Button>
        </Upload>
      </Modal>
    </div>
  );
};

export default Amenities;
