import { useEffect, useState } from "react";
import { ApiClientPrivate } from "../../../utils/axios";
import { Button, Checkbox } from "antd";

interface Amenity {
    key: string;
    name: string;
    _id: string;
  }

const UpdateAmenities = (props:any) => {
    console.log({props});
 
    const [selectedTypes, setSelectedTypes] = useState<{ [key: string]: string | null }>(() => {
        const initialSelectedTypes: { [key: string]: string | null } = {};
    
        // Set initial values based on props.facilityData.amenities
        props.facilityData.amenities.forEach((amenity:any) => {
          initialSelectedTypes[amenity.amenities_name] = amenity.isPaid
        });
    
        return initialSelectedTypes;
      });

  
  const [amentyData, setAmentyData] = useState<Amenity[]>([]);


const fetchData = async () => {
    try {
      const res = await ApiClientPrivate.get("/amenities");
        const test= res.data.includes(props.facilityData.amenities)
        console.log("test1 >>>>",test);
        setAmentyData(res.data)
        
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  const handleTypeChange = (name: string, type: string) => {
    setSelectedTypes((prevSelectedTypes) => {
      const updatedTypes = {
        ...prevSelectedTypes,
        [name]: prevSelectedTypes[name] === type ? null : type,
      };

      // Remove entry if both checkboxes are unchecked
      if (!updatedTypes[name]) {
        delete updatedTypes[name];
      }

      return updatedTypes;
    });
  };
  
  
  console.log("selected Type :", selectedTypes);
  console.log("amentyData :", amentyData);



  const handleUpdate = async () => {
    try {
      const id = props.facilityData._id; // Replace with your actual identifier
      const updates = Object.keys(selectedTypes).map((name) => ({
        amenities_name: name,
        isPaid: selectedTypes[name],
      }));
      props.cancel()
      await ApiClientPrivate.put(`facilities/update/${id}`, { amenities: updates })
      // Dispatch action to update Redux state
    } catch (error) {
      console.error('Error updating facility:', error);
      // Handle error appropriately
    }
  };
  
  return (
    <div className=''>
          
              <div className='p-10'>
                {/* <AmenitiesForm/> */}
                {amentyData.map((item) => (

        <div key={item._id} className="amentiesCheckBox flex bg-white mb-3 rounded-md shadow-md p-4 justify-between hover:bg-slate-100">
          <div className="w-[150px] md:w-[200px] flex items-center gap-3">
            {item.name}
          </div>
          <div className="flex items-center gap-3 ">
            <div className="PaidSection">Free</div>
            <Checkbox 

            
            checked={selectedTypes[item.name] === 'free'}
            onChange={() => handleTypeChange(item.name, 'free')}></Checkbox>
          </div>
          <div className="flex items-center gap-3 ">
            <div className="PaidSection">Paid</div>
            <Checkbox 
            // defaultChecked=""
              checked={selectedTypes[item.name] === 'paid'}           
              onChange={() => handleTypeChange(item.name, 'paid')}>
              </Checkbox>
          </div>
        </div>
      ))}
        </div>   
        <div className="flex justify-center">
            <Button type="primary" htmlType="submit" className="bg-blue-600" onClick={handleUpdate}>
                Update
            </Button>
        </div>
     </div>
  )
}

export default UpdateAmenities