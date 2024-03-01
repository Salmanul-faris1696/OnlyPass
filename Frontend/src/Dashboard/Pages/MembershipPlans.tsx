import React from 'react';
import svg2 from '../../../public/svg2-onlypass.svg';
import svg3 from '../../../public/svg3-onlypass.svg';
import svg4 from '../../../public/svg4-onlypass.svg';
import PageHeader from '../components/PageHeader';
import { Select, Switch, Table, Tag, Form } from 'antd';
import '../../App.css'

const MembershipPlans: React.FC = () => {
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

  const columns = [
    {
      title: 'Date & Time',
      dataIndex: 'dateAndTime',
      key: 'dateAndTime'
    },
    {
      title: 'Plans Name',
      dataIndex: 'plansName',
      key: 'plansName'
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
      title: 'Packages',
      dataIndex: 'packages',
      key: 'packages'
    },
     {
      title: 'Category',
      dataIndex: 'category',
      key: 'category'
    },
    {
      title: 'Status',
      key: 'sts',
       render: () => <Switch defaultChecked  className="" />
    }
  ];
  const dummyCustomer = [
    {
      key: 1,
      dateAndTime: '20/02/2024',
      plansName: 'Platinum Pass',
      tier: 'Platinum',
      description: 'Payment received for Platinum  membership (1 month)',
      packages: '4 Nos.',
      category:"in-app",
      // sts: ['Active']
    },
    {
      key: 2,
      dateAndTime: '22/02/2024',
      plansName: 'Gold Pass',
      tier: 'Gold',
      description: 'Payment received for Gold  membership (1 month)',
      packages: '5 Nos.',
      category:"in-app",
      // sts: ['Active']
    },
    {
      key: 3,
      dateAndTime: '5/04/2024',
      plansName: 'Silver Pass',
      tier: 'silver',
      description: 'Payment received for silver  membership (1 month)',
      packages: '10 Nos.',
      category:"in-app",
      // sts: ['Active']
    },
    {
      key: 4,
      dateAndTime: '20/04/2024',
      plansName: 'Platinum Pass',
      tier: 'Platinum',
      description: 'Payment received for Platinum  membership (1 month)',
      packages: '5 Nos.',
      category:"in-app",
      // sts: ['Active']
    },
    {
      key: 5,
      dateAndTime: '17/02/2024',
      plansName: 'silver Pass',
      tier: 'silver',
      description: 'Payment received for silver  membership (1 month)',
      packages: '4 Nos.',
      category:"in-app",
      // sts: ['Active']
    },
  ];
  return (
    <div>
      <div className=" bg-[#F2F2F2] px-2 sm:px-10 md:px-16 pb-10 ">
        <PageHeader details={details} name={'Membership'} />
        {/* Table Section */}
        <div className="w-fit sm:w-auto bg-white p-10 mb-8">
          
          <div className='flex items-center justify-between'>

          <div className="font-bold pb-5 text-lg">
            <h1>Membership Plans </h1>
          </div>

          <div className='' >
            <Form className='flex items-center gap-28'>
              <Form.Item label="" name="tier" className="text-start" labelCol={{ span: 7 }}>
                <Select
                  style={{ width:154,height:38,color: "black"}}
                  defaultValue={{ value: '', label: "Advance Filter" }}
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
                  style={{ width:154,height:38,color: "black"}}
                    defaultValue={{
                      value: '', label:" Sort by:Default" 
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
    </div>
  );
};
export default MembershipPlans;
