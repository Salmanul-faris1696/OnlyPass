import { Table, Tag } from 'antd';
import React from 'react';
import svg2 from '../../../public/svg2-onlypass.svg';
import svg3 from '../../../public/svg3-onlypass.svg';
import svg4 from '../../../public/svg4-onlypass.svg';
import PageHeader from '../components/PageHeader';

const Customer: React.FC = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender'
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type'
    },

    {
      title: 'Membership',
      key: 'membership',
      dataIndex: 'membership',
      render: (membership: any) => (
        <>
          {membership.map((tag: any) => {
            let color = tag === 'Inactive' ? 'red' : 'green';

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      )
    }
  ];
  const dummyCustomer = [
    {
      key: 1,
      name: 'salman',
      gender: 'male',
      phoneNumber: '7559889699',
      email: 'salmanSb0786@gmail.com',
      type: 'onlypass',
      membership: ['Active']
    },
    {
      key: 2,
      name: 'Mohammed Niyad',
      gender: 'male',
      phoneNumber: '7894561230',
      email: 'niyad123@gmail.com',
      type: 'onlypass',
      membership: ['Inactive']
    }
  ];
  const details = [
    {
      icon: svg4,
      head: 'Total Customer',
      value: '5,423',
      percentage1: '16'
    },
    {
      icon: svg3,
      head: 'Membership Sold',
      value: '1893',
      percentage1: '1'
    },
    {
      icon: svg2,
      head: 'Active Now',
      value: '189',
      percentage1: '39'
    }
  ];
  return (
    <div>
      <div className=" bg-[#F2F2F2] px-2 sm:px-10 md:px-16 pb-10 ">
        <PageHeader details={details} name={'Customer'} />
        {/* Table Section */}
        <div className="w-fit sm:w-auto bg-white p-10 mb-8">
          <div className="font-bold pb-5 text-lg">
            <h1>All Customers </h1>
          </div>

          <Table
            columns={columns}
            dataSource={dummyCustomer}
            //   dataSource={tableData}
            pagination={{ pageSize: 10 }}
            className=""
          />
        </div>
      </div>
    </div>
  );
};
export default Customer;
