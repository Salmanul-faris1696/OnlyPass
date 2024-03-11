import svg2 from '../../../public/svg2-onlypass.svg';
import svg3 from '../../../public/svg3-onlypass.svg';
import svg4 from '../../../public/svg4-onlypass.svg';
import PageHeader from '../components/common_components/PageHeader';
import customerImg from '../../../public/n.png';
import { FaEdit } from 'react-icons/fa';
import { useState } from 'react';
import { Modal } from 'antd';
import EditCustomer from '../components/Customer/EditCustomer';

const CustomerDeatils: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const details = [
    {
      icon: svg4,
      head: 'Active Memberships',
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
      label: 'Customer Type ',
      input: 'Onlypass'
    },
    {
      id: 2,
      label: ' Gender ',
      input: 'male'
    },

    {
      id: 3,
      label: 'Customer Name ',
      input: 'salman'
    },
    {
      id: 4,
      label: 'Email Address',
      input: 'salman134@gmail.com'
    },
    {
      id: 5,
      label: ' Date of birth',
      input: '29/07/2001'
    },
    {
      id: 6,
      label: 'Customer  Number',
      input: '7559889699'
    }
  ];
  const personalInfo = [
    {
      id: 1,
      label: 'Height',
      value: 165
    },
    {
      id: 2,
      label: 'Weight',
      value: 49
    }
  ];

  const EmergencyContact = [
    {
      id: 1,
      label: 'Contact person',
      values: 'Niyad'
    },
    {
      id: 2,
      label: ' Phone Number',
      values: '789654123'
    }
  ];

  const Links = [
    {
      id: 1,
      path: <a href="#basicInfo">Basic Information</a>
    },
    {
      id: 2,
      path: <a href="#personalInfo">Personal Information</a>
    },
    {
      id: 3,
      path: <a href="#Emergency_Contact">Emergency Contact</a>
    },
    {
      id: 4,
      path: <a href="#Payment_info">Payment History</a>
    },
    {
      id: 5,
      path: <a href="#Membership">Membership </a>
    },
    {
      id: 6,
      path: <a href="#Attendance_Log">Attendance Log </a>
    }
  ];

  const AccountDeatil = [
    {
      id: 1,
      label: 'Status',
      values: 'Active'
    },
    {
      id: 2,
      label: 'Membership',
      values: 'Gold'
    },
    {
      id: 3,
      label: 'Plan',
      values: ' 3 months'
    },
    {
      id: 4,
      label: 'Purchased',
      values: '12/01/2024'
    },
    {
      id: 5,
      label: 'Referral Code',
      values: 'OP1457'
    },
    {
      id: 6,
      label: 'Devices',
      values: 'Iphone15'
    },
    {
      id: 7,
      label: 'Club Level',
      values: 'Lvl .2'
    },
    {
      id: 8,
      label: 'Club Points',
      values: '50 pts'
    },
    {
      id: 9,
      label: 'Permissions',
      values: 'Calendar , Camera , Locations , contact'
    },
    {
      id: 10,
      label: 'Account',
      values: 'Google , Facebook , Whatsapp'
    }
  ];

  return (
    <div className="">
      <div className=" bg-[#F2F2F2] px-2 sm:px-10 md:px-16 pb-10 ">
        <PageHeader
          details={details}
          //   name={mainData?.data.facilityName}
          name={'salman'}
        />
        {/* Table Section */}

        <div className="bg-white px-2 sm:px-5 md:px-10 pb-10 ">
          <div className="FdNavbar">
            <div className="flex  justify-between gap-3 items-center py-7 md:py-10">
              <div className=" text-[20px] lg:text-[22px] font-semibold ">
                <h1>Customer Details</h1>
              </div>

              <div className="flex items-center gap-5 ">
                <div className="flex items-center gap-1">
                  <p>Registered on : </p>
                  <p className="font-semibold">14/02/2024</p>
                </div>

                <div className="flex items-center gap-1">
                  <p>Referred by: </p>
                  <p className="font-semibold">OP0024</p>
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
                    <div
                      onClick={() => setIsModalOpen(true)}
                      className="flex items-center gap-1 bg-[#F2F2F2] w-[84px] h-[24px] px-2 justify-center"
                    >
                      <FaEdit />
                      <p>Edit</p>
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

                  <div className="profile flex gap-5 md:flex md:gap-5 m-3 p-1 items-center">
                    <div className="md:w-[150px] text-[#7E7E7E]">
                      <h1>Profile Picture </h1>
                    </div>
                    <div className="flex   items-center gap-4">
                      <img
                        //   src={`${dataLogo}/${mainData?.data.logoUrl}`}
                        src={customerImg}
                        alt="customer photo"
                        className="w-[80px] h-[80px] bg-black p-3"
                      />
                    </div>
                  </div>

                  <div className="ShipAddress gap-5 flex lg:flex m-3 p-1 items-center">
                    <div className=" md:w-[150px] w-[10px] text-[#7E7E7E]">
                      <h1>Ship Address</h1>
                    </div>
                    <div className="font-medium">
                      <p>55735 Pieterse Valley City Britzfurt south africa </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="personalInfo" className="mb-10 ">
                <div>
                  <h1 className="font-semibold">Personal information</h1>
                </div>

                {personalInfo.map((item: any, index: any) => (
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

              <div id="Emergency_Contact" className="mb-10 ">
                <div>
                  <h1 className="font-semibold">Emergency Contact</h1>
                </div>

                {EmergencyContact.map((item: any, index: any) => (
                  <div
                    key={index}
                    className="EmergencyContact mt-3 flex gap-5  lg:flex items-center m-3 p-1 "
                  >
                    <div className="label w-[150px] text-[#7E7E7E]">
                      <h1>{item.label}</h1>
                    </div>
                    <div className="input bg-white flex gap-3 items-center font-medium">
                      <p>{item.values}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div id="Payment_info" className="mb-10 ">
                <div>
                  <h1 className="font-semibold">Payment information</h1>
                </div>
                payments sections!!!!!!!
              </div>

              <div id="Membership" className="mb-10 ">
                <div>
                  <h1 className="font-semibold">Membership </h1>
                </div>
                Membership sections!!!!!!!
              </div>

              <div id="Attendance_Log" className="mb-10 ">
                <div>
                  <h1 className="font-semibold">Attendance Log </h1>
                </div>
                Attendance Log sections!!!!!!!
              </div>
            </div>

            <div className="Links w-fit">
              <div className="pl-5 p-2 w-[226px]    bg-[#F2F2F2] mb-3">
                <div className="flex justify-center font-semibold items-center">
                  <h1>Account Details</h1>
                </div>
                {AccountDeatil.map((it: any) => (
                  <div className="mt-3 grid gap-3   lg: items-center font-medium ">
                    <div className="text-[#B5B7C0]">
                      {it.label} :<span className="text-black"> {it.values}</span>
                    </div>
                  </div>
                ))}
              </div>

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
export default CustomerDeatils;
