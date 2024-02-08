import { FaEdit } from "react-icons/fa";
import { Table } from 'antd';
import type { TableProps } from 'antd';
import { useEffect, useState } from "react";
import { ApiClientPrivate } from "../../utils/axios";
import { useParams } from "react-router-dom";
import { dataImages, dataLogo, imaageURL } from './../../utils/urls';







interface DataType {
  key: string;
  plans: string;
  price: number;
  
  
}
interface amenityData{
  amenities:string
  paid : string
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

const columns2: TableProps<amenityData>['columns'] = [
  {
    title: 'Amenties',
    dataIndex: 'amenity',
    key: 'amenity',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Paid',
    dataIndex: 'paid',
    key: 'paid',
  },

]








const FacilitiesDetails = () => {

  // fectch Facilities data
  const [facilityData , setfacilityData]  = useState<any>([])
  
  const {id} =useParams()
  console.log("facilityId ", id);
  const fetchFacilityData = async () => {
    try { 
      const res = await ApiClientPrivate.get(`/facilities/${id}`)
      setfacilityData(res.data); 
    } catch (error) { 
    }
  }
  useEffect(() => {
    fetchFacilityData();
  }, []);
  console.log("fac_data  " , facilityData);
  
//basicForm data
  const data = [
    {
      id: 1,
      label: "Facility Type ",
      input: facilityData.facility_type,
    },
    {
      id: 2,
      label: " Facility Gender ",
      input: facilityData.gender,
    },
    {
      id: 3,
      label: "Facility Tier ",
      input: facilityData.tier,
    },
    {
      id: 4,
      label: "Facility Name ",
      input: facilityData.facilityName,
    },
    {
      id: 5,
      label: "Contact Person Name ",
      input: facilityData.contactPerson,
    },
    {
      id:6 ,
      label: "Email Address",
      input: facilityData.emailAddress,
    },
    {
      id:7 ,
      label: "Phone Number",
      input: facilityData.phoneNumber,
    },
    {
      id: 8,
      label: "Website URL",
      input:facilityData.websiteURL,
    },
    
  ];

  const Facilityimages = facilityData.images;


//Location data
const data2 = [
  {
    id:1,
    label:'Pincode',
    input:facilityData.pin_code
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
    input:facilityData.latitude_longitude

  }
]

//membership data
const tableData: DataType[] = [
  {
    key: '1',
    plans: 'adimission fees',
    price: facilityData.admission_fee,
    
  },
  {
    key: '2',
    plans: 'Monthly pass',
    price: facilityData.monthly_pass,
    
  },
  {
    key: '3',
    plans: '3 Month pass',
    price: facilityData.threeMonth_pass,
    
  },
  {
    key: '4',
    plans: '6 Monthly pass',
    price: facilityData.sixMonth_pass,
    
  },
  {
    key: '5',
    plans: ' Annul pass',
    price: facilityData.annual_pass,
    
  },
]
const filteredTableData = tableData.filter(item => item.price !== null );

//amenities data
const amenityTableData =facilityData.amenities?.map(((amenity:any, index:any) => ({
  id: amenity._id,
  amenity: amenity.amenities_name,
  paid: amenity.isPaid === 'paid' ? 'Paid' : 'Free',
})))

//equipments data







  


  return (
    <div className="w-fit md:w-full">
       <div className="text-center p-3  mt-5">
      <h1 className="font-semibold text-5xl ">{facilityData.facilityName}</h1>
    </div>
    <div className=" section-1 md:flex m-3 sm:px-10"> 
   
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

        {data.map((item,index) => (
          <div key={index} className="Basic_info_detail mt-3 grid gap-3  lg:flex items-center m-3 p-1">
            
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

        <div className="description  md:grid lg:flex m-3 p-1 items-center">
          <div className=" md:w-[150px] w-[10px]">
            <h1>Description:</h1>
          </div>
          <div className="">
            <textarea name="" disabled value={facilityData.description}  id="" cols={45} rows={5} className="border rounded-md  p-2 bg-gray-100 md:w-[350px] mt-3 "></textarea>
            
          </div>
        </div>

        <div className="Logo flex gap-3 md:flex md:gap-0 m-3 p-1 items-center">
          <div className="md:w-[150px] ">
            <h1>Logo: </h1>
          </div>
          <div className="flex   items-center gap-4">
          <img src={`${dataLogo}/${facilityData.logoUrl}`} alt="gym logo" className="w-32 h-32" />
          </div>


        </div>

        <div className="imageGallery md:flex gap-3 md:flex-wrap items-center">
          <div>
            Facility Images :
          </div>
          <div className="flex gap-3 flex-wrap mt-3">
          {Facilityimages?.map((url:any, index:any) => (
             <img
                key={index} // Add a unique key for each image
                src={`${dataImages}/${url}`}
                alt={`Facility Image ${index + 1}`}
                className="w-36 h-36"
                    />
          ))}
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

        <div className="description md:grid lg:flex m-3 p-1 items-center">
          <div className=" md:w-[150px] w-[10px]">
            <h1>Address:</h1>
          </div>
          <div className="md:flex  md:gap-3 ">
            <textarea name="" value={facilityData.address} disabled  id="" cols={45} rows={3} className="border rounded-md  p-2 bg-gray-100 md:w-[400px] mt-3 "></textarea>
            
          </div>
        </div>

        {
          data2.map((it) => (
            <div key={it.id} className="location  mt-3 grid gap-3 lg:flex items-center m-3 p-1">
            
            <div className="label w-[150px]">
              <h1>
                {it.label}:
              </h1>

            </div>
            <div className="input flex gap-3 items-center"> 
            <input type="text" value={it.input} disabled className="border rounded-md p-2 bg-gray-100 w-[250px]"/>

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
        <Table columns={columns} dataSource={filteredTableData} pagination={false} />

        </div>
        <div className="other">
        {
          facilityData.other ? 
        <div className=" flex items-center m-3 p-1" >
          <div className="label w-[150px]">
            <h1>Others</h1>
          </div>
          <div>
          <input type="text" disabled value={facilityData.other} className="border rounded-md p-2 bg-gray-100 w-[250px]" />
          </div>
        </div>
        :
        <div></div>
        }

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

    <div className="section-3 w-full flex px-10 mt-5 gap-5 ">
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
         <Table columns={columns2} dataSource={amenityTableData} pagination={false}  className=""/>

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
        <div className="   items-center justify-between  mb-4 rounded-md shadow-md p-3">

          {

            facilityData.equipments?.map((it:any,ind:number) => (

              <div  key={ind} className="flex items-center gap-3 p-5 mb-2 bg-gray-100 rounded-md shadow-sm">
                <div className="image-section">
                      <img
                        src={`${imaageURL}/${it.equipment_img}`}
                        alt="image"
                        className="md:h-8  md:w-10 w-8 h-4"
                      />
                    </div>
                    <div className="Name-section">{it.equipment_name}</div>
                </div>
            )
            )
          }
        </div>
        </div>
      </div>

    </div>
    </div>
  );
};

export default FacilitiesDetails;
