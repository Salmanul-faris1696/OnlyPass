import { Modal } from 'antd';
import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import UpdateLocation from '../updateFacilities/UpdateLocation';

const FDlocationInfo = ({data , mainData , refetch} :any) => {
  const [locationModalOPen, setLocationModalOpen] = useState(false);
  return <div>

    <div className="Location p-3 w-full">
             <div className=" flex  justify-between items-center font-semibold">
               <div>
                 <h1>Location</h1>
               </div>
               <div onClick={() => setLocationModalOpen(true)} className='flex items-center gap-1 bg-[#F2F2F2] w-[84px] h-[24px] px-2 justify-center'>
                 <FaEdit /> 
				 <p>Edit</p>
               </div>
             </div>

             <div className=" md:grid lg:flex m-3 gap-8 p-1 items-center">
               <div className=" md:w-[150px] w-[10px] ">
                 <h1>Address</h1>
               </div>
               <div className="md:flex  md:gap-3 font-medium  ">
               <p>{mainData?.data?.address}</p>
               </div>
             </div>

             {data.map((it:any) => (
               <div key={it.id} className="location  mt-3 grid gap-8 lg:flex items-center m-3 p-1 ">
                 <div className="label w-[150px]">
                   <h1>{it.label}</h1>
                 </div>
                 <div className="input flex gap-3 items-center font-medium">
                 <p>{it.input}</p>
                 </div>
               </div>
             ))}
           </div>


    

    <Modal
         title=""
         open={locationModalOPen}
         onCancel={() => setLocationModalOpen(false)}
         footer={false}
       >
         <UpdateLocation
           facilityData={mainData?.data}
           cancel={() => setLocationModalOpen(false)}
         />
       </Modal>

  </div>;
};

export default FDlocationInfo;
