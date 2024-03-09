import { Form, Modal, Select, Switch, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import svg2 from '../../../public/svg2-onlypass.svg';
import svg3 from '../../../public/svg3-onlypass.svg';
import svg4 from '../../../public/svg4-onlypass.svg';
import '../../App.css';
import { ApiClientPrivate } from '../../utils/axios';
import AddMembershipPlans from '../components/Membership/AddMembershipPackages';
import EditMembershipPackageModal from '../components/Membership/EditMembershipPackageModal';
import PageHeader from '../components/common_components/PageHeader';

const MembershipPackages: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const fetchMembershipPackage = async () => {
    const response = await ApiClientPrivate.get('/membership/package/all');
    return response.data;
  };
  const { data: mainData, refetch } = useQuery('fetchMembershipPackage', fetchMembershipPackage);

  console.log('000', mainData);
  // console.log("111",mainData.membership);

  useEffect(() => {
    if (isModalOpen === false) {
      refetch();
    }
  }, [isModalOpen]);

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
      key: 'name',
      render: (record: any) => <Link to={`/Plans/${record._id}`}>{record.name}</Link>,
      width: 200
    },
    {
      title: 'Tier',
      dataIndex: 'tier_id',
      key: 'tier_id',
      width: 100
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Plans',
      key: 'plans',
      render: (record: any) => (
        <div>
          {mainData?.Plans.filter((it: any) => it.membership_id === record._id).length} Nos.
        </div>
      ),
      width: 100
    },

    {
      title: 'Status',
      key: 'sts',
      render: () => <Switch defaultChecked className="bg-red-500" />
    },
    {
      title: 'Congigure',
      key: 'configure',
      render: (record: any) => (
        <p
          onClick={() => {
            setIsEditModalOpen(true);
            setSelectedItem(record);
          }}
          className="text-blue-500 underline"
        >
          Set up
        </p>
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
              dataSource={mainData?.Membership || []}
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
        onCancel={() => {
          setIsModalOpen(false);
          refetch();
        }}
        footer={false}
      >
        <AddMembershipPlans save={setIsModalOpen} />
      </Modal>

      {/* edit modal */}

      <Modal
        title=" "
        width={700}
        open={isEditModalOpen}
        onCancel={() => {
          setIsEditModalOpen(false);
          refetch();
        }}
        footer={false}
      >
        <EditMembershipPackageModal update={setIsEditModalOpen} data={selectedItem} />
      </Modal>
    </div>
  );
};
export default MembershipPackages;
