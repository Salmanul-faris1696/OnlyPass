import { Button, Checkbox, Form, Input, InputNumber, Select } from 'antd';
import { useEffect, useState } from 'react';
import { ApiClientPrivate } from '../../../utils/axios';
import { setMembershipUpdateBtn } from '../../Redux/Features/updateFacilityBtn';
import { useAppDispatch } from '../../Redux/hooks';

interface CheckedState {
  admission_fee: boolean;
  daily_pass: boolean;
  monthly_pass: boolean;
  threeMonth_pass: boolean;
  sixMonth_pass: boolean;
  annual_pass: boolean;
}
export const UpdateMembership = (props: any) => {
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
            dispatch(setMembershipUpdateBtn(true))

    } catch (error) {
      console.error('Error updating facility:', error);
      // Handle error appropriately
    }
  };

  const [checkedState, setCheckedState] = useState<CheckedState>({
    admission_fee: props.facilityData.admission_fee !== 0 || null ? true : false,
    daily_pass: props.facilityData.daily_pass !== 0 || null ?  true : false,
    monthly_pass: props.facilityData.monthly_pass !== 0 || null ? true : false,
    threeMonth_pass: props.facilityData.threeMonth_pass !== 0 || null ? true : false,
    sixMonth_pass: props.facilityData.sixMonth_pass !== 0 || null ? true : false,
    annual_pass: props.facilityData.annual_pass !== 0 || null ? true : false
  });

  console.log(checkedState);

  const data = [
    {
      id: 1,
      label: 'Admission fee (one-time)',
      name: 'admission_fee'
    },
    {
      id: 2,
      label: 'Daily Pass',
      name: 'daily_pass'
    },
    {
      id: 3,
      label: 'Monthly Pass',
      name: 'monthly_pass'
    },
    {
      id: 4,
      label: '3 Month Pass',
      name: 'threeMonth_pass'
    },
    {
      id: 5,
      label: '6 Month Pass',
      name: 'sixMonth_pass'
    },
    {
      id: 6,
      label: 'Annual Pass',
      name: 'annual_pass'
    }
  ];

  const handleCheckBox = (e: any) => {
    const { name, checked } = e.target;
    setCheckedState((prevState) => ({
      ...prevState,
      [name]: checked
    }));
    if (checked === false) {
      console.log({ name });

      // form.setFieldsValue({
      //   admission_fee: name === 'admission_fee' ? null : props.facilityData.admission_fee,
      //   daily_pass: name === 'daily_pass' ? null : props.facilityData.daily_pass,
      //   monthly_pass: name === 'monthly_pass' ? null : props.facilityData.monthly_pass,
      //   threeMonth_pass: name === 'threeMonth_pass' ? null : props.facilityData.threeMonth_pass,
      //   sixMonth_pass: name === 'sixMonth_pass' ? null : props.facilityData.sixMonth_pass,
      //   annual_pass: name === 'annual_pass' ? null : props.facilityData.annual_pass
      // });
    }
    console.log(form.getFieldValue('admission_fee'));
  };

  useEffect(() => {
    form.setFieldsValue({
      admission_fee: props.facilityData.admission_fee,
      daily_pass: props.facilityData.daily_pass,
      monthly_pass: props.facilityData.monthly_pass,
      threeMonth_pass: props.facilityData.threeMonth_pass,
      sixMonth_pass: props.facilityData.sixMonth_pass,
      annual_pass: props.facilityData.annual_pass,
      tier: props.facilityData.tier ? props.facilityData.tier : 'Select Tier',
      other: props.facilityData.other
    });
  }, [props]);

  return (
    <div>
      <div className="font-semibold  ">
        <Form form={form} onFinish={handleUpdate}>
          <div className="font-semibold text-center text-2xl mb-10">
            <h1>Membership options</h1>
          </div>
          {data.map((item) => (
            <div key={item.id} className="flex items-center gap-5 mb-3 ">
              <Form.Item
                name={item.name}
                valuePropName="checked"
                // wrapperCol={{ span: 30 }}
              >
                <div className=" w-[150px] md:w-[200px]  flex justify-between gap-3">
                  {item.label}

                  <Checkbox
                    name={item.name}
                    checked={checkedState[item.name as keyof typeof checkedState]}
                    onChange={handleCheckBox}
                  >
                    {' '}
                  </Checkbox>
                </div>
              </Form.Item>

              <div className="flex gap-1 w-40">
                <Form.Item
                  label="Price"
                  name={item.name}
                  hidden={!checkedState[item.name as keyof typeof checkedState]}
                  wrapperCol={{ span: 6 }}
                >
                  <InputNumber
                    className="w-20 price"
                    name={item.name}
                    type="number"
                    //   onChange={(value:any) =>
                    //     handlePriceChange(item.name, value as number)

                    //   }
                  />
                </Form.Item>
              </div>
            </div>
          ))}

          <Form.Item label="Other Options" labelCol={{ span: 7 }} name={'other'}>
            <Input
              name="other"
              className="w-52"
              //    onChange={handleOtherchange}
            />
          </Form.Item>

          <Form.Item
            label="Facility Tier"
            name="tier"
            className="text-start"
            rules={[{ required: true, message: 'Please Select your Tier!' }]}
            labelCol={{ span: 7 }}
          >
            <Select
              defaultValue={{ value: '', label: 'Select tier' }}
              style={{ width: 205 }}
              //   onChange={handleChange}
              options={[
                {
                  value: 'Platinum',
                  label: 'Platinum',
                  name: 'platinum'
                },
                {
                  value: 'Gold',
                  label: 'Gold',
                  name: 'gold'
                },
                {
                  value: 'Silver',
                  label: 'Silver',
                  name: 'silver'
                }
              ]}
            />
          </Form.Item>
          <div className="flex justify-center">
            <Button type="primary" htmlType="submit" className="bg-blue-600" onClick={handleUpdate}>
              update
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
