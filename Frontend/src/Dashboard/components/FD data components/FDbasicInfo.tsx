import { useState } from 'react';
import { dataImages, dataLogo } from '../../../utils/urls'
import { FaEdit } from 'react-icons/fa'
import { Modal, Input } from 'antd';
import UpdateBasicInfo from '../updateFacilities/UpdateBasicInfo';



const FDbasicInfo = ({ data, mainData,refetch }: any) => {
	const Facilityimages = mainData?.data.images;
	const [basicModalOpen, setBasicModalOpen] = useState(false);

  return (
	<div>
	
       <div className=" section-1 md:flex m-3 sm:px-10 md:px-1">
         <div className=" p-3 ">
           <div className="basic_info">
             <div className=" flex justify-between items-center font-semibold">
               <div>
                 <h1>Basic information</h1>
               </div>
               <div>
                 <FaEdit onClick={() => setBasicModalOpen(true)} />
               </div>
             </div>

             {data.map((item:any, index:any) => (
               <div
                 key={index}
                 className="Basic_info_detail mt-3 grid gap-5  lg:flex items-center m-3 p-1"
               >
                 <div className="label w-[150px]">
                   <h1>{item.label}</h1>
                 </div>
                 <div className="input flex gap-3 items-center font-medium">
                   <input
                     type="text"
                     value={item.input}
                     disabled
                     className=" w"
					 />
                 </div>
               </div>
             ))}

             <div className="description  md:grid lg:flex m-3 p-1 items-center">
               <div className=" md:w-[150px] w-[10px]">
                 <h1>Description:</h1>
               </div>
               <div className="">
                 <textarea
                   name=""
                   disabled
                   value={mainData?.data.description}
                   id=""
                   cols={40}
                   rows={5}
                   className=" rounded-md  p-2 bg-gray-100 md:w-[350px] mt-3 "
                 ></textarea>
               </div>
             </div>

             <div className="Logo flex gap-3 md:flex md:gap-0 m-3 p-1 items-center">
               <div className="md:w-[150px] ">
                 <h1>Logo: </h1>
               </div>
               <div className="flex   items-center gap-4">
                 <img
                   src={`${dataLogo}/${mainData?.data.logoUrl}`}
                   alt="gym logo"
                   className="w-32 h-32"
                 />
               </div>
             </div>

             <div className="imageGallery md:flex gap-3 md:flex-wrap items-center">
               <div>Facility Images :</div>
               <div className="flex gap-3 flex-wrap mt-3">
                 {Facilityimages?.map((url: any, index: any) => (
                   <img
                     key={index} // Add a unique key for each image
                     src={`${dataImages}/${url}`}
                     alt={`Facility Image ${index + 1}`}
                     className="w-36 h-36"
                   />
                 ))}
               </div>
             </div>
           </div>
         </div>
		  </div>

		   <Modal
         title=""
         open={basicModalOpen}
         onCancel={() => setBasicModalOpen(false)}
         footer={false}
       >
         <UpdateBasicInfo
           facilityData={mainData?.data}
           refetch={() => refetch()}
           cancel={() => setBasicModalOpen(false)}
         />
       </Modal>
	</div>
  )
}

export default FDbasicInfo