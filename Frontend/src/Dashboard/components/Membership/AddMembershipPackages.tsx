import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { ApiClientPrivate } from '../../../utils/axios';

const AddMembershipPackages = (props: any) => {
  const [bgImage, setBgImage] = useState();

  // create Membershippackages

  const createMembershipPackages = (formData: FormData) => {
    return ApiClientPrivate.post(`/membership/package/create`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  };

  const mutation = useMutation((formData: any) => {
    return createMembershipPackages(formData);
  });

  const onFinish = (values: any) => {
    // Create a FormData object
    const formData = new FormData();

    // Append all form values to the FormData object
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        formData.append(key, values[key]);
      }
    }
    // Append the file to the FormData object
    // Assuming the file is stored in a variable called `file`
    // You might need to adjust this based on how you're handling file uploads
    if (bgImage) {
      // console.log(">>>>>>",bgImage);

      formData.append('bg_image', bgImage);
    }

    mutation.mutate(formData, {
      onError(error) {
        console.log(error);
      },
      onSuccess() {
        props.save(false);
      }
    });
  };

  const uploadBgImg = (value: any) => {
    const imgUrl = value.file.originFileObj;
    setBgImage(imgUrl);
    // console.log(imgUrl);
  };

  return (
    <div className=" ">
      <div className="text-[24px]  mb-10  w-full mt-2">
        <h1 className="font-medium text-[24px] ">Add a Membership Package</h1>
      </div>
      <Form
        // form={form}
        onFinish={onFinish}
        // onChange={handleInputChange}
        className=""
        labelCol={{ span: 7 }}
      >
        <div className="px-5">
          <div className="text-start">
            <div className="font-semibold  text-[16px] ">
              <h1>Basic Information</h1>
            </div>

            <div className="font-medium">
              <div className="category">
                <Form.Item
                  label="Category"
                  className=""
                  name={'category'}
                  rules={[{ required: true, message: 'Please Select your Category!' }]}
                >
                  <Radio.Group name="" defaultValue="B2B">
                    <Radio value="B2B"> B2B </Radio>
                    <Radio value="In-App"> In-App </Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
              <div className="packageName">
                <Form.Item
                  label="Package Name"
                  name={'name'}
                  className="text-left text-[14px]"
                  rules={[{ required: true, message: 'Please Enter Plan Name' }]}
                >
                  <Input
                    name="name"
                    //   value={reduxState.facilityName}
                    className="md:w-[350px]"
                    placeholder="Enter plan Name"
                  />
                </Form.Item>
              </div>
              <div className="slogan">
                <Form.Item
                  label="Slogan"
                  name={'slogan_txt'}
                  // rules={[{ required: true, message: 'Please enter the slogan ' }]}
                  className="text-[14px]"
                >
                  <Input
                    name="slogan_txt"
                    className="md:w-[350px]"
                    placeholder="The text below the plan name"
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
                    className="w-[350px] text-[14px]"
                    maxLength={150}
                    placeholder="Describe the facility in fewer than 100 characters"
                  />
                </Form.Item>
              </div>
              <div className="Link_Text">
                <Form.Item
                  label="Link Text"
                  name={'link_txt'}
                  // rules={[{ required: true, message: 'Label text for the link' }]}
                  className="text-[14px]"
                >
                  <Input
                    name="linktext"
                    className="md:w-[350px]"
                    placeholder="Label text for the link"
                  />
                </Form.Item>
              </div>
              <div className="Link_URL">
                <Form.Item
                  label="Link URL"
                  name={'link_url'}
                  // rules={[{ required: true, message: 'Label text for the link' }]}
                  className="text-[14px]"
                >
                  <Input
                    name="linktext"
                    className="md:w-[350px]"
                    placeholder="Link to the particular filter or page"
                  />
                </Form.Item>
              </div>
              <div className="Tier">
                <Form.Item
                  label=" Tier"
                  className="text-start text-[14px]"
                  name={'tier_id'}
                  rules={[{ required: true, message: 'Please Select your Type!' }]}
                >
                  <Radio.Group name="tier">
                    <Radio value="silver"> Silver </Radio>
                    <Radio value="gold"> Gold </Radio>
                    <Radio value="platinum"> Platinum </Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
              <div className="PriceTag_txt">
                <Form.Item label="Price Tag Text" className="text-[14px]" name={'PriceTag_txt'}>
                  <Input name="PriceTag" className="md:w-[350px]" placeholder="Text above price" />
                </Form.Item>
              </div>
              <div className="OriginalPrice">
                <Form.Item
                  label="Original Price"
                  className="text-[14px]"
                  name={'originalPrice'}
                  rules={[{ required: true, message: 'enter the actual price' }]}
                >
                  <Input
                    name="originalPrice"
                    className="md:w-[350px]"
                    placeholder="Enter the actual Price"
                  />
                </Form.Item>
              </div>
              <div className="OfferPrice">
                <Form.Item
                  label="Offer Price"
                  className="text-[14px]"
                  name={'effectiveAmount'}
                  rules={[{ required: true, message: 'Please enter the Offer Price!' }]}
                >
                  <Input
                    name="offerPrice"
                    className="md:w-[350px]"
                    placeholder="Enter the offer Price"
                  />
                </Form.Item>
              </div>
              <div className="backgroundImg">
                <Form.Item label="Background Images" name="bg_image" className="text-[14px]">
                  <div className="">
                    <Upload
                      maxCount={1}
                      action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                      listType="picture"
                      onChange={(value: any) => {
                        uploadBgImg(value);
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <Button icon={<UploadOutlined />}>Upload</Button>
                        <span className="text-[14px] font-normal text-[#7e7e7e]">
                          Accepted Formats - JPG, JPEG, PNG
                        </span>
                      </div>
                    </Upload>
                  </div>
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

export default AddMembershipPackages;
