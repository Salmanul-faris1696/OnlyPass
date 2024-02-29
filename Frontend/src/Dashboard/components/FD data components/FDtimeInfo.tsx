import { Modal } from 'antd';
import  { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import UpdateTime from '../updateFacilities/UpdateTime';
import { useAppDispatch } from './../../Redux/hooks';
import { resetFacility } from '../../Redux/Features/FacilityFeature/FacilititySlice';

const FDtimeInfo = ({ mainData,refetch }: any) => {
  const [timeModalOpen, setTimeModalOpen] = useState(false);
  const timeData = mainData?.data?.facilityTiming;
  const dispatch = useAppDispatch()
  
  if(timeModalOpen === false )dispatch(resetFacility())
  return (
    <div>
     <div className="Time p-3 w-full ">
            <div className=" flex  justify-between items-center font-semibold">
              <div className=" mb-2">
                <h1 className="text-lg pb-2 ">Time</h1>
              </div>
              <div onClick={() => setTimeModalOpen(true)} className='flex items-center gap-1 bg-[#F2F2F2] w-[84px] h-[24px] px-2 justify-center'>
                 <FaEdit /> 
				 <p>Edit</p>
               </div>
            </div>

            <div className="timetable ">
              <div className="flex justify-between font-bold mt-10 border-b">
                <div className="Day w-[200px]  ">
                  <h1>Day</h1>
                </div>

                <div className="Morning Time   w-[200px] lg:text-center xl:text-start  ">
                  <h1>Morning </h1>
                </div>

                <div className="Evening Time   w-[200px] lg:text-center xl:text-start ">
                  <h1>Evening</h1>
                </div>
              </div>

              {timeData?.map((time: any) => (
                  <div className="Timedata flex justify-between border-b  "> 
                    <div className="md:w-[100px] w-[200px] xl:w-[200px]  py-3 text-start"> 
                      <h2 className="font-semibold">{time.day}</h2> 
                    </div> 

                    <div className=" py-3 "> 
                      {time.morning.holiday === true && time.evening.holiday === true ? ( 
                      <p className="font-medium text-base md:w-[100px] w-[200px] xl:w-[200px]   ">
                          Holiday
                        </p>
                    ) : time.morning.holiday === true ? (
                      <p className="font-medium text-base md:w-[100px] w-[200px] xl:w-[200px]  ">
                          Off 
                        </p> 
                    ) : time.morning.start !== '24 hours' ? (
                      <p className="font-medium text-base md:w-[100px] w-[200px] xl:w-[200px] ">
                          {' '} 
                          {time.morning.start} to {time.morning.end} 
                        </p> 
                    ) : (
                      <p className="font-medium text-base md:w-[100px] w-[200px] xl:w-[200px] ">
                          24 hours 
                        </p> 
                    )}
                    </div> 

                    <div className=" py-3  "> 
                      {time.morning.holiday === true && time.evening.holiday === true ? ( 
                      ''
                    ) : time.evening.holiday === true ? (
                      <p className="font-medium text-base md:w-[100px] w-[200px] xl:w-[200px]  ">
                          Off 
                        </p> 
                    ) : time.morning.start !== '24 hours' ? (
                      <p className="font-medium text-base md:w-[100px] w-[200px] xl:w-[200px]  ">
                          {' '} 
                         {time.evening.start} to {time.evening.end} 
                       </p> 
                    ) : (
                      ''
                    )}
                    </div> 
                  </div> 
                ))} 
              </div> 
      </div> 
      
      <Modal
         title=""
         open={timeModalOpen}
         onCancel={() => setTimeModalOpen(false)}
         footer={false}
         width={600}
       >
         <UpdateTime
           facilityData={mainData?.data}
           cancel={() => setTimeModalOpen(false)}
         />
       </Modal>
        </div>
   

  )
};

export default FDtimeInfo;
