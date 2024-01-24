import { PlusOutlined } from '@ant-design/icons';
import {Checkbox,Form,Input, Radio, Upload} from 'antd';

const { TextArea } = Input;
const normFile = (e: any) => {
    console.log(e.file);
    
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  
const BasicInfo = () => {
    
  return (
    <div className='font-semibold '>
      <Form onFinish={(values) => console.log({values})} labelCol={{ span: 7 }} wrapperCol={{ span: 25 }} className="max-w-[400px] md:max-w-[500px] ">
        <div>
            <div>
                <Form.Item   label="Facility Type :"  className=''>
                    <Radio.Group>
                        <Radio value="acess"> Access </Radio>
                        <Radio value="pass"> Pass </Radio>
                    </Radio.Group>
                </Form.Item>
            </div>

            <div>
                <Form.Item label="Gender" name="gender" valuePropName="checked"  labelCol={{ span: 6 }}>
                    <Checkbox>Gents Only</Checkbox>
                    <Checkbox>Ladies Ladies</Checkbox>
                    <Checkbox>Unisex (mixed)</Checkbox>
                </Form.Item>
            </div>

        </div>

        <div>
            <div className='font-bold text-lg mb-8'>
                <h1>Basic Information</h1>
            </div>

            <div>
                <Form.Item label="Gym name">
                    <Input />
                </Form.Item>

                <Form.Item label="Owner Name">
                    <Input />
                </Form.Item>

                <Form.Item label="Email Address" className=''>
                    <Input />
                </Form.Item>

                <Form.Item label=" phone Number "className=''>
                    <Input  />
                </Form.Item>

                <Form.Item label="Website url" className=''>
                    <Input />
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
                    <TextArea rows={4} />
                </Form.Item>
                
                <Form.Item label="Images (min.5 Nos)" valuePropName="fileList" getValueFromEvent={normFile}>
                <Upload  listType="picture-card"  maxCount={5}>
                    <button style={{ border: 0, background: 'none' }} type="button">
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                    </button>
                </Upload>
                </Form.Item>
            </div>
        </div>
   
      </Form>
    
    
    </div>
    
  )
}

export default BasicInfo