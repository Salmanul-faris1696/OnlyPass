import { Button, message } from "antd"
import { useDispatch } from 'react-redux';
import {  prevButton } from '../Redux/Features/ButtonSlice';

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