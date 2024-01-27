import React from 'react'

import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { FiEdit } from 'react-icons/fi';


interface DataType {
  key: string;
  name: string;
  data: string;
  
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
    key: '1',
    name: 'Facility type',
    data:"Acess"
    
  },
  {
    key: '2',
    name: 'Gender',
    data:"unisex"
   
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
        <Table columns={columns} dataSource={data} />

        </div>
        </div>
    
    </div>
  )
}

export default FacilitiesDetails