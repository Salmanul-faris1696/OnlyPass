import { Button, Checkbox } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ApiClientPrivate } from '../../utils/axios';
import { nextButton, prevButton } from '../Redux/Features/ButtonSlice';
import { setAmenties } from '../Redux/Features/FacilityFeature/FacilititySlice';
import { useAppSelector } from '../Redux/hooks';

interface Amenity {
  key: string;
  name: string;
  _id: string;
}

const AmenitiesForm = () => {
  const [selectedTypes, setSelectedTypes] = useState<{ [key: string]: string | null }>({});
  const {amenities} = useAppSelector((state) => state.facility);
console.log({amenities, selectedTypes});

  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(nextButton());
  };

  const handlePrevious = () => {
    dispatch(prevButton());
  };

  const [amentyData, setAmentyData] = useState<Amenity[]>([]);


  const fetchData = async () => {
    try {
      const res = await ApiClientPrivate.get("/amenities");
      const initialSelectedTypes: { [key: string]: string | null } = {};
      res.data.forEach((item:any) => {
        initialSelectedTypes[item._id] = null;
      });
      setSelectedTypes(initialSelectedTypes);
      setAmentyData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTypeChange = (id: string, type: string, e:any) => {
    setSelectedTypes((prevSelectedTypes) => ({
      ...prevSelectedTypes,
      [id]: prevSelectedTypes[id] === type ? null : type,

    }));
    console.log("check",e.target.checked);
    
    // Dispatch your action accordingly
    if (type === 'free' && e.target.checked || type === 'paid' && e.target.checked ) {
      dispatch(setAmenties({ amenities_id: id, isPaid: type }));
    }else{
      dispatch(setAmenties( { amenities_id: id, Paid: e.target.checked }))
    }

  };
  

  return (
    <div className="max-w-[500px] mx-auto mt-8">
      <div className="font-semibold text-center text-2xl mb-10">
        <h1>Amenities</h1>
      </div>

      {amentyData.map((item) => (
        <div key={item._id} className="amentiesCheckBox flex bg-white mb-3 rounded-md shadow-md p-4 justify-between hover:bg-slate-100">
          <div className="w-[150px] md:w-[200px] flex items-center gap-3">
            {item.name}
          </div>
          <div className="flex items-center gap-3 ">
            <div className="PaidSection">Free</div>
            <Checkbox 
            checked={amenities.length > 0 && amenities?.find(it => it.amenities_id == item._id)?.isPaid === 'free' || selectedTypes[item._id] === 'free'} 
            onChange={(e:any) => handleTypeChange(item._id, 'free',e)}></Checkbox>
          </div>
          <div className="flex items-center gap-3 ">
            <div className="PaidSection">Paid</div>
            <Checkbox 
            checked={amenities.length > 0 && amenities?.find(it => it.amenities_id == item._id)?.isPaid === 'paid' || selectedTypes[item._id] === 'paid'} 
            onChange={(e:any) => handleTypeChange(item._id, 'paid', e)}></Checkbox>
          </div>
        </div>
      ))}
      <div className="flex gap-3 justify-center">
        <Button type="primary" className="bg-blue-600 " onClick={handleNext}>
          Next
        </Button>
        <Button className="bg-white " onClick={handlePrevious}>
          Previous
        </Button>
      </div>
    </div>
  );
};

export default AmenitiesForm;
