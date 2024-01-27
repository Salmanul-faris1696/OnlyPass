import { Button, message } from "antd"
import { useDispatch } from 'react-redux';
import {  prevButton } from '../Redux/Features/ButtonSlice';
import { Link,  } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const Preview = () => {
  const dispatch = useDispatch()
  const handlePrevious = () => {

    dispatch(prevButton());
  };

  return (
    <div>
        <div className="font-bold text-lg mb-8">
          <h1>Preview</h1>
        </div>

        <div>
          <div className="flex justify-between items-center">
           <div>
            <h1 className="font-semibold">Basic Information</h1>
           </div>
           <div className="  text-black rounded-full flex items-center justify-center">
           <FaEdit size={20} />
           </div>

          </div>

          <div>
            <div>
              
            </div>
          </div>

        </div>

    
        
        


        
        <div className='flex gap-3 justify-center'>
        <Button type='primary' className='bg-blue-600 'onClick={() => message.success('Processing complete!')}>
               Done
        </Button>
        <Button  className='bg-white 'onClick={handlePrevious}>
              Previous
        </Button>

      </div>


    </div>
  )
}

export default Preview