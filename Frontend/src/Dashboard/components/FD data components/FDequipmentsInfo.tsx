import { Modal } from 'antd';
import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { imaageURL } from '../../../utils/urls';
import UpdateEquipments from '../updateFacilities/UpdateEquipments';

const FDequipmentsInfo = ({mainData , refetch} :any) => {
     const [equipmentsModalOpen, setEquipmentsModalOpen] = useState(false);
  return <div>
     <div className="equipments ">
           <div className=" flex  justify-between items-center font-semibold ">
             <div>
               <h1>Equipments</h1>
             </div>
             <div>
               <FaEdit onClick={() => setEquipmentsModalOpen(true)} />
             </div>
           </div>
           <div className="p-3 ">
             <div className="   items-center justify-between  mb-4 rounded-md shadow-md p-3">
               {mainData?.data?.equipments?.map((it: any, ind: number) => (
                 <div
                   key={ind}
                   className="flex items-center gap-3 p-5 mb-2 bg-gray-100 rounded-md shadow-sm"
                 >
                   <div className="image-section">
                     <img
                       src={`${imaageURL}/${it.equipment_img}`}
                       alt="image"
                       className="md:h-8  md:w-10 w-8 h-4"
                     />
                   </div>
                   <div className="Name-section">{it.equipment_name}</div>
                 </div>
               ))}
             </div>
           </div>
    </div>
    <Modal
         title=""
         open={equipmentsModalOpen}
         onCancel={() => setEquipmentsModalOpen(false)}
         footer={false}
         width={600}
       >
         <UpdateEquipments
           facilityData={mainData?.data}
           refetch={() => refetch()}
           cancel={() => setEquipmentsModalOpen(false)}
         />
       </Modal>

  </div>;
};

export default FDequipmentsInfo;
