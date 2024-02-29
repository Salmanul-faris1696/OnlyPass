import { Button, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { ApiClientPrivate } from '../../../utils/axios';
import { setLocationUpdateBtn } from '../../Redux/Features/updateFacilityBtn';
import { useAppDispatch } from '../../Redux/hooks';

const UpdateLocation = (props: any) => {
  const [form] = Form.useForm();
    const dispatch = useAppDispatch()



  const handleUpdate = async () => {
    try {
      const values = await form.validateFields(); // validate the form fields

      // Assuming you have an API endpoint for updating facilities, adjust the URL accordingly
      const id = props.facilityData._id; // Replace 'id' with the actual identifier for your facility
      await ApiClientPrivate.put(`facilities/update/${id}`, values);
      // You may want to handle success, close modal, or update the Redux state accordingly
      props.cancel();
      dispatch(setLocationUpdateBtn(true))

    } catch (error) {
      console.error('Error updating facility:', error);
      // Handle error appropriately
    }
  };
  form.setFieldsValue({
    address: props.facilityData.address,
    pin_code: props.facilityData.pin_code,
    state: props.facilityData.state,
    country: props.facilityData.country,
    latitude_longitude: props.facilityData.latitude_longitude
  });
  return (
    <div>
      <div className="font-semibold  ">
        <Form
          form={form}
          onFinish={(values) => console.log({ values })}
          //   onChange={handleInputChange}
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
                rules={[{ required: true, message: 'Enter pin code' }]}
              >
                <Input
                  name="pin_code"
                  type="number"
                  className="w-[100px]"
                  //   value={pincode}
                  //   onChange={handlePincodeChange}
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
          <div className="flex justify-center">
            <Button type="primary" htmlType="submit" className="bg-blue-600" onClick={handleUpdate}>
              Update
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UpdateLocation;
