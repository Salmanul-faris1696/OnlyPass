import { UploadOutlined } from '@ant-design/icons';
import { Button, Card, Input, Modal, Switch, Upload } from 'antd';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { PiPlusCircle } from 'react-icons/pi';
import { ApiClientPrivate } from '../../utils/axios';
import { imaageURL } from '../../utils/urls';

const { Meta } = Card;

const Equipments: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [newEquipmentName, setNewEquipmentName] = useState<string>('');
  const [newEquipmentImage, setNewEquipmentImage] = useState<File | null>(null);
  const[equipmentsData , setEquipmetsData]=useState([]);

  const fetchData= async () =>{
    try {
      const res=await ApiClientPrivate.get("/equipments/all-equipment");
      console.log(res.data);
      
      setEquipmetsData(res.data)
      
    } catch (errpr) {
      console.log(errpr);
      
    }
  } 

  useEffect(() => {
    fetchData();
  }, []);

  console.log('equi' , equipmentsData);
  


  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleAddEquipment = async () => {
    try {
      console.log("fiii",{newEquipmentImage});
      
      const formData = new FormData();
      formData.append('name', newEquipmentName);
      formData.append('image', newEquipmentImage as File);

      await ApiClientPrivate.post("/equipments/create-equipments", formData, {
        headers: {
          'Content-Type': 'form-data',
        },
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
    // console.log("hello");
    
    try {
      // if (info.file.status === 'done') {
        const imageUrl = info.file;
        console.log({ suiii: info});
        
        setNewEquipmentImage(imageUrl);
      // }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };



  return (
    <div>
      {/* header-Section */}
      <div className='headerSection mt-24'>
        <div className='m-5 p-6 bg-slate-100 font-bold  text-2xl flex justify-between '>
          <h1>Equipments</h1>
          <div className='bg-black w-fit text-white text-sm flex p-2 rounded-lg hover:shadow-lg'>
            <button className='md:flex md:items-center gap-2 hidden ' onClick={showModal}>
              <PiPlusCircle size={20} /> New Equipments
            </button>
            <button className=' items-center md:hidden ' onClick={showModal}>
              <PiPlusCircle size={20} />
            </button>
          </div>
        </div>
      </div>
      {/* CardSection */}
      <div className='Card-Section  grid gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 '>
        {equipmentsData.map(({ _id,  image, name }) => (
          <div className='mx-auto' key={_id}>
            <Card className='w-[300px] p-1 shadow-md'>
              <img alt={name} src={`${imaageURL}/${image}`} className='p-2  border-b-2 w-[300px] h-[300px]' />
              <div className='flex items-center justify-between'>
                <Meta title={name} />
                <Switch defaultChecked onChange={onChange} />
              </div>
            </Card>
          </div>
        ))}
      </div>

      <Modal
        title='Add New Equipment'
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key='cancel' onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key='add' type='primary' onClick={handleAddEquipment} className='bg-blue-500'>
            Add
          </Button>,
        ]}
      >
        <Input
          placeholder='Equipment Name'
          value={newEquipmentName}
          onChange={onEquipmentNameChange}
          className='mb-3'
        />
        <Upload
          name='equipmentImage'
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
