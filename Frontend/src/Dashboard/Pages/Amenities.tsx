import { Button, Modal, Switch, Table } from 'antd';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import svg2 from '../../../public/svg2-onlypass.svg';
import svg3 from '../../../public/svg3-onlypass.svg';
import svg4 from '../../../public/svg4-onlypass.svg';
import { ApiClientPrivate } from '../../utils/axios';
import { iconURL } from '../../utils/urls';
import PageHeader from '../components/common_components/PageHeader';
import UpdateAmenities from '../components/Amenities/UpdateAmenities';
import AddAmenities from '../components/Amenities/AddAmenities';
interface Amenity {
  key: string;
  name: string;
  description: string;
}

const Amenities: React.FC = () => {
  const [amentyData, setAmentyData] = useState<Amenity[]>([]);
  const [filteredData, setFilteredData] = useState<Amenity[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isUpdateModalOpen, setisUpdateModalOpen] = useState<boolean>(false);
  const [newAmenityName, setNewAmenityName] = useState<string>('');
  const [newAmenityDescription, setNewAmenityDescription] = useState<string>('');
  const [newAmenityIcon, setnewAmenityIcon] = useState<File | null>(null);
  const [selectedAmenity, setSelectedAmenity] = useState<Amenity | null>(null);

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

  const handleUpdateAmenity = async (updatedData: any) => {
    console.log('aaaaaaaaaaaaaaaaaaaaaa', updatedData);

    try {
      // Make the API call to update the amenity

      const formData = new FormData();
      formData.append('name', updatedData.amenityName);
      formData.append('description', updatedData.description);
      formData.append(
        'icon',
        updatedData.icon.file?.originFileObj
          ? updatedData.icon.file?.originFileObj
          : (updatedData.icon as File)
      );
      const res = await ApiClientPrivate.put(
        `/amenities/update-amenities/${updatedData.id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      if (res.status === 200) {
        console.log('heello');

        // Optionally, you can handle success, e.g., show a success message
        console.log('Amenity updated successfully');
        // Close the modal or perform any other action as needed
        handleCancel();
        window.location.reload();
      } else {
        // Optionally, handle the case where the update fails
        console.error('Failed to update amenity');
      }
    } catch (error) {
      console.log('hiiiiiiiii');

      // Handle errors, e.g., show an error message
      console.error('Error updating amenity:', error);
    }
  };

  const handleEditClick = (amenity: Amenity) => {
    setSelectedAmenity(amenity);
    setisUpdateModalOpen(true);
  };

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

  const details = [
    {
      icon: svg4,
      head: 'Total Customer',
      value: '5,423',
      percentage: '16'
    },
    {
      icon: svg3,
      head: 'Membership Sold',
      value: '1893',
      percentage: '1'
    },
    {
      icon: svg2,
      head: 'Active Now',
      value: '189',
      percentage: '39'
    }
  ];

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
      width: 300,
      render: (record: any) => (
        <div className="flex items-center gap-3">
          <img src={`${iconURL}/${record.icon} `} alt={record} style={{ width: '25px' }} />
          <a>{record.name}</a>
        </div>
      )
    },
    {
      title: 'Descriptions',
      // dataIndex: 'descriptions',
      key: 'descriptions',
      render: (record: any) => (
        <div className="flex items-start ">
          <p>{record.description}</p>
        </div>
      )
    },
    {
      title: 'Status',
      width: 150,
      key: 'action',
      render: () => (
        <div className="flex items-center justify-center">
          <Switch size="small" defaultChecked onChange={onChange} />
        </div>
      )
    },
    {
      title: 'Options',
      width: 150,
      key: 'action',
      render: (record: any) => (
        <div className="flex items-center gap-2 " onClick={() => handleEditClick(record)}>
          Edit <FaEdit />
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
    setNewAmenityDescription('');
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setisUpdateModalOpen(false);
    setNewAmenityName('');
    setNewAmenityDescription('');
  };
  const handleAddAmenity = async () => {
    try {
      const newData = [
        ...amentyData,
        {
          key: (amentyData.length + 1).toString(),
          name: newAmenityName,
          description: newAmenityDescription
        }
      ];
      console.log(newData);
      setIsModalVisible(false);
      setNewAmenityName('');
      setNewAmenityDescription('');

      const formData = new FormData();
      formData.append('name', newAmenityName);
      formData.append('description', newAmenityDescription);
      formData.append('icon', newAmenityIcon as File);

      await ApiClientPrivate.post('/amenities/create', formData, {
        headers: {
          'Content-Type': 'form-data'
        }
      });

      // Fetch updated data from the server after adding a new equipment
      fetchData();
      setNewAmenityName('');
      setNewAmenityDescription('');

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
      <PageHeader details={details} name={'Amenities'} searchFunction={onChangeSearch} />
      {/* table-Secion */}
      <div className="bg-white">
        <div className="section1 flex items-center gap-1 lg:gap-5 h-[70px] py-16 px-3   ">
          <div className="heading font-bold  text-[20px] lg:text-[22px]">
            <h1>Amenities List </h1>
          </div>
          <div className="buttonDev">
            <div
              className="bg-black text-white flex items-center gap-2 w-[94px] h-[28px] text-[12px]  justify-center font-normal rounded-sm shadow-lg "
              onClick={showModal}
            >
              <p>Add New</p>
              <BiPlus />
            </div>
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={tableData} // Use filteredData instead of amentyData
          pagination={{ pageSize: 10 }}
          className="  shadow-lg "
        />
      </div>

      <Modal
        title=""
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <div>
            {/* <Button 
            key="add"
            onClick={handleCancel}
          
            className="bg-white text-balck  rounded-none"
          >Cancel</Button> */}

            <Button
              key="add"
              onClick={handleAddAmenity}
              disabled={!newAmenityName.trim()}
              className="bg-black  text-white rounded-none"
            >
              Add
            </Button>
          </div>
        ]}
      >
        <AddAmenities
          newAmenityName={newAmenityName}
          onAmenityChange={onAmenityChange}
          setNewAmenityName={setNewAmenityName}
          setNewAmenityDescription={setNewAmenityDescription}
        />
      </Modal>

      {/* edit modal */}
      <Modal
        title=""
        open={isUpdateModalOpen}
        onCancel={handleCancel}
        // footer={[
        //   <div>
        //     <Button
        //       key="Edit"
        //             onClick={handleUpdateAmenity}
        //       // disabled={!newAmenityName.trim()}
        //       className="bg-black  text-white rounded-none"
        //     >
        //       Update
        //     </Button>
        //   </div>
        // ]}
        footer={false}
      >
        <UpdateAmenities
          amenityData={selectedAmenity}
          handleUpdateAmenity={handleUpdateAmenity}
          onAmenityChange={onAmenityChange}
        />
      </Modal>
    </div>
  );
};

export default Amenities;
