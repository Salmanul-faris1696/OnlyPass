import { UploadOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, InputNumber, Modal, Radio, Select, Upload ,Tooltip} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from 'react';
import { ApiClientPrivate } from '../../utils/axios';
import { setAmenitiesEditBtn, setBasicEditBtn, setEquipmentEditBtn, setLocationEditBtn, setMembershipEditBtn, setTimeEditbtn } from "../Redux/Features/EditFacilityBtn";
import { setAllTimingField, setAmenties } from '../Redux/Features/FacilityFeature/FacilititySlice';
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import  { SwitchHoliday, TimeEvening, TimeMorning } from './TimeTable';
import { imaageURL } from '../../utils/urls';
import { IoMdColorFill } from 'react-icons/io';




//Time 
export const UpdateTime = (props :any ) => {
  const {timeEditbtn} = useAppSelector((state) => state.editFacilities);
    const dispatch = useAppDispatch()

    const { facilityTiming } = useAppSelector((state) => state.facility);
    // console.log("facilityTime", facilityTiming);
  
    const handleChangeAllField = () => {
      dispatch(setAllTimingField(facilityTiming));
    };
    const handleOk = () => {
        dispatch(setTimeEditbtn(false))
      };
    
      const handleCancel = () => {
        dispatch(setTimeEditbtn(false))
    
      };



  return (

    <div className=''>
        <Modal title=""
        open={timeEditbtn}
         onOk={handleOk} 
         onCancel={handleCancel} 
         footer={[
            <Button key='update' type='primary' onClick={handleOk}   className='bg-blue-500'>
            Update
          </Button>,
            
         ]}
         width={600}
         >
          <div className=''>
          <div className="bg-white rounded-md px-5 mx-3 mb-5 ">
      <div className=" w-[400px] md:w-[500px]  flex justify-between items-center px-4 h-16 border-b-[1px]">
        <div className="md:w-[150px]">DAY</div>
        <div className="md:w-[250px] text-center">MORNING</div>
        <div className="md:w-[250px] text-center">EVENING</div>
      </div>

      <div className="">
        {facilityTiming.map((item:any, ind:any) => (
          <div
            key={ind}
            className="border-b-[1px] w-[400px] md:w-[500px] flex justify-between items-center p-4 relative"
          >
            <div className="w-[100px]">{item.day}</div>
            <div className="flex flex-col gap-2">
              <SwitchHoliday
                data={item}
                day={item.day}
                timetype="morning"
                defValue={item.morning.holiday}
              />
              <TimeMorning
                data={item}
                holder={"start"}
                timetype="morning"
                day={item.day}
                disabled={item.morning.holiday === true}
                defValue={item.morning.start}
              />
              <TimeMorning
                data={item}
                holder={"end"}
                timetype="morning"
                day={item.day}
                disabled={
                  item.morning.start === "24 hours" ||
                  item.morning.holiday === true
                }
                defValue={item.morning.end}
              />
            </div>
            <div className="flex flex-col gap-2">
              <SwitchHoliday
                data={item}
                day={item.day}
                timetype="evening"
                defValue={item.evening.holiday}
              />
              <TimeEvening
                data={item}
                holder={"start"}
                timetype="evening"
                day={item.day}
                disabled={
                  item.morning.start === "24 hours" ||
                  item.evening.holiday === true
                }
                defValue={item.evening.start}
              />
              <TimeEvening
                data={item}
                holder={"end"}
                timetype="evening"
                day={item.day}
                disabled={
                  item.morning.start === "24 hours" ||
                  item.evening.holiday === true
                }
                defValue={item.evening.end}
              />
            </div>
            <Tooltip title="Fill all fields with same Time">
              <div
                className={`${
                  item.day === "Monday" ? "flex" : "hidden"
                } absolute left-3 top-24`}
              >
                <IoMdColorFill
                  size={20}
                  className="duration-300 scale-[1.2] hover:scale-[1.5]"
                  // onClick={handleChangeAllField}
                />
              </div>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
          </div>

         </Modal>
    </div>

  )

}

/////////

interface Equipment {
  _id: string;
  name: string;
  image: string;
}

export const UpdateEquipmentModal: React.FC<any> = () => {
  const { EquipmentEditBtn } = useAppSelector((state) => state.editFacilities);
  const dispatch = useAppDispatch();
  const [equipmentsData, setEquipmentsData] = useState<Equipment[]>([]);
  const { equipments } = useAppSelector((state) => state.facility);

  const fetchData = async () => {
    try {
      const res = await ApiClientPrivate.get("/equipments/all-equipment");
      setEquipmentsData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const onChange = (checked: boolean, id: string, name: string, image: string) => {
  //   console.log("equipment id:", id, { checked });
  //   // dispatch(setEquipments({ equipment_id: id, equipment_name: name, equipment_img: image }));
  // };

  const handleOk = () => {
    dispatch(setEquipmentEditBtn(false));
  };

  const handleCancel = () => {
    dispatch(setEquipmentEditBtn(false));
  };



  return (
    <div className=''>
    <Modal title=""
    open={EquipmentEditBtn}
     onOk={handleOk} 
     onCancel={handleCancel} 
     footer={[
        <Button key='update' type='primary' onClick={handleOk}   className='bg-blue-500'>
        Update
      </Button>,
        
     ]}
     width={600}
     >
    <div className='p-10'>
      {equipmentsData.map((item, ind) => (
        <div
          key={ind}
          className="object-section border flex items-center justify-between p-2 mb-4 bg-white rounded-md shadow-md"
        >
          <div className="flex items-center gap-3">
            <div className="image-section">
              <img
                src={`${imaageURL}/${item.image}`}
                alt="image"
                className="h-20 w-24"
              />
            </div>
            <div className="Name-section">{item.name}</div>
          </div>
          <div className="flex justify-end">
            <Checkbox
              checked={equipments.length > 0 && equipments?.find((it: any) => it.equipment_id === item._id)}
              // onChange={(e) => onChange(e.target.checked, item._id, item.name, item.image)}
            ></Checkbox>
          </div>
        </div>
      ))}
    </div>
    
    </Modal>
        </div>
  );
};


