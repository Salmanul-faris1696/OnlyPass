import { Button, Input, Modal, Switch, Table, Upload } from 'antd';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { PiPlusCircle } from 'react-icons/pi';
import { ApiClientPrivate } from '../../utils/axios';
import { MdDeleteForever } from "react-icons/md";
import { UploadOutlined } from '@ant-design/icons';
import { iconURL } from '../../utils/urls';

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


console.log("data>>>",amentyData);



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
      width: 50,
    },  
    {
      title: 'Name',
      // dataIndex: 'name',
      key: 'name',
      width: 250,
      render: (record: any) =>(
        <div className='flex items-center gap-3'>
          <img src={`${iconURL}/${record.icon} ` } alt={record} style={{ width: '25px' }}  />
          <a>{record.name}</a>
          </div>
        ) ,
    },
    {
      title: 'Enable/ Disable',
      width: 100,
      key: 'action',
      render: () => (
        <Switch defaultChecked onChange={onChange} />
      ),
    },
    {
      // title: 'Enable/ Disable',
      width: 50,
      key: 'action',
      render: (record:any) => (
        <MdDeleteForever size={20} className='hover:text-red-500 scale-100 hover:scale-125 duration-200' onClick= {()=>deleteAmenities(record._id)}/>
      ),
    },
  ];

  const deleteAmenities = async(id:string) => {
    console.log("mm" , id);
    
    try {
       const res = await  ApiClientPrivate.delete(`/amenities/remove/${id}`)
       if(res){
         window.location.reload();
       }
    } catch (error) {
      alert(
        "cannot delete amenities "

      )
      
      
    }
  }

  

  const showModal = () => {
    setNewAmenityName('');
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setNewAmenityName('')
  };

  const handleAddAmenity = async () => {

    try {
      const newData = [...amentyData, { key: (amentyData.length + 1).toString(), name: newAmenityName }];
      console.log(newData);
      
      // setAmentyData(newData);
      // setFilteredData(newData);
      setIsModalVisible(false);
      setNewAmenityName('')
  
      const formData = new FormData();
      formData.append('name', newAmenityName);
      formData.append('icon', newAmenityIcon as File);

      await ApiClientPrivate.post("/amenities/create", formData, {
        headers: {
          'Content-Type': 'form-data',
        },
      });

      // Fetch updated data from the server after adding a new equipment
      fetchData();
      setNewAmenityName('')

      // console.log('Equipment added:', newEquipmentName, newEquipmentImage);
      setIsModalVisible(false);
        
    } catch (error) {
      console.error('Error adding equipment:', error);
    }
   
  };

  const onAmenityChange = (info: any) => {
    // console.log("hello");
    
    try {
      // if (info.file.status === 'done') {
        const imageUrl = info.file;
        // console.log({ suiii: info});
        
        setnewAmenityIcon(imageUrl);
      // }
    } catch (error) {
      console.error('Error uploading image:', error);
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
          // <Button key='cancel' onClick={handleCancel}>
          //   Cancel
          // </Button>,
          <Button key='add' type='primary' onClick={handleAddAmenity}  disabled={!newAmenityName.trim()} className='bg-blue-500'>
            Add
          </Button>,
        ]}
      >
        <Input
          placeholder='Enter Amenity Name'
          onChange={(e) => setNewAmenityName(e.target.value)}
          value={newAmenityName}
          className='mb-3'
        />

          <Upload
          name='amenityicon'
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
