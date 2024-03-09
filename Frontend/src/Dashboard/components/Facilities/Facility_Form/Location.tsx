import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { nextButton, prevButton } from '../../../Redux/Features/ButtonSlice';
import { addData } from '../../../Redux/Features/FacilityFeature/FacilititySlice';
import { useAppSelector } from '../../../Redux/hooks';
import TimeTable from './TimeTable';
import './Location.css';
import axios from 'axios';
import { useState } from 'react';

const Location = () => {
  const [pincode, setPincode] = useState('');
  const [pincodeData, setPincodeData] = useState(null);

  const dispatch = useDispatch();
  const handleNext = () => {
    console.log('next membership');

    dispatch(nextButton());
  };

  const handlePrevious = () => {
    console.log('basic info');

    dispatch(prevButton());
  };

  const reduxState = useAppSelector((state) => state.facility);
  console.log({ reduxState });
  const [form] = Form.useForm();

  form.setFieldsValue({
    address: reduxState.address,
    pin_code: reduxState.pin_code,
    country: 'India',
    state: 'Kerala',
    latitude_longitude: reduxState.latitude_longitude
  });

  const { TextArea } = Input;

  const handleInputChange = (e: any) => {
    // console.log(e.target, "name:", e.target.name, "value:", e.target.value);

    const fieldName = e.target.name;

    const fieldValue = e.target.value;
    // console.log({fieldValue});
    dispatch(addData({ [fieldName]: fieldValue }));
    return;
    // console.log(e.target.value);
  };

  // pincode api fetching :

  const getPincodeInfo = async (pin: number) => {
    try {
      const response = await axios.get(`https://api.postalpincode.in/pincode/${pin}`);
      setPincodeData(response.data);
    } catch (error) {
      console.error('Error fetching pincode information', error);
      setPincodeData(null);
    }
  };

  const handlePincodeChange = (e: any) => {
    const newPincode = e.target.value;
    setPincode(newPincode);

    // Fetch pincode data only if the length is valid (e.g., 6 digits)
    if (newPincode.length === 6) {
      getPincodeInfo(newPincode);
    } else {
      setPincodeData(null);
    }
  };

  console.log('pin', pincodeData);

  return (
    <div className="">
      <div className="font-semibold ">
        <Form
          form={form}
          onFinish={handleNext}
          onChange={handleInputChange}
          labelCol={{ span: 7 }}
          className="text-start"
        >
          <div>
            <div className="font-semibold text-center text-2xl mb-10">
              <h1>Location</h1>
            </div>

            <div>
              {/* Address...........! */}
              <Form.Item
                label="Address"
                name={'address'}
                className="text-start"
                rules={[{ required: true, message: 'Enter address field' }]}
              >
                <TextArea rows={3} name="address" className="md:w-[350px]" />
              </Form.Item>
              {/* Pin code ...........! */}
              <Form.Item
                label="Pin Code"
                name={'pin_code'}
                rules={[
                  { required: true, message: 'Please enter Pin-code' },
                  { pattern: /^[0-9]+$/, message: 'Please enter valid Pin number' },
                  { min: 6, message: 'Pin number must be at least 6 digits' },
                  { max: 6, message: 'Pin number must be at most 6 digits' }
                ]}
              >
                <Input
                  name="pin_code"
                  type="tel"
                  className="w-[100px]"
                  maxLength={6}
                  value={pincode}
                  onChange={handlePincodeChange}
                />
              </Form.Item>
              {/* State ............! */}
              <Form.Item label="State" className="" name="state">
                <Input disabled value={'Kerala'} name="state" className="md:w-[350px]" />
              </Form.Item>
              {/* Country ...........! */}
              <Form.Item label="Country" className="" name="country">
                <Input disabled value="India" name="country" className="md:w-[350px]" />
              </Form.Item>
              {/* Latitude Longitude */}
              <Form.Item
                label="Latitude_Longitude"
                name="latitude_longitude"
                rules={[{ required: true, message: 'latitude_longitude ' }]}
              >
                <Input name="latitude_longitude" className="md:w-[350px]" />
              </Form.Item>
            </div>
          </div>

          <div>
            <div className="font-semibold text-center text-2xl my-10">
              <h1>Time</h1>
            </div>
            <div className="flex justify-center">
              <TimeTable />
            </div>
          </div>

          <div className="flex gap-3 justify-center">
            <Button className="bg-black text-white rounded-none" htmlType="submit">
              Next
            </Button>
            <Button className="bg-white rounded-none" onClick={handlePrevious}>
              Previous
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Location;
