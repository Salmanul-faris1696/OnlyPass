import React, { useState, ChangeEvent, useEffect } from 'react';
import { PiPlusCircle } from 'react-icons/pi';
import { Card, Switch, Modal, Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { ApiClientPrivate } from '../../utils/axios';
import { imaageURL } from '../../utils/urls';
import { MdTry } from 'react-icons/md';

const { Meta } = Card;

interface Equipment {
  _id: number;
  image: string;
  name: string;
}

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
      console.log({newEquipmentImage});
      
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
    console.log({info});
    
    try {
      // if (info.file.status === 'done') {
        const imageUrl = info.file;
        console.log({"suiii":info});
        
        setNewEquipmentImage(imageUrl);
      // }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };


  // dummy data
  // const item: Equipment[] = [
  //   {
  //     id: 1,
  //     alt: 'Dumble',
  //     src: 'https://m.media-amazon.com/images/I/810EGe3fZHL._AC_UL480_FMwebp_QL65_.jpg',
  //     title: 'Dumble',
  //   },
  //   {
  //       id:2,
        
  //       alt:'example',
  //       src:'https://imgs.search.brave.com/2ppFCLuH6VKDxFmvaqg8BDKLQwGvLIR-7N1u0L7MAck/rs:fit:860:0:0/g:ce/aHR0cHM6Ly95b3Jr/YmFyYmVsbC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MDMvUGljdHVyZTEu/anBn',
  //       title:"inline press",
        
  //     },
  //     {
  //       id:3,
        
  //       alt:'example',
  //       src:'https://imgs.search.brave.com/bO9koaK2sIV0PxKkXPJf3VBcNz42WzfSf-dKHxqa4Lw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/OTFxcFRTeFNqbkwu/anBn',
  //       title:"Cable Handles ",
        
  //     },
  //     {
  //       id:4,
        
  //       alt:'example',
  //       src:'https://imgs.search.brave.com/kjMjRLRLBuwYPzXoK52zPDqaHc6Oz2EflrDFcdvstkw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/MzYwZml0bmVzc3N1/cGVyc3RvcmUuY29t/L2Nkbi9zaG9wL2Nv/bGxlY3Rpb25zL0d5/bV9SaW5nc19jb3B5/X2xhcmdlLmpwZz92/PTE2MTUyMzY3MzQ',
  //       title:"Gym ring",
  //     },
  //     {
  //       id:5,
        
  //       alt:'example',
  //       src:'https://imgs.search.brave.com/4wkaGqzWvvmFb8o2DxiHHRMlhlkMBFM-3eUN-BmAeH4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmZ0Zml0bmVzcy5j/b20vdXBsb2Fkcy9h/bGxpbWcvMjIwNzA2/LzEtMjIwRjYxRjk1/MDUxNC5qcGc',
  //       title:"Power rack",
  //     },
  //     {
  //       id:6,
        
  //       alt:'example',
  //       src:'https://imgs.search.brave.com/FoCO0cSw9xvnkQhuhpRhCufM8xtQKOsk1MAEesMbQy8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zaG9w/LmxpZmVmaXRuZXNz/LmNvbS9jZG4vc2hv/cC9wcm9kdWN0cy9s/aWZlLWZpdG5lc3Mt/cHJlbWl1bS1lcXVp/cG1lbnQtbWF0LWxh/cmdlLWV4YW1wbGUt/dHJlYWRtaWxsLTEw/MDB4MTAwMC5qcGc_/dj0xNjIzODUzNTU3/JndpZHRoPTEwMDA',
  //       title:"treaddmill",
       
  //     },
    
  // ];


  return (
    <div>
      {/* header-Section */}
      <div className='headerSection mt-24'>
        <div className='m-5 p-6 bg-slate-100 font-bold  text-2xl flex justify-between '>
          <h1>Equipments</h1>
          <div className='bg-black w-fit text-white text-sm flex p-2 rounded-lg hover:shadow-lg'>
            <button className='md:flex md:items-center gap-2 hidden  md:block' onClick={showModal}>
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
