import { Button, Form, Input, Radio, Space, Upload } from 'antd';
import React from 'react'
import { UploadOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';

const AddMembershipPlans = () => {
  return (
 <div className="font-semibold  ">
      <Form
        // form={form}
        // onFinish={handleNext}
        // onChange={handleInputChange}
        className=""
        // labelCol={{ span: 7 }}
      >
        <div>
          <div className="text-start">
            <div className="font-semibold text-center text-2xl mb-10">
              <h1>Basic Information</h1>
            </div>
            <Form.Item
              label="Facility Type :"
              className="text-left"
              name={'facility_type'}
              rules={[{ required: true, message: 'Please Select your Type!' }]}
            >
              <Radio.Group name="facility_type" defaultValue="access">
                <Radio value="access"> Access </Radio>
                <Radio value="pass"> Pass </Radio>
              </Radio.Group>
            </Form.Item>
          </div>

          <div className="">
            <Form.Item
              label="Gender :"
              className="text-start"
              name={'gender'}
              rules={[{ required: true, message: 'Please Select your Type!' }]}
            >
              <Radio.Group name="gender">
                <Radio value="gents"> Gents </Radio>
                <Radio value="ladies"> Ladies </Radio>
                <Radio value="unisex"> Unisex (mixed) </Radio>
              </Radio.Group>
            </Form.Item>
          </div>
        </div>

        <div>
          <div>
            <Form.Item
              label="Facility Name"
              name={'facilityName'}
              className="text-left"
              rules={[{ required: true, message: 'Please Enter Facilicty name' }]}
            >
              <Input name="facilityName" 
			  
							//   value={reduxState.facilityName}
							  className="md:w-[350px]" />
            </Form.Item>
            <Form.Item
              label="Email"
              name={'emailAddress'}
              rules={[{ required: true, message: 'Please Enter Email Address' }]}
              className=""
            >
              <Input name="emailAddress" className="md:w-[350px]" />
            </Form.Item>
            <Form.Item
              label="Contact Person"
              name={'contactPerson'}
              rules={[{ required: true, message: 'Please Enter Contact person name' }]}
            >
              <Input name="contactPerson" className="md:w-[350px]" />
            </Form.Item>
            <Form.Item
              label=" Phone No "
              name={'phoneNumber'}
              rules={[
                { required: true, message: 'Please enter phone number' },
                { pattern: /^[0-9]+$/, message: 'Please enter valid phone number' },
                { min: 10, message: 'Phone number must be at least 10 digits' },
                { max: 10, message: 'Phone number must be at most 10 digits' }
              ]}
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
                  name="phoneNumber"
                  className="w-[85%]"
                //   value={reduxState.phoneNumber}
                  maxLength={10}
                />
              </Space.Compact>
            </Form.Item>

            <Form.Item label="Website url" className="" name={'websiteURL'}>
              <Input name="websiteURL" className="md:w-[350px]" />
            </Form.Item>

            <Form.Item label="Logo" name={'logo'}>
              <div className="w-[200px]">
                <Upload
                  maxCount={1}
                  onChange={(e) => {
                    // if (remove === false) debouncedNormFileLogo(e);
                  }}
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  listType="picture"
                //   onRemove={handleLogoRemove}
                  // fileList={fileList}

                //   defaultFileList={[...fileList]}
                >
								  <Button
									//   disabled={remove === true}
									  icon={<UploadOutlined />}>
                    Upload
                  </Button>
                </Upload>
              </div>
            </Form.Item>

            <Form.Item
              label="Description"
              name={'description'}
              rules={[{ min: 10, max: 100, message: 'Description must be at most 100 characters' }]}
            >
              <TextArea name="description" rows={4} className="w-[350px]" maxLength={150} />
            </Form.Item>
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <Button type="primary" className="bg-blue-600 " htmlType="submit">
            Next
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default AddMembershipPlans