import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button,  Form, Input, Radio, Upload, Select, message, } from 'antd';
import type { UploadProps } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { nextButton,  } from '../Redux/Features/ButtonSlice';
import { useState } from 'react';
import { FacilitiesState, addData } from '../Redux/Features/FacilityFeature/FacilititySlice';
import { useAppSelector } from '../Redux/hooks';
import { ApiClientPrivate } from '../../utils/axios';


const { TextArea } = Input;


const BasicInfo = () => {
    
    const dispatch = useDispatch()
    const reduxState = useAppSelector((state) => state.facility)
    console.log({reduxState});
    
    const handleNext = () => {
    
          dispatch(nextButton());
       
    };
      const [infoData, setInfoData] = useState({})
      const handleInputChange = (e:any) =>{
        console.log(e.target,"name:", e.target.name, "value:",e.target.value );
        
// console.log("name:",e.target.name, "checked : ",e.target.checked,"value", e.target.value);

        const fieldName = e.target.name;
        
        const fieldValue =  e.target.type == "checked" ? e.target.checked : e.target.value ;
        // console.log({fieldValue});
        
        setInfoData((prevInfoData) => ({
            ...prevInfoData,
            [fieldName]: fieldValue,
          }));
dispatch(addData({[fieldName]: fieldValue}))


        // console.log(e.target.value);
      }

      const handleChange = (value: { value: string; label: React.ReactNode }) => {
        console.log({value}); 
        setInfoData((prevInfoData) => ({
          ...prevInfoData,
          ["tier"]: value.value ,
        }));  
        dispatch(addData({ ["tier"]: value.value })) 
         };

      // const normFile = async (e: any) => {


      //  const resLogo = await ApiClientPrivate.post("/images/upload-logo",e.file, {
      //     headers:{
      //       'Content-Type': 'form-data'
      //     }
      //   } )

      //     // dispatch(addData({logo:e.file.originFileObj.uid}))
      //     console.log("logo",resLogo);

        
      //   if (Array.isArray(e)) {
      //     return e;
      //   }
      //   return e?.fileList;
      // };


      // const normFile = async (info: any) => {
      //   try {
          
      
          
      //     const formData = new FormData();
          
      //     formData.append('file', info);
      //     console.log("test",info.fileList[0].originFileObj);
          
      //     const response = await ApiClientPrivate.post("/images/upload-logo", formData, {
      //       headers: {
      //         'Content-Type': 'multipart/form-data', 
      //       },
      //     });
      //     console.log("Logo upload response:", response.data);
    
      //   } catch (error) {
      //     console.error("Logo upload error:", error);               
      //   }
      // };

      const normFileImages = async (e: any) => {
        try {
          // Assuming ApiClientPrivate is an Axios instance
      
          // Create a FormData object to handle file uploads
          const formData = new FormData();
          formData.append('facility_images', e.fileList[0].originFileObj);
      
          // Make the POST request to upload the logo
          const response = await ApiClientPrivate.post("/images/upload-img", formData, {
            headers: {
              'Content-Type': 'multipart/form-data', // Set the correct content type for file upload
            },
          });
      
          // Handle the response appropriately
          console.log("Logo upload response:", response.data);
          dispatch(addData({ images: response.data.facility_images }));
      
          if (Array.isArray(e)) {
            return e;
          }
      
          // Optionally, you might want to set the logo value to the uploaded file's UID
          // dispatch(addData({ logo: response.data.uid }));
      
          // Return the file list (or any other value you need)
          return e?.fileList;
        } catch (error) {
          // Handle errors during logo upload
          console.error("Logo upload error:", error);
      
          // Return the file list or handle errors based on your requirements
          if (Array.isArray(e)) {
            return e;
          }
          return e?.fileList;
        }
      };

      const normFileLogo = async (e: any) => {
        try {
          // Assuming ApiClientPrivate is an Axios instance
      
          // Create a FormData object to handle file uploads
          const formData = new FormData();
          formData.append('logo', e.fileList[0].originFileObj);
      
          // Make the POST request to upload the logo
          const response = await ApiClientPrivate.post("/images/upload-logo", formData, {
            headers: {
              'Content-Type': 'multipart/form-data', // Set the correct content type for file upload
            },
          });
      
          // Handle the response appropriately
          console.log("Logo upload response:", response.data.facility_images);
          dispatch(addData({ ["logoUrl"]: response.data.facility_images }))

      
          if (Array.isArray(e)) {
            return e;
          }
      
          // Optionally, you might want to set the logo value to the uploaded file's UID
          // dispatch(addData({ logo: response.data.uid }));
      
          // Return the file list (or any other value you need)
          return e?.fileList;
        } catch (error) {
          // Handle errors during logo upload
          console.error("Logo upload error:", error);
      
          // Return the file list or handle errors based on your requirements
          if (Array.isArray(e)) {
            return e;
          }
          return e?.fileList;
        }
      };
      
      


      const props: UploadProps = {
        name: 'file',
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            // console.log("1", info.file.originFileObj?.uid);
            dispatch(addData( info.file.originFileObj?.uid))
            
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
        progress: {
          strokeColor: {
            '0%': '#108ee9',
            '100%': '#87d068',
          },
          strokeWidth: 3,
          format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
        },
      };


      console.log("fieldData",infoData)

const [form] = Form.useForm()
      
  return (
    <div className='font-semibold  '>
      <Form form={form}  onFinish={handleNext}  onChange={handleInputChange} labelCol={{ span: 7 }} wrapperCol={{ span: 25 }} 
      className="max-w-[400px] md:max-w-[500px]  ">
        <div>
            <div>
                <Form.Item   label="Facility Type :" className='' name={"facility_type"}  rules={[{  required:true,message: 'Please Select your Type!' }]}>
                    <Radio.Group name="facility_type"  >
                        <Radio value="acess"> Access </Radio>
                        <Radio value="pass"> Pass </Radio>
                    </Radio.Group>
                </Form.Item>
            </div>

            <div className=''>
                 <Form.Item   label="Gender :" className='ml-3'  name={'gender'}  rules={[{ required:true, message: 'Please Select your Type!' }]} labelCol={{span :5}}>
                    <Radio.Group name="gender"  >
                        <Radio value="gents"> Gents </Radio>
                        <Radio value="ladies"> Ladies </Radio>
                        <Radio value="unisex"> Unisex (mixed) </Radio>

                    </Radio.Group>
                </Form.Item>
            </div>

            <div className='ml-3'>
                <Form.Item label="Tier" name="tier"  rules={[{ required:true, message: 'Please Select your Tier!' }]} labelCol={{ span: 4 }}>
                        <Select labelInValue defaultValue={{ value:"", label: 'Select tier' }} style={{ width: 120,  }}onChange={handleChange}
                options={[
                {
                    value: 'Platinum',
                    label: 'Platinum',
                    name:"platinum"
                },
                {
                    value: 'Gold',
                    label: 'Gold',
                    name:"gold"
                },
                {
                    value: 'Silver',
                    label: 'Silver',
                    name:"silver"
                },
                ]}
            />
                </Form.Item>

            </div>

        </div>

        <div>
            <div className='font-bold text-lg mb-8'>
                <h1>Basic Information</h1>
            </div>

            <div>
                <Form.Item label="Facility Name" name={"facilityName"} rules={[{ required: true, message: 'Please Enter Facilicty name' }]}>
                    <Input name='facilityName'  value={reduxState.facilityName}/>
                </Form.Item>

                <Form.Item label="Contact Person Name"labelCol={{ span: 8 }} name={"contactPerson"} rules={[{ required: true, message: 'Please Enter Contact person name' }]}>
                    <Input name='contactPerson'  />
                </Form.Item>

                <Form.Item label="Email Address" name={"emailAddress"} rules={[{ required: true, message: 'Please Enter Email Address' }]} className=''>
                    <Input  name='emailAddress' />
                </Form.Item>

                <Form.Item label=" phone Number "  name={"phoneNumber"} rules={[{ required: true, message: 'Please Enter phone number' }]} className=''>
                    <Input  type='tel'  name='phoneNumber'   />
                </Form.Item>

                <Form.Item label="Website url" className='' name={"websiteURL"}>
                    <Input name="websiteURL" />
                </Form.Item>

                <Form.Item label="Logo" name="logo"   >
                     <Upload listType="picture-card"  maxCount={1}  onChange={() => normFileLogo(form.getFieldValue("logo"))}>
                        <button style={{ border: 0, background: 'none' }} type="button">
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                        </button>
                    </Upload>
                </Form.Item>

                <Form.Item label="Description" name={"description"}>
                    <TextArea name="description" rows={4} />
                </Form.Item>


                <div className=' '>
                    <Form.Item label="Images (min.5 Nos)" name={"images"} labelCol={{ span: 7 }}   >
                    <Upload {...props} onChange={() => normFileImages(form.getFieldValue("images"))}>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        <h1 className='text-red-600'>(preview size is 16:9)</h1>
                    </Upload>
                    </Form.Item>

                </div>
            </div>
        </div>
      <div className='flex gap-3 justify-center'>
        <Button type='primary'  className='bg-blue-600 ' 
         htmlType='submit'>
                Next
        </Button>
        

      </div>
      </Form>
    </div>
    
  )
}

export default BasicInfo