import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Radio, Upload,Select } from 'antd';
import { useDispatch } from 'react-redux';
import { nextButton, prevButton,  } from '../Redux/Features/ButtonSlice';


const { TextArea } = Input;
const normFile = (e: any) => {
    console.log(e.file);
    
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  
const BasicInfo = () => {
    
    const dispatch = useDispatch()
    const handleNext = () => {
        // console.log("next Location");
        dispatch(nextButton());
      };
    
      const handlePrevious = () => {

        dispatch(prevButton());
      };

      const handleChange = (value: { value: string; label: React.ReactNode }) => {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
      };

  return (
    <div className='font-semibold  '>
      <Form onFinish={(values) => console.log({values})}  labelCol={{ span: 7 }} wrapperCol={{ span: 25 }} className="max-w-[400px] md:max-w-[500px] f ">
        <div>
            <div>
                <Form.Item   label="Facility Type :"  className='' required>
                    <Radio.Group>
                        <Radio value="acess"> Access </Radio>
                        <Radio value="pass"> Pass </Radio>
                    </Radio.Group>
                </Form.Item>
            </div>

            <div className=''>
                <Form.Item label="Gender" name="gender" valuePropName="checked"  labelCol={{ span: 5 }}>
                    <Checkbox>Gents Only</Checkbox>
                    <Checkbox>Ladies Ladies</Checkbox>
                    <Checkbox>Unisex (mixed)</Checkbox>
                </Form.Item>
            </div>

            <div className=''>
                <Form.Item label="Tier" name="tier"  labelCol={{ span: 4 }}>
                        <Select
                labelInValue
                defaultValue={{ value: '', label: 'Select tier' }}
                style={{ width: 120,  }}
                onChange={handleChange}
                options={[
                {
                    value: 'Platinium',
                    label: 'Platinium',
                },
                {
                    value: 'Gold',
                    label: 'Gold',
                },
                {
                    value: 'Silver',
                    label: 'Silver',
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
                <Form.Item label="Facility Name">
                    <Input name='facilityname' />
                </Form.Item>

                <Form.Item label="Contact Person  Name">
                    <Input name='contactPerson' />
                </Form.Item>

                <Form.Item label="Email Address" className=''>
                    <Input  name="email"/>
                </Form.Item>

                <Form.Item label=" phone Number "className=''>
                    <Input  name="pNo" />
                </Form.Item>

                <Form.Item label="Website url" className=''>
                    <Input name="Url"/>
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
                    <Form.Item label="Images (min.5 Nos)" labelCol={{ span: 7 }} valuePropName="fileList" getValueFromEvent={normFile}>
                        <Upload
                            listType="picture" maxCount={20}
                            >
                                <div className='flex items-center gap-3'>
                                    <Button icon={<UploadOutlined />}>Upload</Button>
                                    <h1 className='text-red-600'>(preview size is 16:9)</h1>

                                </div>
                        </Upload>
                    </Form.Item>

                </div>
            </div>
        </div>
      </Form>
      <div className='flex gap-3 justify-center'>
        <Button type='primary' className='bg-blue-600 'onClick={handleNext}>
                Next
        </Button>
        

      </div>
    </div>
    
  )
}

export default BasicInfo