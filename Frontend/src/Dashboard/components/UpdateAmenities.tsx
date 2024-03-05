import { Button, Form, Input, Radio, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';

const UpdateAmenities = () => {
  return (
    <div className=" ">
      <div className="text-[24px]  mb-10  w-full mt-2">
        <h1 className="font-medium text-[24px] "> Update Amenity</h1>
      </div>
      <Form
        // form={form}
        // onFinish={handleNext}
        // onChange={handleInputChange}
        className=""
        labelCol={{ span: 7 }}
      >
        <div className="">
          <div className="text-start">
            <div className="font-semibold  text-[16px] ">
              <h1>Basic Information</h1>
            </div>

            <div className="font-medium">
              <div className="Status">
                <Form.Item
                  label="Status"
                  className=""
                  name={'sts'}
                  // rules={[{ required: true, message: 'Please Select your Category!' }]}
                >
                  <Radio.Group name="" defaultValue="B2B" className="custom-radio-group">
                    <Radio value="enable"> Enable </Radio>
                    <Radio value="disable"> Disable </Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
              <div className="AmenityName">
                <Form.Item
                  label="Amenity Name"
                  name={'amenityName'}
                  //   rules={[{ required: true, message: 'Please Enter Plan Name' }]}
                >
                  <Input
                    name="amenityName"
                    //   value={reduxState.facilityName}
                    className="md:w-[300px]"
                    placeholder="Enter Amenity Name"
                  />
                </Form.Item>
              </div>
              <div className="Description">
                <Form.Item
                  label="Description"
                  name={'description'}
                  // rules={[{ min: 10, max: 100, message: 'Description must be at most 100 characters' }]}
                >
                  <TextArea
                    name="description"
                    rows={4}
                    className="w-[300px] text-[14px]"
                    maxLength={150}
                    placeholder="Describe the facility in fewer than 100 characters"
                  />
                </Form.Item>
              </div>
              <div className="Icon">
                <Form.Item label="Icon" name={'icon'} className="text-[14px]">
                  <Upload
                    maxCount={1}
                    //   onChange={(e) => {
                    //     // if (remove === false) debouncedNormFileLogo(e);
                    //   }}
                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    listType="picture"
                    //   onRemove={handleLogoRemove}
                    // fileList={fileList}

                    //   defaultFileList={[...fileList]}
                  >
                    <div className="flex items-center gap-3">
                      <Button
                        //   disabled={remove === true}
                        icon={<UploadOutlined />}
                      >
                        Upload
                      </Button>
                      <h1 className="text-[14px] font-normal text-[#7e7e7e]">
                        Accepted Formats - JPG , jpeg , png
                      </h1>
                    </div>
                  </Upload>
                </Form.Item>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <Button className="bg-white border-black rounded-none">Cancel</Button>

          <Button type="primary" className="bg-black text-white  rounded-none" htmlType="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateAmenities;
