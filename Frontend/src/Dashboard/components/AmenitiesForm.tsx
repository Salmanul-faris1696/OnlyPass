import { Button, Checkbox, Form } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ApiClientPrivate } from '../../utils/axios';
import { nextButton, prevButton } from '../Redux/Features/ButtonSlice';

// const { TextArea } = Input;

interface Amenity {
    key: string;
    name: string;
    _id:string;
  }
  
const AmenitiesForm = () => {

  const dispatch = useDispatch()
  const handleNext = () => {
      dispatch(nextButton());
    };
  
    const handlePrevious = () => {
      dispatch(prevButton());
    };

  const [amentyData, setAmentyData] = useState<Amenity[]>([]);
  const fetchData = async () => {
    try {
      const res = await ApiClientPrivate.get("/amenities");
      setAmentyData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log("data", amentyData);
  
  return (
    <div className="max-w-[500px] mx-auto mt-8">
      <Form onFinish={(values) => console.log({ values })}>
        <div className="font-bold text-lg mb-8">
          <h1>Amenities</h1>
        </div>

        {amentyData.map((item,) => (
          <div key={item._id} className="flex items-center justify-between mb-3 ">
            <Form.Item name={item.name} valuePropName="checked" wrapperCol={{ span:30,  }}>
              <div className=' w-[150px] md:w-[200px]  flex justify-between gap-3'>
                {item.name}
                  <Checkbox></Checkbox>
              </div>
            </Form.Item>
            
            <div className=' '>
              <Form.Item label="Paid" name={`${item.name}`}  valuePropName="" wrapperCol={{ span: 6}} >
              <Checkbox></Checkbox>
              </Form.Item>
            </div>
          </div>
        ))}
      </Form>
      <div className='flex gap-3 justify-center'>
        <Button type='primary' className='bg-blue-600 'onClick={handleNext}>
          Next
        </Button>
        <Button  className='bg-white 'onClick={handlePrevious}>
          Previous
        </Button>
      </div>
    </div>
  );
};

export default AmenitiesForm;
