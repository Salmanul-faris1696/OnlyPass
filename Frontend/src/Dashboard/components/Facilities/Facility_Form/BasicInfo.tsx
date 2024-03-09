import { UploadOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd';
import { Button, Form, Input, Radio, Space, Upload } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from '../../../../Hook/CustomHook';
import { ApiClientPrivate } from '../../../../utils/axios';
import { dataLogo } from '../../../../utils/urls';
import { nextButton } from '../../../Redux/Features/ButtonSlice';
import { addData } from '../../../Redux/Features/FacilityFeature/FacilititySlice';
import { useAppSelector } from '../../../Redux/hooks';
const { TextArea } = Input;

const BasicInfo = () => {
  const dispatch = useDispatch();
  const reduxState = useAppSelector((state) => state.facility);
  // console.log({ reduxState });
  const [remove, setRemove] = useState(reduxState.logoUrl ? true : false);
  const [imgFileList] = useState<UploadFile[]>(
    reduxState.images.length > 0
      ? reduxState.images.map((it: any, ind: number) => ({
          uid: ind.toString(),
          name: it,
          status: 'done',
          url: reduxState.logoUrl ? `${dataLogo}/${reduxState.logoUrl}` : ''
        }))
      : []
  );
  const [fileList] = useState<UploadFile[]>(
    reduxState.logoUrl
      ? [
          {
            uid: '1',
            name: reduxState.logoUrl,
            status: 'done',
            url: reduxState.logoUrl ? `${dataLogo}/${reduxState.logoUrl}` : ''
          }
        ]
      : []
  );
  const [form] = Form.useForm();
  // this for input values should not be lost.........!
  form.setFieldsValue({
    facilityName: reduxState.facilityName,
    contactPerson: reduxState.contactPerson,
    emailAddress: reduxState.emailAddress,
    phoneNumber: reduxState.phoneNumber,
    websiteURL: reduxState.websiteURL,
    description: reduxState.description,
    facility_type: reduxState.facility_type,
    gender: reduxState.gender
  });

  const handleNext = () => {
    dispatch(nextButton());
  };

  const handleInputChange = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.type == 'checked' ? e.target.checked : e.target.value;
    dispatch(addData({ [fieldName]: fieldValue }));
  };

  const normFileImages = async (e: any) => {
    try {
      const formData = new FormData();

      e.fileList.forEach((file: any) => {
        formData.append('facility_images', file.originFileObj);
      });

      const response = await ApiClientPrivate.post('/images/upload-img', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Image upload response:', response.data);
      const facilityImagesArray = response.data.map((item: any) => item.facility_images);

      // Dispatch the facility_images array to Redux
      dispatch(addData({ images: facilityImagesArray }));
    } catch (error: any) {
      // Handle errors
      console.error('Image upload error:', error);
    }
  };

  const normFileLogo = async (e: any) => {
    try {
      // Assuming ApiClientPrivate is an Axios instance
      const formData = new FormData();
      formData.append('logo', e.file.originFileObj);
      console.log('logooooooooo', e.file.originFileObj);

      // Make the POST request to upload the logo
      if (remove !== true) {
        const response = await ApiClientPrivate.post('/images/upload-logo', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log('Logo upload :', response.data.facility_images);
        dispatch(addData({ ['logoUrl']: response.data.facility_images }));
      }
      setRemove(true);
      // Return the file list (or any other value you need)
      return e.fileList;
    } catch (error) {
      // Handle errors during logo upload
      console.error('Logo upload error:', error);

      // Return the file list or handle errors based on your requirements
      return e.fileList;
    }
  };

  // This is using for avoid re rendering while the files upload........!
  const debouncedNormFileLogo = useDebounce(normFileLogo, 500);
  const debouncedNormFileImages = useDebounce(normFileImages, 500);
  // console.log(setFileList);

  // const props: UploadProps = {
  //   name: "file",

  //   action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  //   headers: {
  //     authorization: "authorization-text",
  //   },

  //   onChange(info) {
  //     if (info.file.status === "done") {
  //       message.success(`${info.file.name} file uploaded successfully`);
  //     } else if (info.file.status === "error") {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  //   progress: {
  //     strokeColor: {
  //       "0%": "#108ee9",
  //       "100%": "#87d068",
  //     },
  //     strokeWidth: 3,
  //     format: (percent) => percent && `${parseFloat(percent.toFixed(2))}`,
  //   },
  // };

  const handleLogoRemove = () => {
    dispatch(addData({ logoUrl: '' }));
    // setFileList([]);
    console.log('salman');

    setRemove(false);
  };

  return (
    <div className="font-semibold  ">
      <Form
        form={form}
        onFinish={handleNext}
        onChange={handleInputChange}
        className=""
        labelCol={{ span: 7 }}
      >
        <div>
          <div className="text-start">
            <div className="font-semibold  text-xl mb-10">
              <h1>Basic Information</h1>
            </div>
            <Form.Item
              label="Facility Type :"
              className="text-left"
              name={'facility_type'}
              rules={[{ required: true, message: 'Please Select your Type!' }]}
            >
              <Radio.Group
                name="facility_type"
                defaultValue="access"
                className="custom-radio-group"
              >
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
              <Radio.Group name="gender" className="custom-radio-group">
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
              <Input name="facilityName" value={reduxState.facilityName} className="md:w-[350px]" />
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
                  value={reduxState.phoneNumber}
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
                    if (remove === false) debouncedNormFileLogo(e);
                  }}
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  listType="picture"
                  onRemove={handleLogoRemove}
                  // fileList={fileList}

                  defaultFileList={[...fileList]}
                >
                  <Button disabled={remove === true} icon={<UploadOutlined />}>
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

            <div className=" ">
              <Form.Item label="Images (min.5 Nos)" name={'images'}>
                <Upload
                  // {...props}
                  onChange={() => debouncedNormFileImages(form.getFieldValue('images'))}
                  multiple
                  defaultFileList={imgFileList}
                >
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  <h1 className="text-red-600">(preview size is 16:9)</h1>
                </Upload>
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <Button className="bg-black text-white rounded-none" htmlType="submit">
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default BasicInfo;
