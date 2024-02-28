import { Table, Tag } from 'antd';
import React from 'react';
import svg2 from '../../../public/svg2-onlypass.svg';
import svg3 from '../../../public/svg3-onlypass.svg';
import svg4 from '../../../public/svg4-onlypass.svg';
import PageHeader from '../components/PageHeader';

const Payment: React.FC = () => {
  const columns = [
    {
      title: 'Date & Time',
      dataIndex: 'dateAndTime',
      key: 'dateAndTime'
    },
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId'
    },
    {
      title: 'Faciity / Customer Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'ampunt'
    },
    {
      title: 'Status',
      key: 'sts',
      dataIndex: 'sts',
      render: (sts: any) => (
        <>
          {sts.map((tag: any) => {
            let color = tag === 'Active' || tag === 'Debited' ? 'green' : 'red';
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
      dateAndTime: '20/02/2024',
      transactionId: '#123456',
      name: 'salman',
      description: 'Payment received for Gold membership',
      amount: '2,000.00',
      sts: ['Active']
    },
    {
      key: 2,
      dateAndTime: '23/02/2024',
      transactionId: '#1278956',
      name: 'Niyad',
      description: 'Payment received for platinium membership',
      amount: '5,000.00',
      sts: ['Debited']
    },
    {
      key: 3,
      dateAndTime: '03/03/2024',
      transactionId: '#755988',
      name: 'Hulk Fit',
      description: 'hulkFit2@gmail.com',
      amount: '3,199.00',
      sts: ['Credited']
    },
    {
      key: 4,
      dateAndTime: '05/03/2024',
      transactionId: '#11111',
      name: 'sahad',
      description: 'refunded',
      amount: '199.00',
      sts: ['Refunded']
    },
    {
      key: 5,
      dateAndTime: '12/03/2024',
      transactionId: '#22222',
      name: 'Ali',
      description: 'Pending',
      amount: '299.00',
      sts: ['Pending']
    }
  ];

  const details = [
    {
      icon: svg4,
      head: 'Total Amount recieved',
      value: '53,423.00',
      percentage1: '16'
    },
    {
      icon: svg3,
      head: 'Total Amount Paid',
      value: '18,950',
      percentage1: '1'
    },
    {
      icon: svg2,
      head: 'Membership Sold',
      value: '117',
      percentage1: '39'
    }
  ];
  return (
    <div>
      <div className=" bg-[#F2F2F2] px-2 sm:px-10 md:px-16 pb-10">
        <PageHeader details={details} name={'Payment'} />
        {/* Table Section */}
        <div className="w-fit sm:w-auto bg-white p-10 mb-8">
          <div className="font-bold pb-5 text-lg">
            <h1>All Payments </h1>
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

export default Payment;
