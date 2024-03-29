import { UploadOutlined } from '@ant-design/icons';
import { Button, Card, Input, Modal, Switch, Upload } from 'antd';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { PiPlusCircle } from 'react-icons/pi';
import { ApiClientPrivate } from '../../utils/axios';
import { imaageURL } from '../../utils/urls';
import { RiSearchLine } from 'react-icons/ri';
import { MdDeleteForever } from 'react-icons/md';

interface Equipment {
  key: string;
  name: string;
  _id: string;
  image: string;
}
const { Meta } = Card;
const Equipments: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [newEquipmentName, setNewEquipmentName] = useState<string>('');
  const [newEquipmentImage, setNewEquipmentImage] = useState<File | null>(null);
  const [equipmentsData, setEquipmetsData] = useState([]);
  const [filteredData, setFilteredData] = useState<Equipment[]>([]);
  const fetchData = async () => {
    try {
      const res = await ApiClientPrivate.get('/equipments/all-equipment');
      console.log(res.data);
      setEquipmetsData(res.data);
      setFilteredData(res.data);
    } catch (errpr) {
      console.log(errpr);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // console.log('equi' , equipmentsData);
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleAddEquipment = async () => {
    try {
      // console.log("fiii",{newEquipmentImage});
      const formData = new FormData();
      formData.append('name', newEquipmentName);
      formData.append('image', newEquipmentImage as File);

      await ApiClientPrivate.post('/equipments/create-equipments', formData, {
        headers: {
          'Content-Type': 'form-data'
        }
      });
      // Fetch updated data from the server after adding a new equipment
      fetchData();
      console.log('Equipment added:', newEquipmentName, newEquipmentImage);
      setIsModalVisible(false);
    } catch (error) {
      console.error('Error adding equipment:', error);
    }
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onEquipmentNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewEquipmentName(e.target.value);
  };
  const onEquipmentImageChange = (info: any) => {
    try {
      const imageUrl = info.file;
      console.log({ suiii: info });

      setNewEquipmentImage(imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const lowerCasedValue = value.toLowerCase();
    const filtered = equipmentsData.filter((item: any) =>
      item.name.toLowerCase().includes(lowerCasedValue)
    );

    setFilteredData(filtered);
  };

  const deleteEquipment = async (id: string) => {
    try {
      const res = await ApiClientPrivate.delete(`/equipments/delete-equipment/${id}`);
      if (res) {
        window.location.reload();
      }
    } catch (error) {
      alert('cannot delete amenities ');
    }
  };

  return (
    <div className="bg-[#F2F2F2] px-16 pb-10">
      {/* header-Section */}
      <div className="headerSection ">
        <div className="py-10 text-3xl font-semibold  flex justify-between ">
          <h1>Equipments</h1>

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
              <PiPlusCircle size={20} /> New Equipments
            </button>
            <button className=" items-center md:hidden " onClick={showModal}>
              <PiPlusCircle size={20} />
            </button>
          </div>
        </div>
      </div>
      {/* CardSection */}
      <div className="Card-Section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid lg:grid-cols-4 gap-3">
        {filteredData.map(({ _id, image, name }) => (
          <div className="mx-auto" key={_id}>
            <Card className="lg:w-[250px]   p-1 shadow-md">
              <div className="flex">
                <img
                  alt={name}
                  src={`${imaageURL}/${image}`}
                  className="p-2  border-b-2 w-[200px] h-[200px]"
                />
                <div className="-mt-4 ml-1 w-fit" onClick={() => deleteEquipment(_id)}>
                  <MdDeleteForever
                    size={16}
                    className="hover:text-red-500 duration-300 scale-100 hover:scale-125"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <Meta title={name} />
                <Switch size="small" defaultChecked onChange={onChange} />
              </div>
            </Card>
          </div>
        ))}
      </div>
      <Modal
        title="Add New Equipment"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="add" type="primary" onClick={handleAddEquipment} className="bg-blue-500">
            Add
          </Button>
        ]}
      >
        <Input
          placeholder="Equipment Name"
          value={newEquipmentName}
          onChange={onEquipmentNameChange}
          className="mb-3"
        />
        <Upload
          name="equipmentImage"
          showUploadList={false}
          beforeUpload={() => false}
          onChange={onEquipmentImageChange}
        >
          <Button icon={<UploadOutlined />}>Upload Image</Button>
        </Upload>
      </Modal>
    </div>
  );
};

export default Equipments;
