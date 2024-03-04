import { Modal, Table, TableProps } from 'antd';
import React, { useState } from 'react';
import { UpdateMembership } from '../updateFacilities/UpdateMembership';
import { FaEdit } from 'react-icons/fa';

interface DataType {
  key: string;
  plans: string;
  price: number;
}
const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Plans',
    dataIndex: 'plans',
    key: 'plans',
    render: (text) => <a>{text}</a>
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price'
  }
];

const FDmembershipInfo = ({ mainData }: any) => {
  const tableData: DataType[] = [
    {
      key: '1',
      plans: 'adimission fees',
      price: mainData?.data?.admission_fee
    },
    {
      key: '2',
      plans: ' Daily pass',
      price: mainData?.data?.daily_pass
    },
    {
      key: '3',
      plans: 'Monthly pass',
      price: mainData?.data?.monthly_pass
    },
    {
      key: '4',
      plans: '3 Month pass',
      price: mainData?.data?.threeMonth_pass
    },
    {
      key: '5',
      plans: '6 Monthly pass',
      price: mainData?.data?.sixMonth_pass
    },
    {
      key: '6',
      plans: ' Annul pass',
      price: mainData?.data?.annual_pass
    }
  ];

  const filteredTableData = tableData.filter((item) => item.price !== null && item.price !== 0);
  const [membershipModalOpen, setMembershipModalOpen] = useState(false);
  return (
    <div>
      <div className="Membership mt-10 p-3 w-full">
        <div className=" flex  justify-between items-center font-semibold ">
          <div>
            <h1>Membership options</h1>
          </div>
          <div
            onClick={() => setMembershipModalOpen(true)}
            className="flex items-center gap-1 bg-[#F2F2F2] w-[84px] h-[24px] px-2 justify-center"
          >
            <FaEdit />
            <p>Edit</p>
          </div>
        </div>
        <div className="mt-10">
          <Table columns={columns} dataSource={filteredTableData} pagination={false} />
        </div>
        <div className="other">
          {mainData?.data?.other ? (
            <div className=" flex items-center m-3 p-1">
              <div className="label w-[150px]">
                <h1>Others</h1>
              </div>
              <div>
                <input
                  type="text"
                  disabled
                  value={mainData?.data.other}
                  className="border rounded-md p-2 bg-gray-100 w-[250px]"
                />
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div className="tier">
          {mainData?.data?.tier ? (
            <div className=" flex items-center m-3 p-1">
              <div className="label w-[150px]">
                <h1>Tier</h1>
              </div>
              <div>
                <input
                  type="text"
                  disabled
                  value={mainData?.data.tier}
                  className="border rounded-md p-2 bg-gray-100 w-[250px]"
                />
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <Modal
        title=""
        open={membershipModalOpen}
        onCancel={() => setMembershipModalOpen(false)}
        footer={false}
      >
        <UpdateMembership
          facilityData={mainData?.data}
          cancel={() => setMembershipModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default FDmembershipInfo;
