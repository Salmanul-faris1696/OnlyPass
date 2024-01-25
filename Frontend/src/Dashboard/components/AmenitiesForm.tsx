import { Checkbox, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import { ApiClientPrivate } from '../../utils/axios';

const { TextArea } = Input;


interface Amenity {
    key: string;
    name: string;
    _id:string;
    

  }
  

const AmenitiesForm = () => {

//     {
//       id: 1,
//       label: 'Parking',
//       name: 'parking',
//     },
//     {
//       id: 2,
//       label: 'Locker Room ',
//       name: 'lockerRoom',
//     },
//     {
//       id: 3,
//       label: 'Shower',
//       name: 'shower',
//     },
//     {
//       id: 4,
//       label: 'Towel',
//       name: 'towel',
//     },
//     {
//       id: 5,
//       label: 'Wi-Fi',
//       name: 'wifi',
//     },
//     {
//       id: 6,
//       label: 'Sauna',
//       name: 'sunna',
//     },
//     {
//         id: 7,
//         label: 'Ice Bath',
//         name: 'iceBath',
//       },
//       {
//         id: 8,
//         label: 'Juice / Smoothie Bar',
//         name: 'bar',
//       },
//       {
//         id: 9,
//         label: 'Cafe / Restaurant',
//         name: 'cafe',
//       },
      
//   ];

  const [amentyData, setAmentyData] = useState<Amenity[]>([]);

  
  const fetchData = async () => {
    try {
      const res = await ApiClientPrivate.get("/amenities");
      setAmentyData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("data", amentyData);
  


  return (
    <div className="max-w-[500px] mx-auto mt-8">
      <Form onFinish={(values) => console.log({ values })}>
        <div className="font-bold text-lg mb-8">
          <h1>Amenities</h1>
        </div>

        {amentyData.map((item,) => (
          <div key={item._id} className="flex items-center justify-between mb-3 ">
            <Form.Item
              name={item.name}
              valuePropName="checked"
              wrapperCol={{ span:30,  }}
            >
                <div className=' w-[150px] md:w-[200px]  flex justify-between gap-3'>

                {item.name}
               
              <Checkbox> </Checkbox>
                </div>
            </Form.Item>
            
                <div className=' '>

            <Form.Item label="Paid" name={`${item.name}`}  valuePropName="" wrapperCol={{ span: 6}} >
             <Checkbox></Checkbox>
            </Form.Item>
                </div>
          </div>
        ))}



       

       
      </Form>
    </div>
  );
};

export default AmenitiesForm;
