import {Form,Input,} from 'antd';

const { TextArea } = Input;
const normFile = (e: any) => {
    console.log(e.file);
    
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  

const Location = () => {
 

  return (
    <div>
          <div className='font-semibold '>
      <Form onFinish={(values) => console.log({values})}  labelCol={{ span: 7 }} wrapperCol={{ span: 25 }} className="max-w-[400px] md:max-w-[500px] ">
        <div>
            <div className='font-bold text-lg mb-8'>
                <h1>Location</h1>
            </div>

            <div>
            <Form.Item label="Address">
                    <TextArea name="Address" rows={4} />
                </Form.Item>
                

                <Form.Item label="Pin Code">
                    <Input name="pin"/>
                </Form.Item>

                <Form.Item label="Country"className=''  >
                    <Input name='country' disabled value={"India"} />
                </Form.Item>

                <Form.Item label="State" className=''>
                    <Input name="state" disabled value={'Kerala'}/>
                </Form.Item>


                <Form.Item label="Map Link" className=''>
                    <Input name='mapLink'/>
                </Form.Item>
             
            </div>
        </div>
   
      </Form>
    
    
    </div>
    
    </div>
  )
}

export default Location