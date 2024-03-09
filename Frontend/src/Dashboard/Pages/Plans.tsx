import { Form, Modal, Select, Switch, Table } from 'antd';
import { useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import svg2 from '../../../public/svg2-onlypass.svg';
import svg3 from '../../../public/svg3-onlypass.svg';
import svg4 from '../../../public/svg4-onlypass.svg';
import '../../App.css';
import AddPlans from '../components/Membership/AddPlans';
import PageHeader from '../components/common_components/PageHeader';
import { useQuery } from 'react-query';
import { ApiClientPrivate } from '../../utils/axios';
import { useParams } from 'react-router-dom';
import ShowModal from '../components/Membership/showModal';

const Plans = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShowModalOpen, setIsShowModalOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState();
  const { id } = useParams();

  const fetchMembershipPlans = async () => {
    const response = await ApiClientPrivate.get(`/membership/package/plans/${id}`);
    return response.data;
  };
  const { data: mainData, refetch } = useQuery('fetchMembershipPlans', fetchMembershipPlans);

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
      dataIndex: 'createdAt',
      key: 'dateAndTime'
    },
    {
      title: 'Plan Name',
      // dataIndex: 'name',
      key: 'planName',
      render: (record: any) => (
        <p
          onClick={() => {
            setIsShowModalOpen(true);
            setSelectedItem(record);
          }}
          className=""
        >
          {record.name}
        </p>
      )
    },
    {
      title: 'No.of days',
      dataIndex: 'no_of_days',
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

            <div className="flex items-center  gap-3 mx-5">
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

              {/* <div className="flex font-medium items-center rounded-sm gap-2 bg-[#19191966] h-[38px] w-[54px] justify-center ">
                  <h1 className="text-[12px] text-white">Save</h1>
                </div> */}
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
              dataSource={mainData}
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
        <AddPlans save={setIsModalOpen} data={selectedItem} />
      </Modal>

      <Modal
        title=" "
        width={700}
        open={isShowModalOpen}
        onCancel={() => setIsShowModalOpen(false)}
        footer={false}
      >
        <ShowModal data={selectedItem} />
      </Modal>
    </div>
  );
};

export default Plans;
