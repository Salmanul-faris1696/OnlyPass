import { Checkbox, message } from "antd";
import { useEffect, useState } from "react";
import { ApiClientPrivate } from "../../utils/axios";
import { imaageURL } from "../../utils/urls";
import { useDispatch } from "react-redux";
import { prevButton } from "../Redux/Features/ButtonSlice";
import { Button } from "antd/es/radio";
import { useAppSelector } from "../Redux/hooks";
import {  setEquipments } from "../Redux/Features/FacilityFeature/FacilititySlice";
import { useNavigate } from "react-router-dom";

interface Equipment {
  _id: string;
  image: string;
  name: string;
}

const EquipmentForm = () => {
  const [equipmentsData, setEquipmetsData] = useState<Equipment[]>([]);
  const {equipments} = useAppSelector((state) => state.facility);
  const dispatch = useDispatch();
  const navigate =useNavigate()
 
  const handlePrevious = () => {
    dispatch(prevButton());
  };

  const fetchData = async () => {
    try {
      const res = await ApiClientPrivate.get("/equipments/all-equipment");
      console.log(res.data);

      setEquipmetsData(res.data);
    } catch (errpr) {
      console.log(errpr);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // get data from redux

  const reduxState = useAppSelector((state) => state.facility);

  const handleDone = async () => {
    console.log("done", reduxState);
    message.success("Processing complete!");
    navigate("/Facilities")

    try {
      // create Facility
      const response = await ApiClientPrivate.post(
        "facilities/create",
        reduxState,
        {
          headers: {
            "Content-Type": "application/json", // Use 'application/json' for JSON data
          },
        }
      );

      console.log("Facility created successfully:", response.data);
    } catch (error) {
      console.error("Error creating facility:", error);
      // Handle error appropriately
    }
  };

  const onChange = (checked: boolean, id: string , name :string , image:string ) => {
    console.log("equipment id:", id, { checked });
      dispatch(setEquipments( {equipment_id : id ,equipment_name : name , equipment_img : image}));
  };

  return (
    <div>
      <div className="max-w-[500px] mx-auto mt-8">
        <div className="font-semibold text-center text-2xl mb-10">
          <h1>Equipments</h1>
        </div>

        <div className="List-Section">
          {equipmentsData.map((item,ind) => (
            <label>
            <div
              key={ind}
              className="object-section border flex items-center justify-between p-2 mb-4 bg-white rounded-md shadow-md"
            >
              <div className="flex items-center gap-3 " >
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
                  checked={equipments.length > 0 && equipments?.find((it:any) => it.equipment_id === item._id) }
                  onChange={(e) => onChange(e.target.checked, item._id , item.name ,item.image  )}
                ></Checkbox>
              </div>
            </div>
            </label>
          ))}
        </div>
      </div>
      <div className="flex gap-3 justify-center">
        <Button type="primary" className=" " onClick={handleDone}>
          Done
        </Button>
        <Button className="bg-white " onClick={handlePrevious}>
          Previous
        </Button>
      </div>
    </div>
  );
};

export default EquipmentForm;
