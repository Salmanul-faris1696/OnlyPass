import { Steps } from 'antd';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import AmenitiesForm from '../components/AmenitiesForm';
import BasicInfo from '../components/BasicInfo';
import EquipmentForm from '../components/EquipmentForm';
import Location from '../components/Location';
import Membership from '../components/Membership';
import { useSelector } from 'react-redux';
const steps = [
    {
      title: 'Basic Information',
      content:  <BasicInfo/>
    },
    {
      title: 'Location',
      content: <Location/>,
    },
    {
      title: 'Memberships',
      content: <Membership/>,
    },
    {
      title: 'Amenities',
      content: <AmenitiesForm/>,
    },
      {
        title: 'Equipments',
        content: <EquipmentForm/>,
      },
      // {
      //   title: 'Preview',
      //   content: <Preview/>,
      // },
  ];
const Form = () => {
  const setCurrentStep = useSelector((state:any) => state.button?.currentStep || 0);
  // console.log('Current Step:', setCurrentStep);
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  return (
    <div className="">
      <div className="step-section ">
        <Steps current={setCurrentStep} items={items} className='px-5 mt-2' />
          <div className='p-4 m-1 -mt-4 md:m-2 flex  '>
              <Link to = {"/Facilities"} className='flex items-center gap-4'>
                <button className='p-3 bg-gray-100 text-balck   rounded-full md:rounded-md '><BiArrowBack /></button> <p className='text-gray-400'>Home</p>
              </Link>
          </div>
      
          <div className='mx-auto w-[500px] m-7 md:w-[600px] bg-gray-100  p-5 rounded-lg ' >
            {steps[setCurrentStep].content}
          </div>
      </div> 
    </div>
  )
}

export default Form