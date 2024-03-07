import { Form, Select, Table, Tag } from 'antd';
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
      percentage: '16'
    },
    {
      icon: svg3,
      head: 'Total Amount Paid',
      value: '18,950',
      percentage: '1'
    },
    {
      icon: svg2,
      head: 'Membership Sold',
      value: '117',
      percentage: '39'
    }
  ];
  return (
    <div>
      <div className=" bg-[#F2F2F2] px-2 sm:px-10 md:px-16 pb-10">
        <PageHeader details={details} name={'Payment'} />
        {/* Table Section */}
        <div className="w-fit sm:w-auto bg-white p-10 mb-8">
          <div className="mainDev flex h-[100px] items-center justify-between ">
            <div className="section1 flex items-center gap-1 lg:gap-5 h-[70px] px-3 ">
              <div className="heading font-bold  text-[20px] lg:text-[22px]">
                <h1>Transactions </h1>
              </div>
            </div>

            <div className="section1 flex h-[70px]  ">
              <div className="dropDown font-bold  text-lg flex items-center justify-between h-full w-full">
                <Form className=" h-full flex  gap-5 lg:gap-10 justify-end w-full ">
                  <Form.Item label="" name="filter" className="flex items-center  h-full ">
                    <Select
                      style={{ width: 154, height: 38, color: 'black' }}
                      defaultValue={{ value: '', label: 'Advance Filter' }}
                      // onChange={handleChange}

                      options={[
                        {
                          value: 'All',
                          label: 'All',
                          name: 'All'
                        },
                        {
                          value: 'Onlypass',
                          label: 'Onlypass',
                          name: 'Onlypass'
                        },
                        {
                          value: 'JustGym',
                          label: 'JustGym',
                          name: 'JustGym'
                        }
                      ]}
                    />
                  </Form.Item>

                  <Form.Item label="" name="sort" className="text-start h-full flex items-center">
                    <Select
                      style={{ width: 154, height: 38, color: 'black' }}
                      defaultValue={{
                        value: '',
                        label: ' Sort by:Default'
                        // ${(<span className='font-bold'>Latest</span>)}
                      }}
                      // onChange={handleChange}
                      options={[
                        {
                          value: 'Popular',
                          label: 'popular',
                          name: 'popular'
                        },
                        {
                          value: 'Latest',
                          label: 'latest',
                          name: 'latest'
                        },
                        {
                          value: 'Last month',
                          label: 'lastMonth',
                          name: 'lastMonth'
                        },
                        {
                          value: 'Earliest',
                          label: 'earliest',
                          name: 'earliest'
                        }
                      ]}
                    />
                  </Form.Item>
                </Form>
              </div>
            </div>
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
