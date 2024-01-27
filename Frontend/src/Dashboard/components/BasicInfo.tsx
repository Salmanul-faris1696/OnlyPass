import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button,  Form, Input, Radio, Upload, Select, message, } from 'antd';
import type { UploadProps } from 'antd';
import { useDispatch } from 'react-redux';
import { nextButton,  } from '../Redux/Features/ButtonSlice';
import { useState } from 'react';
import { addData } from '../Redux/Features/FacilityFeature/FacilititySlice';



const { TextArea } = Input;


const BasicInfo = () => {
    
    const dispatch = useDispatch()
    const handleNext = () => {
        // console.log("next Location");
        dispatch(nextButton());

    };
    
      
    //   const handleChange = (value: { value: string; label: React.ReactNode }) => {
    //     console.log(value);
    //   };

      const [infoData, setInfoData] = useState({})
      const handleInputChange = (e:any) =>{
console.log("name:",e.target.name, "checked : ",e.target.checked,"value", e.target.value);

        const fieldName = e.target.name;
        const fieldValue =  e.target.type == "checked" ? e.target.checked : e.target.value ;
        console.log({fieldValue});
        
        setInfoData((prevInfoData) => ({
            ...prevInfoData,
            [fieldName]: fieldValue,
          }));
dispatch(addData({[fieldName]: fieldValue}))


            console.log("fieldData",infoData)
        // console.log(e.target.value);
      }

      const handleChange = (value: { value: string; label: React.ReactNode }) => {
        console.log(value); 
        dispatch(addData({label :value  }))
      };

      const normFile = (e: any) => {
          dispatch(addData({logo:e.file.originFileObj.uid}))
          console.log("logo",e.file.originFileObj.uid);
        
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
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



      
  return (
    <div className='font-semibold  '>
      <Form onFinish={(values) => console.log({values})}  onChange={handleInputChange} labelCol={{ span: 7 }} wrapperCol={{ span: 25 }} 
      className="max-w-[400px] md:max-w-[500px] f ">
        <div>
            <div>
                <Form.Item   label="Facility Type :" className='' name={"Facility_type"} required rules={[{  message: 'Please Select your Type!' }]}>
                    <Radio.Group name="Facility_Type"  >
                        <Radio value="acess"> Access </Radio>
                        <Radio value="pass"> Pass </Radio>
                    </Radio.Group>
                </Form.Item>
            </div>

            <div className=''>
                {/* <Form.Item label="Gender" name="gender" valuePropName="checked"   labelCol={{ span: 5 }}>
                    <Checkbox name="Gents">Gents Only</Checkbox>
                    <Checkbox name="Ladies">Ladies Ladies</Checkbox>
                    <Checkbox name="Unisex">Unisex (mixed)</Checkbox>
                </Form.Item> */}
                 <Form.Item   label="Gender :" className='ml-3' labelCol={{span :5}}>
                    <Radio.Group name="Gender"  >
                        <Radio value="gents"> Gents </Radio>
                        <Radio value="ladies"> Ladies </Radio>
                        <Radio value="unisex"> Unisex (mixed) </Radio>

                    </Radio.Group>
                </Form.Item>
            </div>

            <div className='ml-3'>
                <Form.Item label="Tier" name="tier"  labelCol={{ span: 4 }}>
                        <Select 
                labelInValue
                defaultValue={{ value: '', label: 'Select tier' }}
                style={{ width: 120,  }}
                onChange={handleChange}
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
                <Form.Item label="Facility Name" name={"facility_Name"} rules={[{ required: true, message: 'Please input!' }]}>
                    <Input   />
                </Form.Item>

                <Form.Item label="Contact Person Name">
                    <Input name='contactPerson' />
                </Form.Item>

                <Form.Item label="Email Address" className=''>
                    <Input  name="email" />
                </Form.Item>

                <Form.Item label=" phone Number "className=''>
                    <Input  name="pNo" type='tel' pattern='[0-9]'   />
                </Form.Item>

                <Form.Item label="Website url" className=''>
                    <Input name="Url" />
                </Form.Item>

                <Form.Item label="Logo" name="logo" valuePropName="fileList" getValueFromEvent={normFile}>
                     <Upload listType="picture-card"  maxCount={1}>
                        <button style={{ border: 0, background: 'none' }} type="button">
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                        </button>
                    </Upload>
                </Form.Item>

                <Form.Item label="Description">
                    <TextArea name="desc" rows={4} />
                </Form.Item>
                <div className=' '>
                    <Form.Item label="Images (min.5 Nos)" labelCol={{ span: 7 }} valuePropName="fileList" >
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        <h1 className='text-red-600'>(preview size is 16:9)</h1>
                    </Upload>
                    </Form.Item>

                </div>
            </div>
        </div>
      </Form>
      <div className='flex gap-3 justify-center'>
        <Button type='primary' htmlType='submit' className='bg-blue-600 'onClick={handleNext}>
                Next
        </Button>
        

      </div>
    </div>
    
  )
}

export default BasicInfo