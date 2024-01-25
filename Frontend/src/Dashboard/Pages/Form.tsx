import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import BasicInfo from '../components/BasicInfo';
import Location from '../components/Location';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Membership from '../components/Membership';
import AmenitiesForm from '../components/AmenitiesForm';
import EquipmentForm from '../components/EquipmentForm';

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
      },{
        title: 'Preview',
        content: 'preview page',
      },
  ];
const Form = () => {
    const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));


  return (
    <div className="">

     
        <div className="step-section ">
        <> 

      <Steps current={current} items={items} className='px-5 mt-2' />
      <div className='p-4 m-1 -mt-4 md:m-2 flex  '>
        <Link to = {"/Facilities"} className='flex items-center gap-4'>
        <button className='p-3 bg-gray-100 text-balck   rounded-full md:rounded-md '><BiArrowBack /></button> <p className='text-gray-400'>Home</p>
        
        </Link>

      
      </div>
      
      <div className='mx-auto w-[400px] m-7 md:w-[600px] bg-gray-100  p-5 rounded-lg ' >
        {steps[current].content}</div>
      <div style={{ marginTop: 24 }} className='flex justify-center pb-4'>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()} className='bg-blue-600 '>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" className='bg-blue-600' onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>

        </div>

        
    </div>
  )
}

export default Form