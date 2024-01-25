import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import BasicInfo from '../components/BasicInfo';
import Location from '../components/Location';

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
      title: 'Memberships option',
      content: 'Last-content',
    },
    {
      title: 'Amenities',
      content: 'Last-content',
    },
      {
        title: 'Equipments',
        content: 'Last-content',
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
      <div className='mx-auto w-[400px] m-7 md:w-[600px] bg-gray-100  p-5 rounded-lg' >{steps[current].content}</div>
      <div style={{ marginTop: 24 }} className='flex justify-center'>
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