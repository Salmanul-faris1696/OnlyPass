import { Checkbox, message } from "antd";
import { useEffect, useState } from "react";
import { ApiClientPrivate } from "../../utils/axios";
import { imaageURL } from "../../utils/urls";
import { useDispatch } from "react-redux";
import { prevButton } from "../Redux/Features/ButtonSlice";
import { Button } from "antd/es/radio";
import { useAppSelector } from "../Redux/hooks";
import { addData } from "../Redux/Features/FacilityFeature/FacilititySlice";

interface Equipment {
  _id: string;
  image: string;
  name: string;
}

const EquipmentForm = () => {
  const [equipmentsData, setEquipmetsData] = useState<Equipment[]>([]);
  const dispatch = useDispatch();
  // const handleNext = () => {
  //     dispatch(nextButton());
  //   };

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

  const onChange = (checked: boolean, id: string) => {
    console.log("equipment id:", id, { checked });
      dispatch(addData({equipments_id: id,}));
  };

  return (
    <div>
      <div className="max-w-[500px] mx-auto mt-8">
        <div className="font-bold text-lg mb-8">
          <h1>Equipments</h1>
        </div>

        <div className="List-Section">
          {equipmentsData.map((it,ind) => (
            <div
              key={ind}
              className="object-section border flex items-center justify-between p-2 mb-4 bg-white rounded-md shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="image-section">
                  <img
                    src={`${imaageURL}/${it.image}`}
                    alt="image"
                    className="h-20 w-24"
                  />
                </div>
                <div className="Name-section">{it.name}</div>
              </div>
              <div className="flex justify-end">
                <Checkbox
                  onChange={(e) => onChange(e.target.checked, it._id)}
                ></Checkbox>
              </div>
            </div>
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
