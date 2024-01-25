import { Checkbox, CheckboxProps } from "antd"
import { useEffect, useState } from "react";
import { ApiClientPrivate } from "../../utils/axios";
import { imaageURL } from "../../utils/urls";


// const data = [ 
//     {
//         id:1,
//         src:"https://imgs.search.brave.com/Aza9T8kTV9SyOXAkCj92CY1KhYauwKUo99q8-rSQJts/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9nb3Jp/bGFmaXRuZXNzLmNh/L3B1Yi9tZWRpYS9j/YXRhbG9nL3Byb2R1/Y3QvY2FjaGUvOTI5/ZmRjOTA0YTA1NGMw/ODc1NGJhZmQ3MTA5/YTA3NTUvZC9zL2Rz/YzAwOTYwXzJfMS5w/bmc",
//         name:" Assault AirBike",

//     },
//     {
//         id:2,
//         src:"https://imgs.search.brave.com/Aza9T8kTV9SyOXAkCj92CY1KhYauwKUo99q8-rSQJts/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9nb3Jp/bGFmaXRuZXNzLmNh/L3B1Yi9tZWRpYS9j/YXRhbG9nL3Byb2R1/Y3QvY2FjaGUvOTI5/ZmRjOTA0YTA1NGMw/ODc1NGJhZmQ3MTA5/YTA3NTUvZC9zL2Rz/YzAwOTYwXzJfMS5w/bmc",
//         name:" Assault AirBike",
        
//     },
//     {
//         id:3,
//         src:"https://imgs.search.brave.com/Aza9T8kTV9SyOXAkCj92CY1KhYauwKUo99q8-rSQJts/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9nb3Jp/bGFmaXRuZXNzLmNh/L3B1Yi9tZWRpYS9j/YXRhbG9nL3Byb2R1/Y3QvY2FjaGUvOTI5/ZmRjOTA0YTA1NGMw/ODc1NGJhZmQ3MTA5/YTA3NTUvZC9zL2Rz/YzAwOTYwXzJfMS5w/bmc",
//         name:" Assault AirBike",
        
//     }
// ,
// {
//     id:4,
//     src:"https://imgs.search.brave.com/Aza9T8kTV9SyOXAkCj92CY1KhYauwKUo99q8-rSQJts/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9nb3Jp/bGFmaXRuZXNzLmNh/L3B1Yi9tZWRpYS9j/YXRhbG9nL3Byb2R1/Y3QvY2FjaGUvOTI5/ZmRjOTA0YTA1NGMw/ODc1NGJhZmQ3MTA5/YTA3NTUvZC9zL2Rz/YzAwOTYwXzJfMS5w/bmc",
//     name:" Assault AirBike",
    
// }




// ]

interface Equipment {
    _id: number;
    image: string;
    name: string;
  }



  


const EquipmentForm = () => {

    const [equipmentsData , setEquipmetsData] = useState<Equipment[]>([]);


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
    
      console.log('equi' , equipmentsData);

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
    </div>
  )
}

export default EquipmentForm