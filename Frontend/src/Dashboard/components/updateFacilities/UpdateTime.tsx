import { Button, Tooltip } from "antd";
import { setAllTimingField, setfacilityTiming } from "../../Redux/Features/FacilityFeature/FacilititySlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { SwitchHoliday, TimeEvening, TimeMorning } from "../TimeTable";
import  {IoMdColorFill}  from "react-icons/io";
import { ApiClientPrivate } from "../../../utils/axios";
import { useEffect } from "react";

const UpdateTime = (props:any) => {
    const dispatch =useAppDispatch()

    const { facilityTiming } = useAppSelector((state) => state.facility);
    console.log(facilityTiming);
    console.log(props.facilityData.facilityTiming);
    
    
    // console.log("facilityTime", facilityTiming);
  
    const handleChangeAllField = () => {
      dispatch(setAllTimingField(facilityTiming));
    };

    const handleUpdate = async() => {
        try {
            
            const id = props.facilityData._id;
            await ApiClientPrivate.put(`facilities/update/${id}`, {facilityTiming:facilityTiming})
            props.cancel()
            props.refetch()
        } catch (error) {``
            alert(error);  
        }
    }
    useEffect(()=>{
        props.facilityData.facilityTiming.map((time:any)=>{
            interface DayTiming {
                start: string;
                end: string;
                holiday: boolean;
              }
          
              interface DayData  {
                day: string;
                morning: DayTiming;
                evening: DayTiming;
                // fullDay: boolean;
                
              }
              const timeData: DayData = {
                day: time.day,
                morning: {
                  start: time.morning.start,
                  end: time.morning.end,
                  holiday: time.morning.holiday,
                },
                evening: {
                  start: time.evening.start,
                  end: time.evening.end,
                  holiday: time.evening.holiday,
                },
                // fullDay: props.data.fullDay,
              };
          
              dispatch(setfacilityTiming(timeData));
        })
    },[props])
    
    
      
    return (
      <div className=''>
    
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
              defValue={item.morning.holiday !== true? item.morning.start : ""}
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
              defValue={item.morning.holiday !== true? item.morning.end : ""}
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
              defValue={item.evening.holiday !== true? item.evening.start : ""}
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
              defValue={item.evening.holiday !== true? item.evening.end : ""}
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
                onClick={handleChangeAllField}
              />
            </div>
          </Tooltip>
        </div>
      ))}
    </div>
  </div>
        </div>
  
        <div className="flex justify-center">
            <Button type="primary" htmlType="submit" className="bg-blue-600" onClick={handleUpdate}>
                Update
            </Button>
        </div>
  </div>
    )
    
      };



export default UpdateTime