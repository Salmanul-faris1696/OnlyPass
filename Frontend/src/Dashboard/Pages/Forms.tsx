import { Steps } from 'antd';
import { useSelector } from 'react-redux';
import AmenitiesForm from '../components/AmenitiesForm';
import BasicInfo from '../components/BasicInfo';
import EquipmentForm from '../components/EquipmentForm';
import Location from '../components/Location';
import Membership from '../components/Membership';
const steps = [
  {
    title: 'Basic Information',
    content: <BasicInfo />
  },
  {
    title: 'Location',
    content: <Location />
  },
  {
    title: 'Memberships',
    content: <Membership />
  },
  {
    title: 'Amenities',
    content: <AmenitiesForm />
  },
  {
    title: 'Equipments',
    content: <EquipmentForm />
  }
];
const Forms = () => {
  const setCurrentStep = useSelector((state: any) => state.button?.currentStep || 0);
  // console.log('Current Step:', setCurrentStep);
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  return (
    <div className="">
      <div className="step-section ">
        <Steps current={setCurrentStep} items={items} className="pt-2 mt-2 b" />
        {/* <div className="p-4 m-1 -mt-4 md:m-2 flex  ">
          <Link to={'/Facilities'} className="flex items-center gap-4">
            <button className="p-3 bg-gray-100 text-balck   rounded-full md:rounded-md ">
              <BiArrowBack />
            </button>{' '}
            <p className="text-gray-400">Home</p>
          </Link>
        </div> */}

        <div className="mx-auto w-[500px] m-7 md:w-[600px]     rounded-lg ">
          {steps[setCurrentStep].content}
        </div>
      </div>
    </div>
  );
};

export default Forms;
