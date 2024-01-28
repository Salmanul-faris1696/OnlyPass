import React from 'react'

import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { FiEdit } from 'react-icons/fi';


interface DataType {
  key: number;
  name: string;
  data: string | JSX.Element; 
  
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Data',
    dataIndex: 'data',
    key: 'data',

  },
  

  {
    title: 'edit',
    key: 'edit',
    render: (_, record) => (
      <Space size="middle">
        <a><FiEdit size={20}/></a>
      </Space>)
  },
];



const data: DataType[] = [
  {
    key: 1,
    name: 'Facility type',
    data:"Acess"
  },
  {
    key: 2,
    name: 'Gender',
    data:"unisex"
   
  },
  {
    key:3,
    name:"Tier",
    data:"silver"
  },
  {
    key:4,
    name:"Contact Person name",
    data:"abcd"
  },
  {
    key:5,
    name:"Email Address",
    data:"abcd@gamil.com"
  },
  {
    key:6,
    name:"phone Number",
    data:"1236547890"
  },
  {
    key:7,
    name:"Website url",
    data:"//link//"
  },
  {
    key:8,
    name:"Logo",
    data: <img src="url_to_logo_imaghttps://imgs.search.brave.com/FiqsQ9uVBfHgu_AHZRUB152nOyn4d2l75v-v8YrfDYU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/NjU5MDQxMS92ZWN0/b3IvbS1sb2dvLWRl/c2lnbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9OFI5YWcy/TVNQZ2dGY2NBQ3JP/cU8zOVB1ZlVOMy1q/bkg4QVJUZ2ZaNlY5/Zz0e" alt="Logo" style={{ maxWidth: '50px', maxHeight: '50px' }} />  },
  {
    key:9,
    name:"Description",
    data:"qwertyuioplkjhgfdsazxcvbnmm,lkjhgfdsaqwertyuiopl"
  },
  {
    key:10,
    name:"Images",
    data:" 5 images +"
  },{
    key:11,
    name:"Address",
    data:"adress of facility "
  },
  {
    key:12,
    name:"pincode",
    data:"676503"
  },
  {
    key:13,
    name:"Country",
    data:"India"
  },
  {
    key:14,
    name:"State",
    data:"Kerala"
  },
  {
    key:15,
    name:"Map-Link",
    data:"Latitude , longitude"
  },
  {
    key:16,
    name:"Tier",
    data:"silver"
  },
  {
    key:1,
    name:"Amenities",
    data:"parking , locker-room , shower , towel , wifi "
  },


 
];


const FacilitiesDetails = () => {
  return (
    <div>
        <div className='bg-gray-200 p-3 m-3' >

        <div className=' flex justify-center'>
            Facility name
        </div>

        <div>
        <Table columns={columns  }  dataSource= {data}  pagination={{ pageSize: 30 }} />

        </div>
        </div>
    
    </div>
  )
}

export default FacilitiesDetails