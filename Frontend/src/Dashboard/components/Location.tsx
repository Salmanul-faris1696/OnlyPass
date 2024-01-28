import { Button, Form, Input, } from 'antd';
import { useDispatch } from 'react-redux';
import { nextButton, prevButton } from '../Redux/Features/ButtonSlice';
import TimeTable from './TimeTable';


const { TextArea } = Input;
const normFile = (e: any) => {
    console.log(e.file);
    
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  

const Location = () => {
  const dispatch = useDispatch()
  const handleNext = () => {
    console.log("next membership");
    
    dispatch(nextButton());
  };

  const handlePrevious = () => {
    console.log("basic info");
    
    dispatch(prevButton());
  };
 

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

          <div>
          <div className='font-bold text-lg mb-8'>
                    <h1>Time</h1>
                </div>
                <div>
                  <TimeTable/>
                </div>

          </div>

          <div className='flex gap-3 justify-center'>
            <Button type='primary' className='bg-blue-600 'onClick={handleNext}>
              Next
            </Button>
            <Button  className='bg-white 'onClick={handlePrevious}>
              Previous
            </Button>
          </div>
        </div>
    </div>
  )
}

export default Location