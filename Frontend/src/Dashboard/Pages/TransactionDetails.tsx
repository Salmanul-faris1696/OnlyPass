import svg2 from '../../../public/svg2-onlypass.svg';
import svg3 from '../../../public/svg3-onlypass.svg';
import svg4 from '../../../public/svg4-onlypass.svg';
import PageHeader from '../components/common_components/PageHeader';
import customerImg from '../../../public/n.png';
import { FaEdit } from 'react-icons/fa';
import { useState } from 'react';
import { Modal } from 'antd';
import EditCustomer from '../components/Customer/EditCustomer';

const TransactionDetails: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const details = [
    {
      icon: svg4,
      head: 'Service in-return',
      value: 'Gold(3)',
      percentage: '16'
    },
    {
      icon: svg3,
      head: 'Average Usage',
      value: '16 d/m',
      percentage: '1'
    },
    {
      icon: svg2,
      head: 'Total Spend',
      value: '8,058.00',
      percentage: '39'
    }
  ];

  const BasicInfo = [
    {
      id: 1,
      label: ' Date & Time ',
      input: '23/12/2024 11:39 AM'
    },
    {
      id: 2,
      label: ' TransactionID ',
      input: '#12234567'
    },

    {
      id: 3,
      label: 'Customer / Facility Name ',
      input: 'Niyad'
    },
    {
      id: 4,
      label: 'Email Address',
      input: 'Niyad134@gmail.com'
    },
    {
      id: 5,
      label: ' Phone Number',
      input: '789452145'
    }
    // {
    //   id: 6,
    //   label: 'Description',
    //   input: 'If you observe a trend of users saving events or classes for later reference, it could be a valuable addition.'
    // }
  ];
  const PaymentInfo = [
    {
      id: 1,
      label: 'Amount',
      value: 1949.0
    },
    {
      id: 2,
      label: 'Tax Included',
      value: 328.0
    },
    {
      id: 3,
      label: 'Status',
      value: 'Debited'
    },
    {
      id: 4,
      label: 'Mode of Payment',
      value: 'Credit Card'
    },
    {
      id: 5,
      label: 'Identifier',
      value: 'VISA****1234'
    }
  ];

  const Links = [
    {
      id: 1,
      path: <a href="/CustomerDetails/:id">Customer Details</a>
    },
    {
      id: 2,
      path: <a href="/MembershipPackages">Membership Details</a>
    }
  ];

  return (
    <div className="">
      <div className=" bg-[#F2F2F2] px-2 sm:px-10 md:px-16 pb-10 ">
        <PageHeader
          details={details}
          //   name={mainData?.data.facilityName}
          name={'Payment #12234567'}
        />
        {/* Table Section */}

        <div className="bg-white px-2 sm:px-5 md:px-10 pb-10 ">
          <div className="FdNavbar">
            <div className="flex  justify-between gap-3 items-center py-7 md:py-10">
              <div className=" text-[20px] lg:text-[22px] font-semibold ">
                <h1>Transaction Details</h1>
              </div>

              <div className="flex items-center gap-5 ">
                <div className="flex items-center gap-1">
                  <p>Refund : </p>
                  <p className="font-semibold text-blue-500 underline">Process</p>
                </div>

                <div className="flex items-center gap-1">
                  <p>Invoice: </p>
                  <p className="font-semibold text-blue-500 underline">Download</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="components_div w-full h-screen overflow-y-scroll ">
              <div id="basicInfo" className="mb-5">
                <div className="basic_info ">
                  <div className=" flex justify-between items-center font-semibold ">
                    <div>
                      <h1>Basic information</h1>
                    </div>
                  </div>

                  {BasicInfo.map((item: any, index: any) => (
                    <div
                      key={index}
                      className="Basic_info_detail mt-3 flex gap-5  lg:flex items-center m-3 p-1"
                    >
                      <div className="label w-[150px] text-[#7E7E7E]">
                        <h1>{item.label}</h1>
                      </div>
                      <div className="input bg-white flex gap-3 items-center font-medium">
                        <p>{item.input}</p>
                      </div>
                    </div>
                  ))}

                  <div className="Description gap-16 flex lg:flex m-3 p-1 items-center">
                    <div className=" md:w-[150px] w-[10px] text-[#7E7E7E]">
                      <h1>Description</h1>
                    </div>
                    <div className="font-medium">
                      <p>
                        If you observe a trend of users saving events or classes for later
                        reference, it could be a valuable addition.{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="personalInfo" className="mb-10 ">
                <div>
                  <h1 className="font-semibold">Personal information</h1>
                </div>

                {PaymentInfo.map((item: any, index: any) => (
                  <div
                    key={index}
                    className="Personal_info mt-3 flex gap-5  lg:flex items-center m-3 p-1 "
                  >
                    <div className="label w-[150px] text-[#7E7E7E]">
                      <h1>{item.label}</h1>
                    </div>
                    <div className="input bg-white flex gap-3 items-center font-medium">
                      <p>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="Links w-fit">
              {Links.map((it) => (
                <div className="pl-5 w-[226px] h-[36px] flex items-center justify-start bg-[#F2F2F2] mb-3">
                  {it.path}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal title="" open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={false}>
        <EditCustomer
        //   Data={mainData?.data}
        />
      </Modal>
    </div>
  );
};
export default TransactionDetails;
