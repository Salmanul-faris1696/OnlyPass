import { useEffect, useState } from 'react';
import { ApiClientPrivate } from '../../../utils/axios';
import { imaageURL } from '../../../utils/urls';
import { Button, Checkbox } from 'antd';
import { setEquipmentUpdateBtn } from '../../Redux/Features/updateFacilityBtn';
import { useAppDispatch } from '../../Redux/hooks';

interface Equipment {
  _id: string;
  name: string;
  image: string;
  checked: boolean;
}

const UpdateEquipments = (props: any) => {
  const [equipmentsData, setEquipmentsData] = useState<Equipment[]>([]);
    const dispatch = useAppDispatch()


  const fetchData = async () => {
    try {
      const res = await ApiClientPrivate.get('/equipments/all-equipment');
      console.log({ res, props });
      const eqips = res.data.map((it: any) => {
        return {
          ...it,
          checked: props.facilityData.equipments
            .map((eq: any) => eq.equipment_name)
            .includes(it.name)
            ? true
            : false
        };
      });
      console.log({ eqips });

      setEquipmentsData(eqips);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [selectedEquipments, setSelectedEquipments] = useState<
    { equipment_img: string; equipment_name: string }[]
  >(props.facilityData.equipments);
  const onChange = (checked: boolean, equipment_name: string, equipment_img: string) => {
    if (checked) {
      // If checked, add the equipment to the selectedEquipments
      setSelectedEquipments((prev) => [...prev, { equipment_img, equipment_name }]);
    } else {
      // If unchecked, remove the equipment from the selectedEquipments
      setSelectedEquipments((prev) => prev.filter((eq) => eq.equipment_name !== equipment_name));
    }
  };

  const handleUpdate = async () => {
    try {
      // Perform the update operation using selectedEquipments
      // For example, you can send a request to update the backend

      const id = props.facilityData._id; // Replace with your actual identifier
      await ApiClientPrivate.put(`facilities/update/${id}`, { equipments: selectedEquipments });

      // Dispatch action to update Redux state or perform other necessary operations
      props.cancel();
         dispatch(setEquipmentUpdateBtn(true))

    } catch (error) {
      console.error('Error updating facility:', error);
      // Handle error appropriately
    }
  };

  return (
    <div className="">
      <div className="p-10">
        {equipmentsData.map((item, ind) => (
          <div
            key={ind}
            className="object-section border flex items-center justify-between p-2 mb-4 bg-white rounded-md shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="image-section">
                <img src={`${imaageURL}/${item.image}`} alt="image" className="h-20 w-24" />
              </div>
              <div className="Name-section">{item.name}</div>
            </div>
            <div className="flex justify-end">
              <Checkbox
                defaultChecked={item.checked}
                // checked={selectedEquipments.includes(item._id)}
                onChange={(e) => onChange(e.target.checked, item.name, item.image)}
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
};

export default UpdateEquipments;
