import { FaEdit } from "react-icons/fa";
import { Table } from 'antd';
import type { TableProps } from 'antd';
import Amenities from './../../../../only-pass-frontend/src/Dashboard/Pages/Amenities';


const data = [
  {
    id: 1,
    label: "Facility Type ",
    input: "Access",
  },
  {
    id: 2,
    label: " Facility Gender ",
    input: "Unisex",
  },
  {
    id: 3,
    label: "Facility Tier ",
    input: "Gold",
  },
  {
    id: 4,
    label: "Facility Name ",
    input: "Hulk Fit",
  },
  {
    id: 5,
    label: "Contact Person Name ",
    input: "Salman",
  },
  {
    id:6 ,
    label: "Email Address",
    input: "hulkfit111@gmail.com",
  },
  {
    id:7 ,
    label: "Phone Number",
    input: "1234567890",
  },
  {
    id: 8,
    label: "Website URL",
    input: "www.hulkfit.com",
  },
  
];

const data2 = [
  {
    id:1,
    label:'Pincode',
    input:"676503"
  },
  {
    id:2,
    label:"Country",
    input:"India"
  },
  {
    id:3,
    label:"state",
    input:"Kerala"
  },
  {
    id:4,
    label:"latitude_longitude",
    input:"12345,123456"

  }
]

interface DataType {
  key: string;
  plans: string;
  price: number;
  
  
}
interface amenityData{
  amenities:string
  paid : string
}
interface equipmentData{
  equi_name:string
  equi_image:any
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Plans',
    dataIndex: 'plans',
    key: 'plans',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },

]

const tableData: DataType[] = [
  {
    key: '1',
    plans: 'adimission fees',
    price: 1000,
    
  },
  {
    key: '2',
    plans: 'Monthly pass',
    price: 850,
    
  },
  {
    key: '3',
    plans: '3 Month pass',
    price: 2800,
    
  },
  {
    key: '4',
    plans: '6 Monthly pass',
    price: 5500,
    
  },
]

const columns2: TableProps<amenityData>['columns'] = [
  {
    title: 'Amenties',
    dataIndex: 'amenities',
    key: 'amenities',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Paid',
    dataIndex: 'paid',
    key: 'paid',
  },

]

const tableData2: amenityData[] = [
  {
    amenities: 'Parking',
    paid: "paid",
    
  },
  {
    amenities: 'Shower',
    paid: "paid",
    
  },{
    amenities: 'Locker Room',
    paid: "free",
    
  },{
    amenities: 'Wifi',
    paid: "free",
    
  },{
    amenities: 'ice-Bath',
    paid: "paid",
    
  },
  
 
]





const FacilitiesDetails = () => {
  return (
    <div className="w-fit">
       <div className="text-center p-3  mt-5">
      <h1 className="font-semibold text-5xl ">Hulk fit</h1>
    </div>
    <div className="md:flex m-3"> 
   
      <div className=" p-3 w-fit  md:w-[50%]">
       
        <div className="basic_info">

        <div className=" flex justify-between items-center font-semibold">
          <div>
            <h1>Basic information</h1>
          </div>
          <div>
            <FaEdit />
          </div>
        </div>

        {data.map((item) => (
          <div key={item.id} className="Basic_info_detail mt-3  flex items-center m-3 p-1">
            
            <div className="label w-[150px]">
              <h1>
                {item.label}:
              </h1>

            </div>
            <div className="input flex gap-3 items-center"> 
            <input type="text" value={item.input} disabled className="border rounded-md p-2 bg-gray-100 w-[250px]"/> 

            </div>
          </div>
        ))}

        <div className="description md:flex m-3 p-1 items-center">
          <div className=" md:w-[150px] w-[10px]">
            <h1>Description:</h1>
          </div>
          <div className="md:flex  md:gap-3 ">
            <textarea name="" disabled value={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque maxime consequuntur voluptatem iusto inventore molestiae aspernatur? Non magnam, "}  id="" cols={45} rows={5} className="border rounded-md  p-2 bg-gray-100 md:w-[400px] mt-3 "></textarea>
            
          </div>
        </div>

        <div className="Logo flex gap-3 md:flex md:gap-0 m-3 p-1 items-center">
          <div className="md:w-[150px] ">
            <h1>Logo: </h1>
          </div>
          <div className="flex   items-center gap-4">
          <img src="https://imgs.search.brave.com/sG4czDv-d0Np2FXnGSENDEBc43QLUn1hizwPmzCQWIo/rs:fit:560:320:1/g:ce/aHR0cHM6Ly9pbWcu/Zml0aW1nLmluL3N0/dWRpb19sb2dvXzk0/NTlDMTNEMTY5MDc1/LnBuZw" alt="gym logo" className="w-32 h-32" />
          </div>


        </div>

        <div className="imageGallery md:flex gap-3 md:flex-wrap items-center">
          <div>
            Facility Images :
          </div>
          <div className="flex gap-3 flex-wrap mt-3">

          <img src="https://imgs.search.brave.com/H3nggTbu0mEank_1QIXqMUCqwRaN-p6EcGiZFqhMQw4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/Zml0aW1nLmluL3N0/dWRpb19wcm9maWxl/XzdGNjE2RDg3NkU0/NEU0LnBuZw" alt="" className="w-36 h-36"/>
          <img src="https://imgs.search.brave.com/lmF6KYApAIMjw6tCLsTXDJxJOfvgt-5BzA5mzEvQ7V8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9saDUu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL3Av/QUYxUWlwTllZTzZy/Qm5FVEhhcHJZblZ3/RVRFVkZoakRCV2ct/b3hfcmROT3I9dzQ4/MC1oMzAwLWstbg.jpeg" alt="" className="w-36 h-36"/>
          <img src="https://imgs.search.brave.com/4FKeEERirxo6o9b7IbdHWaVZitlD1pupx7Z3JpDkZcw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9odWxr/Zml0LmRpYWxuZGlh/bC5jb20vaW1hZ2Vz/L3NlcnZpY2UvMTY2/NzYzNTE4NDYzNjYx/N2YwZTRjNTkuanBn" alt="" className="w-36 h-36"/>
          <img src="https://imgs.search.brave.com/4FKeEERirxo6o9b7IbdHWaVZitlD1pupx7Z3JpDkZcw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9odWxr/Zml0LmRpYWxuZGlh/bC5jb20vaW1hZ2Vz/L3NlcnZpY2UvMTY2/NzYzNTE4NDYzNjYx/N2YwZTRjNTkuanBn" alt="" className="w-36 h-36"/>
         
          </div>


        </div>
        </div>
      </div>

      <div className="section-2  p-3  md:w-[50%]">

        <div className="Location">

        <div className=" flex  justify-between items-center font-semibold">
          <div>
            <h1>Location</h1>
          </div>
          <div>
            <FaEdit />
          </div>
        </div>

        <div className="description md:flex m-3 p-1 items-center">
          <div className=" md:w-[150px] w-[10px]">
            <h1>Address:</h1>
          </div>
          <div className="md:flex  md:gap-3 ">
            <textarea name="" value={"hulk fit kottakkal puthur malapppuram road  "} disabled  id="" cols={45} rows={3} className="border rounded-md  p-2 bg-gray-100 md:w-[400px] mt-3 "></textarea>
            
          </div>
        </div>

        {
          data2.map((it) => (
            <div key={it.id} className="Basic_info_detail mt-3  flex items-center m-3 p-1">
            
            <div className="label w-[150px]">
              <h1>
                {it.label}
              </h1>

            </div>
            <div className="input flex gap-3 items-center"> 
            :<input type="text" value={it.input} disabled className="border rounded-md p-2 bg-gray-100 w-[250px]"/>

            </div>
          </div>

          ))
        }
        </div>

        <div className="Membership mt-10">
        <div className=" flex  justify-between items-center font-semibold ">
          <div>
            <h1>Membership options</h1>
          </div>
          <div>
            <FaEdit />
          </div>
        </div>

       

        <div className="mt-10">
        <Table columns={columns} dataSource={tableData} pagination={false} />
         
        </div>

        </div>

        <div className="Time mt-10">
        <div className=" flex  justify-between items-center font-semibold">
          <div>
            <h1>Time</h1>
          </div>
          <div>
            <FaEdit />
          </div>
        </div>
        </div>
        </div>
    </div>

    <div className="section-3 w-full flex  mt-5 gap-5 p-5">
      <div className="Amenities w-1/2  ">
      <div className=" flex  justify-between items-center font-semibold ">
          <div>
            <h1> Amenities</h1>
          </div>
          <div>
            <FaEdit />
          </div>
        </div>
        <div className="p-3">
         <Table columns={columns2} dataSource={tableData2} pagination={false}  className=""/>

        </div>



      </div>

      <div className="equipments w-1/2 ">
      <div className=" flex  justify-between items-center font-semibold ">
          <div>
            <h1>Equipments</h1>
          </div>
          <div>
            <FaEdit />
          </div>
        </div>
      <div className="p-3">
        <div className="   items-center justify-between  mb-4 bg-gray-100 rounded-md shadow-md">
          <div className="flex items-center gap-3 p-3 ">
            <div className="image-section">
                  <img
                    // src={`${imaageURL}/${item.image}`}
                    src="https://imgs.search.brave.com/EqzCar3z-2kBvaUCGU9VXLq4NizLppHsJ73ID82oJi8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/Mjg1MjI3L3Bob3Rv/L2R1bWJiZWxsLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz02/ckNtSlBCSi1zbXZH/SnZqclNVSGRoYnQx/b1BidVV6b2tUaEJJ/X21ZNU5ZPQ"
                    alt="image"
                    className="md:h-20  md:w-24 w-12 h-10"
                  />
                </div>
                <div className="Name-section">Dumbel</div>
            </div>
           

          

        </div>


        </div>
      </div>

    </div>
    </div>
  );
};

export default FacilitiesDetails;
