import React, { useState } from 'react';
import svg2 from '../../../public/svg2-onlypass.svg';
import svg3 from '../../../public/svg3-onlypass.svg';
import svg4 from '../../../public/svg4-onlypass.svg';
import PageHeader from '../components/PageHeader';
import { Select, Switch, Table, Tag, Form, Modal } from 'antd';
import { BiPlus } from 'react-icons/bi';
import '../../App.css';
import AddMembershipPlans from '../components/AddMembershipPlans';
import { Link } from 'react-router-dom';

const MembershipPackages: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      title: 'Category',
      dataIndex: 'category',
      key: 'category'
    },
    {
      title: 'Package Name',
      // dataIndex: 'PackageName',
      key: 'packageName',
      render: (record: any) => <Link to={`/Plans/${record._id}`}>{record.PackageName}</Link>
    },
    {
      title: 'Tier',
      dataIndex: 'tier',
      key: 'tier'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Plans',
      dataIndex: 'plans',
      key: 'plans'
    },

    {
      title: 'Status',
      key: 'sts',
      render: () => <Switch defaultChecked className="" />
    },
    {
      title: 'Congigure',
      dataIndex: 'configure',
      key: 'configure'
    }
  ];
  const dummyCustomer = [
    {
      key: 1,
      category: 'in-app',
      PackageName: 'Platinum Pass',
      tier: 'Platinum',
      description: 'Payment received for Platinum  membership (1 month)',
      plans: '4 Nos.',
      // sts: ['Active'],
      configure: (
        <a href="" className="underline text-blue-500">
          setup
        </a>
      )
    },
    {
      key: 2,
      category: 'in-app',
      PackageName: 'Gold Pass',
      tier: 'Gold',
      description: 'Payment received for Gold  membership (1 month)',
      plans: '5 Nos.',
      // sts: ['Active'],
      configure: (
        <a href="" className="underline text-blue-500">
          setup
        </a>
      )
    },
    {
      key: 3,
      category: 'in-app',
      PackageName: 'Silver Pass',
      tier: 'silver',
      description: 'Payment received for silver  membership (1 month)',
      plans: '10 Nos.',
      // sts: ['Active']
      configure: (
        <a href="" className="underline text-blue-500">
          setup
        </a>
      )
    },
    {
      key: 4,
      category: 'in-app',
      PackageName: 'Platinum Pass',
      tier: 'Platinum',
      description: 'Payment received for Platinum  membership (1 month)',
      plans: '5 Nos.',
      // sts: ['Active']
      configure: (
        <a href="" className="underline text-blue-500">
          setup
        </a>
      )
    },
    {
      key: 5,
      category: 'in-app',
      PackageName: 'silver Pass',
      tier: 'silver',
      description: 'Payment received for silver  membership (1 month)',
      plans: '4 Nos.',
      // sts: ['Active']
      configure: (
        <a href="" className="underline text-blue-500">
          setup
        </a>
      )
    }
  ];
  return (
    <div>
      <div className=" bg-[#F2F2F2] px-2 sm:px-10 md:px-16 pb-10 ">
        <PageHeader details={details} name={'Membership'} />
        {/* Table Section */}
        <div className="w-fit sm:w-auto bg-white p-10 mb-8">
          <div className="flex items-center justify-between">
            <div className="font-bold pb-5  flex  items-center gap-5">
              <h1 className="text-[22px]">Membership Packages </h1>
              <div
                className="bg-black text-white flex items-center gap-2 w-[94px] h-[28px] text-[12px]  justify-center font-normal rounded-sm shadow-lg "
                onClick={() => setIsModalOpen(true)}
              >
                <p>Add New</p>
                <BiPlus />
              </div>
            </div>

            <div className="">
              <Form className="flex items-center gap-28">
                <Form.Item label="" name="tier" className="text-start" labelCol={{ span: 7 }}>
                  <Select
                    style={{ width: 154, height: 38, color: 'black' }}
                    defaultValue={{ value: '', label: 'Advance Filter' }}
                    // onChange={handleChange}

                    options={[
                      {
                        value: 'Platinum',
                        label: 'Platinum',
                        name: 'platinum'
                      },
                      {
                        value: 'Gold',
                        label: 'Gold',
                        name: 'gold'
                      },
                      {
                        value: 'Silver',
                        label: 'Silver',
                        name: 'silver'
                      }
                    ]}
                  />
                </Form.Item>

                <Form.Item label="" name="tier" className="text-start" labelCol={{ span: 7 }}>
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
        <AddMembershipPlans />
      </Modal>
    </div>
  );
};
export default MembershipPackages;
