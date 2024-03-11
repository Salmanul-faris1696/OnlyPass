import { Button, Form, Input, Radio, Space, Upload } from 'antd';
import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';

const EditCustomer = () => {
  return (
    <div className="font-semibold  ">
      <Form
        // form={form}
        // onFinish={onFinish}
        // onChange={handleInputChange}
        className=""
        labelCol={{ span: 7 }}
      >
        <div>
          <div className="text-start">
            <Form.Item label="Customer Type :" className="text-left" name={'customer_type'}>
              <Radio.Group name="facility_type">
                <Radio value="acess"> justgyms </Radio>
                <Radio value="pass"> Onlypass </Radio>
              </Radio.Group>
            </Form.Item>
          </div>

          <div className="">
            <Form.Item label="Gender :" className="text-start" name={'gender'}>
              <Radio.Group name="gender">
                <Radio value="gents"> Male </Radio>
                <Radio value="ladies"> Female </Radio>
                <Radio value="unisex"> Others</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
        </div>

        <div>
          <div>
            <Form.Item label="Customer Name" name={'customerName'} className="text-left">
              <Input
                name="customerName"
                // value={props.facilityData.facilityName}
                className="md:w-[350px]"
              />
            </Form.Item>
            <Form.Item label="Email" name={'emailAddress'} className="">
              <Input name="emailAddress" className="md:w-[350px]" />
            </Form.Item>

            <Form.Item label="Date of Birth" name={'dob'}>
              <Input name="dob" className="md:w-[350px]" />
            </Form.Item>

            <Form.Item
              label=" Customer Number "
              name={'customerNumber'}
              //   rules={[
              //     { required: true, message: 'Please enter phone number' },
              //     {
              //       pattern: /^[0-9]+$/,
              //       message: 'Please enter valid phone number'
              //     },
              //     { min: 10, message: 'Phone number must be at least 10 digits' },
              //     { max: 10, message: 'Phone number must be at most 10 digits' }
              //   ]}
              className="text-left"
            >
              <Space.Compact className="md:w-[350px]">
                <Input
                  type="tel"
                  name="phonCode"
                  className="w-[15%]"
                  defaultValue={'+91'}
                  disabled
                />
                <Input
                  type="tel"
                  name="customerNumber"
                  className="w-[85%]"
                  //   defaultValue={props.facilityData.phoneNumber}
                  maxLength={10}
                />
              </Space.Compact>
            </Form.Item>

            <Form.Item label="Website url" className="" name={'websiteURL'}>
              <Input name="websiteURL" className="md:w-[350px]" />
            </Form.Item>

            <Form.Item label="profile Picture" name={'dp'}>
              <div className="w-[200px]">
                <Upload
                  maxCount={1}
                  listType="picture"
                  //   onRemove={handleLogoRemove}
                  // fileList={fileList}
                  //   defaultFileList={[...fileList]}
                >
                  <Button
                    //   disabled={remove === true}
                    icon={<UploadOutlined />}
                  >
                    Upload
                  </Button>
                </Upload>
              </div>
            </Form.Item>

            <Form.Item label="Ship Address" name={'address'}>
              <TextArea name="address" rows={4} className="w-[350px]" />
            </Form.Item>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            type="primary"
            htmlType="submit"
            className="bg-blue-600"
            //   onClick={handleUpdate}
          >
            Update
          </Button>
        </div>

        {/* Add more option as per client request!!!!!!!!!!!!!!!!!!!!!!!!! */}
      </Form>
    </div>
  );
};

export default EditCustomer;
