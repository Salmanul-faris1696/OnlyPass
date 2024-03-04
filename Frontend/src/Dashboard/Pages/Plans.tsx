import React, { useState } from 'react';
import svg2 from '../../../public/svg2-onlypass.svg';
import svg3 from '../../../public/svg3-onlypass.svg';
import svg4 from '../../../public/svg4-onlypass.svg';
import PageHeader from '../components/PageHeader';
import { Select, Switch, Table, Tag, Form, Modal } from 'antd';
import { BiPlus } from 'react-icons/bi';
import '../../App.css';
import AddMembershipPlans from '../components/AddMembershipPlans';
import AddPlans from '../components/AddPlans';

const Plans = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const details = [
    {
      icon: svg4,
      head: 'Total Actiive user ',
      value: '1,147',
      percentage: '16'
    },
    {
      icon: svg3,
      head: 'Total Amount paid',
      value: '18,950.00',
      percentage: '1'
    },
    {
      icon: svg2,
      head: 'plans',
      value: '4 	',
      percentage: '18'
    }
  ];

  const columns = [
    {
      title: 'Date & Time',
      dataIndex: 'dateAndTime',
      key: 'dateAndTime'
    },
    {
      title: 'Plan Name',
      dataIndex: 'planName',
      key: 'planName'
    },
    {
      title: 'No.of days',
      dataIndex: 'days',
      key: 'days'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Pause',
      key: 'pause',
      render: () => <Switch defaultChecked className="" />
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Status',
      key: 'sts',
      render: () => <Switch defaultChecked className="" />
    }
  ];
  const dummyCustomer = [
    {
      key: 1,
      dateAndTime: '29/07/2024 11:30 PM',
      planName: '1 Month',
      days: '30',
      description: 'Payment received for Gold  membership (1 month)',
      pause: ['active'],
      amount: '2,499.00',
      sts: ['Active']
    },
    {
      key: 2,
      dateAndTime: '17/11/2024 12:00 PM',
      planName: '3 Months ',
      days: '90',
      description: 'Payment settled foe access of Boby Alex 21/12/2024',
      pause: ['active'],
      amount: '5,299.00',
      sts: ['Active']
    },
    {
      key: 3,
      dateAndTime: '09/11/2024 4:00 PM',
      planName: '6 Months',
      days: '180',
      description: 'Payment Refund against cutsomer Request',
      pause: ['active'],
      amount: '9,999.00',
      sts: ['Active']
    },
    {
      key: 4,
      dateAndTime: '17/09/2024 10:00 AM',
      planName: '12 Months',
      days: '365',
      description: 'Payment received for silver  membership (1 year)',
      pause: ['active'],
      amount: '14,499.00',
      sts: ['Active']
    }
  ];
  return (
    <div>
      <div className=" bg-[#F2F2F2] px-2 sm:px-10 md:px-16 pb-10 ">
        <PageHeader details={details} name={'Platinum pass'} />
        {/* Table Section */}
        <div className="w-fit sm:w-auto bg-white p-10 mb-8">
          <div className="flex items-center justify-between pb-5   ">
            {/* <div className='flex items-center pb-5 justify-between bg-green-200 '> */}
            <div className="font-bold   flex  items-center gap-5">
              <h1 className="text-[22px]">Plans </h1>
              <div
                className="bg-black text-white flex items-center gap-2 w-[94px] h-[28px] text-[12px]  justify-center font-normal rounded-sm shadow-lg "
                onClick={() => setIsModalOpen(true)}
              >
                <p>Add New</p>
                <BiPlus />
              </div>
            </div>

            <div className="flex items-center  gap-5">
              <div className="flex font-medium items-center gap-2">
                <h1 className="text-[16px]">Original Price</h1>
                <div className="bg-[#f2f2f2] shadow-sm rounded-sm flex items-center justify-center w-[96px] h-[38px]">
                  <h1>2400.00</h1>
                </div>
              </div>

              <div className="flex font-medium items-center gap-2">
                <h1 className="text-[16px]">Offer Price</h1>
                <div className="bg-[#f2f2f2] shadow-sm rounded-sm flex items-center justify-center w-[96px] h-[38px]">
                  <h1>2400.00</h1>
                </div>
              </div>

              <div className="flex font-medium items-center rounded-sm gap-2 bg-[#19191966] h-[38px] w-[54px] justify-center ">
                <h1 className="text-[12px] text-white">Save</h1>
              </div>
            </div>

            {/* </div> */}
            <div className="flex items-center mt-5">
              <Form>
                <Form.Item label="" name="sort" className="text-start" labelCol={{ span: 7 }}>
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

          <div>
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
      <Modal
        title=" "
        width={700}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
      >
        <AddPlans />
      </Modal>
    </div>
  );
};

export default Plans;
