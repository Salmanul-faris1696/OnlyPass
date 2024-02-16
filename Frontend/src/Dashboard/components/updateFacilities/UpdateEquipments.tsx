import { useEffect, useState } from "react";
import { ApiClientPrivate } from "../../../utils/axios";
import { imaageURL } from "../../../utils/urls";
import Checkbox from "antd/es/checkbox/Checkbox";
import { Button } from "antd";

interface Equipment {
  _id: string;
  name: string;
  image: string;
}

const UpdateEquipments = (props: any) => {
  const [equipmentsData, setEquipmentsData] = useState<Equipment[]>([]);

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

  const [selectedEquipments, setSelectedEquipments] = useState<string[]>([]);

  const onChange = (checked: boolean, id: string, name: string, image: string) => {
    if (checked) {
      setSelectedEquipments((prevSelected) => [...prevSelected, id]);
    } else {
      setSelectedEquipments((prevSelected) => prevSelected.filter((equipId) => equipId !== id));
    }
  };

  const handleUpdate = async () => {
    try {
      // Perform the update operation using selectedEquipments
      // For example, you can send a request to update the backend
      props.cancel(false)

      const id = props.facilityData._id; // Replace with your actual identifier
      await ApiClientPrivate.put(`facilities/update/${id}`, { equipments: selectedEquipments });
      
      // Dispatch action to update Redux state or perform other necessary operations

    } catch (error) {
      console.error('Error updating facility:', error);
      // Handle error appropriately
    }
  };

  return (
    <div className=''>
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
                checked={selectedEquipments.includes(item._id)}
                onChange={(e) => onChange(e.target.checked, item._id, item.name, item.image)}
              />
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
  );
}

export default UpdateEquipments;
