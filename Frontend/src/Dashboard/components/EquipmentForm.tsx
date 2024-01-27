import { Checkbox, CheckboxProps, message } from "antd"
import { useEffect, useState } from "react";
import { ApiClientPrivate } from "../../utils/axios";
import { imaageURL } from "../../utils/urls";
import { useDispatch } from 'react-redux';
import { nextButton, prevButton } from '../Redux/Features/ButtonSlice';
import { Button } from "antd/es/radio";

interface Equipment {
    _id: number;
    image: string;
    name: string;
  }

const EquipmentForm = () => {

    const [equipmentsData , setEquipmetsData] = useState<Equipment[]>([]);
    const dispatch = useDispatch()
    const handleNext = () => {
        dispatch(nextButton());
      };
    
      const handlePrevious = () => {
        dispatch(prevButton());
      };

    const fetchData= async () =>{
        try {
          const res=await ApiClientPrivate.get("/equipments/all-equipment");
          console.log(res.data);
          
          setEquipmetsData(res.data)
          
        } catch (errpr) {
          console.log(errpr);
          
        }
      } 
    
      useEffect(() => {
        fetchData();
      }, []);
    
      // console.log('equi' , equipmentsData);

    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
      }; 
  return (
    <div>
        <div className="max-w-[500px] mx-auto mt-8">
            <div className="font-bold text-lg mb-8">
              <h1>Equipments</h1>
            </div>

            <div className="List-Section">

              {equipmentsData.map((it)=>(

                <div key={it._id} className="object-section border flex items-center justify-between p-2 mb-4 bg-white rounded-md shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="image-section">
                        <img src={`${imaageURL}/${it.image}`} alt="image" className="h-20 w-24" />
                      </div>
                      <div className="Name-section">
                        {it.name}
                      </div>

                    </div>
                    <div className="flex justify-end">
                    <Checkbox onChange={onChange}></Checkbox>
                    </div>
                </div>
                ))}
            </div> 
        </div>
        <div className='flex gap-3 justify-center'>
        <Button type='primary' className=' 'onClick={() => message.success('Processing complete!')}>
               Done
        </Button>
        <Button  className='bg-white 'onClick={handlePrevious}>
              Previous
        </Button>

      </div>
    </div>
  )
}

export default EquipmentForm