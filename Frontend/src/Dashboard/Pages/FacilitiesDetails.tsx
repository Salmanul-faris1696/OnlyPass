import { Modal, Table, TableProps } from "antd";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { ApiClientPrivate } from "../../utils/axios";
import { useAppDispatch } from "../Redux/hooks";
import UpdateAmenities from "../components/updateFacilities/UpdateAmenities";
import UpdateBasicInfo from "../components/updateFacilities/UpdateBasicInfo";
import UpdateEquipments from "../components/updateFacilities/UpdateEquipments";
import UpdateLocation from "../components/updateFacilities/UpdateLocation";
import { UpdateMembership } from "../components/updateFacilities/UpdateMembership";
import { dataImages, dataLogo, imaageURL } from "./../../utils/urls";
import { useQuery } from "react-query";



interface DataType {
  key: string;
  plans: string;
  price: number;
}
interface amenityData {
  amenities: string;
  paid: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Plans",
    dataIndex: "plans",
    key: "plans",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
];

const columns2: TableProps<amenityData>["columns"] = [
  {
    title: "Amenties",
    dataIndex: "amenity",
    key: "amenity",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Paid",
    dataIndex: "paid",
    key: "paid",
  },
];

const FacilitiesDetails = () => {
  const [facilityData, setfacilityData] = useState<any>([]);
  const fetchFacilityData =  () => {
   
    return ApiClientPrivate.get(`/facilities/${id}`);
      
   };

  const {isLoading,data:mainData, refetch } = useQuery("fetchData", fetchFacilityData)
  //  setfacilityData(mainData?.data) 
  console.log({mainData});
  
  // const dispatch = useAppDispatch()
  // fectch Facilities data
 

  ////////// Modal State /////////

  const [basicModalOpen, setBasicModalOpen] = useState(false)
  const [locationModalOPen, setLocationModalOpen] = useState(false)
  const [membershipModalOpen, setMembershipModalOpen] = useState(false)
  const [timeModalOpen, setTimeModalOpen] = useState(false)
  const [amenitiesModalOpen, setAmenitiesModalOpen] = useState(false)
  const [equipmentsModalOpen, setEquipmentsModalOpen] = useState(false)

  ////////////////////////////

  const { id } = useParams();
  console.log("facilityId ", id);
  // const fetchFacilityData = async () => {
  //   try {
  //     const res = await ApiClientPrivate.get(`/facilities/${id}`);
  //     setfacilityData(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  
  // useEffect(() => {
  //   fetchFacilityData();
  // }, []);
  // console.log("fac_data  ", facilityData);
  // useEffect(() => {
  //   if (mainData) {
  //     setfacilityData(mainData?.data);
  //   }
  // }, [mainData]);

  //basicForm data

  const data = !isLoading ? [
    {
      id: 1,
      label: "Facility Type ",
      input: mainData?.data?.facility_type,
    },
    {
      id: 2,
      label: " Facility Gender ",
      input: mainData?.data?.gender,
    },
  
    {
      id: 3,
      label: "Facility Name ",
      input: mainData?.data?.facilityName,
    },
    {
      id: 4,
      label: "Contact Person Name ",
      input: mainData?.data?.contactPerson,
    },
    {
      id: 5,
      label: "Email Address",
      input: mainData?.data?.emailAddress,
    },
    {
      id: 6,
      label: "Phone Number",
      input: mainData?.data?.phoneNumber,
    },
    {
      id: 7,
      label: "Website URL",
      input: mainData?.data?.websiteURL,
    },
  ] : [];

  const Facilityimages = mainData?.data?.images;

  //Location data
  const data2 = [
    {
      id: 1,
      label: "Pincode",
      input: mainData?.data?.pin_code,
    },
    {
      id: 2,
      label: "Country",
      input: "India",
    },
    {
      id: 3,
      label: "state",
      input: "Kerala",
    },
    {
      id: 4,
      label: "latitude_longitude",
      input: mainData?.data?.latitude_longitude,
    },
  ];

  //membership data
  const tableData: DataType[] = [
    {
      key: "1",
      plans: "adimission fees",
      price: mainData?.data?.admission_fee,
    },
    {
      key: "2",
      plans: " Daily pass",
      price: mainData?.data?.daily_pass,
    },
    {
      key: "3",
      plans: "Monthly pass",
      price: mainData?.data?.monthly_pass,
    },
    {
      key: "4",
      plans: "3 Month pass",
      price: mainData?.data?.threeMonth_pass,
    },
    {
      key: "5",
      plans: "6 Monthly pass",
      price: mainData?.data?.sixMonth_pass,
    },
    {
      key: "6",
      plans: " Annul pass",
      price: mainData?.data?.annual_pass,
    },
    
    
  ];
  const filteredTableData = tableData.filter((item) => item.price !== null &&item.price !==0 );

  //amenities data
  const amenityTableData = mainData?.data?.amenities?.map((amenity: any) => ({
    id: amenity._id,
    amenity: amenity.amenities_name,
    paid: amenity.isPaid === "paid" ? "Paid" : "Free",
  }));

  //equipments data

  const timeData = mainData?.data?.facilityTiming;

  console.log("Time :", timeData);

  return (
    <div className="w-fit md:w-full">
      <div className="text-center p-3  mt-5">
        <h1 className="font-semibold text-5xl ">{mainData?.data?.facilityName}</h1>
      </div>
      <div className=" section-1 md:flex m-3 sm:px-10 md:px-1">
        <div className=" p-3 w-fit  md:w-[50%]">
          <div className="basic_info">
            <div className=" flex justify-between items-center font-semibold">
              <div>
                <h1>Basic information</h1>
              </div>
              <div >
                <FaEdit  onClick={() => setBasicModalOpen(true)}/>
              </div>
            </div>

            {data.map((item, index) => (
              <div
                key={index}
                className="Basic_info_detail mt-3 grid gap-3  lg:flex items-center m-3 p-1"
              >
                <div className="label w-[150px]">
                  <h1>{item.label}:</h1>
                </div>
                <div className="input flex gap-3 items-center">
                  <input
                    type="text"
                    value={item.input}
                    disabled
                    
                    className="border rounded-md p-2 bg-gray-100 w-[250px]"
                  />
                </div>
              </div>
            ))}

            <div className="description  md:grid lg:flex m-3 p-1 items-center">
              <div className=" md:w-[150px] w-[10px]">
                <h1>Description:</h1>
              </div>
              <div className="">
                <textarea
                  name=""
                  disabled
                  value={mainData?.data?.description}
                  id=""
                  cols={40}
                  rows={5}
                  className="border rounded-md  p-2 bg-gray-100 md:w-[350px] mt-3 "
                ></textarea>
              </div>
            </div>

            <div className="Logo flex gap-3 md:flex md:gap-0 m-3 p-1 items-center">
              <div className="md:w-[150px] ">
                <h1>Logo: </h1>
              </div>
              <div className="flex   items-center gap-4">
                <img
                  src={`${dataLogo}/${mainData?.data?.logoUrl}`}
                  alt="gym logo"
                  className="w-32 h-32"
                />
              </div>
            </div>

            <div className="imageGallery md:flex gap-3 md:flex-wrap items-center">
              <div>Facility Images :</div>
              <div className="flex gap-3 flex-wrap mt-3">
                {Facilityimages?.map((url: any, index: any) => (
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
                <FaEdit  onClick={() => setLocationModalOpen(true)}/>
              </div>
            </div>

            <div className="description md:grid lg:flex m-3 p-1 items-center">
              <div className=" md:w-[150px] w-[10px]">
                <h1>Address:</h1>
              </div>
              <div className="md:flex  md:gap-3 ">
                <textarea
                  name=""
                  value={mainData?.data?.address}
                  disabled
                  id=""
                  cols={45}
                  rows={3}
                  className="border rounded-md  p-2 bg-gray-100 md:w-[400px] mt-3 "
                ></textarea>
              </div>
            </div>

            {data2.map((it) => (
              <div
                key={it.id}
                className="location  mt-3 grid gap-3 lg:flex items-center m-3 p-1"
              >
                <div className="label w-[150px]">
                  <h1>{it.label}:</h1>
                </div>
                <div className="input flex gap-3 items-center">
                  <input
                    type="text"
                    value={it.input}
                    disabled
                    className="border rounded-md p-2 bg-gray-100 w-[250px]"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="Membership mt-10">
            <div className=" flex  justify-between items-center font-semibold ">
              <div>
                <h1>Membership options</h1>
              </div>
              <div>
                <FaEdit onClick={() => setMembershipModalOpen(true)} />
              </div>
            </div>
            <div className="mt-10">
              <Table
                columns={columns}
                dataSource={filteredTableData}
                pagination={false}
              />
            </div>
            <div className="other">
              {mainData?.data?.other ? (
                <div className=" flex items-center m-3 p-1">
                  <div className="label w-[150px]">
                    <h1>Others</h1>
                  </div>
                  <div>
                    <input
                      type="text"
                      disabled
                      value={mainData?.data.other}
                      className="border rounded-md p-2 bg-gray-100 w-[250px]"
                    />
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>

            <div className="tier">
              {mainData?.data?.tier ? (
                <div className=" flex items-center m-3 p-1">
                  <div className="label w-[150px]">
                    <h1>Tier</h1>
                  </div>
                  <div>
                    <input
                      type="text"
                      disabled
                      value={mainData?.data.tier}
                      className="border rounded-md p-2 bg-gray-100 w-[250px]"
                    />
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>

          <div className="Time mt-10">
            <div className=" flex  justify-between items-center font-semibold">
              <div className=" mb-2">
                <h1 className="text-lg pb-2 ">Time</h1>
              </div>
              <div>
                <FaEdit onClick={() => setTimeModalOpen(true)} />
              </div>
            </div>
           

            <div className="timetable ">

              <div className="flex justify-between font-bold mt-10 border-b" >

                  <div className="Day w-[200px]  ">
                    <h1 >Day</h1>
                  </div>

                  <div className="Morning Time   w-[200px] lg:text-center xl:text-start  ">
                    <h1 >Morning </h1>
                  </div>

                  <div className="Evening Time   w-[200px] lg:text-center xl:text-start ">
                    <h1 >Evening</h1>
                  </div>


              </div>

             
                {
                  timeData?.map((time :any) => (
                    <div className="Timedata flex justify-between border-b  ">
                      <div className="md:w-[100px] w-[200px] xl:w-[200px]  py-3 text-start">
                      <h2 className="font-semibold">{time.day}</h2>
                      </div>

                      <div className=" py-3 ">
                        
                          {time.morning.holiday === true &&
                            time.evening.holiday === true ? (
                              <p className="font-medium text-base md:w-[100px] w-[200px] xl:w-[200px]   ">Holiday</p>
                            ) : time.morning.holiday === true ? (
                              <p className="font-medium text-base md:w-[100px] w-[200px] xl:w-[200px]  ">Off</p>
                            ):(
                              <p className="font-medium text-base md:w-[100px] w-[200px] xl:w-[200px] "> {time.morning.start} to {time.morning.end}</p>
                            )
                            }


                      </div>
                      
                      <div className=" py-3  ">
                        
                          {time.morning.holiday === true &&
                            time.evening.holiday === true ? (
                                <p className="font-medium text-base md:w-[100px] w-[200px] xl:w-[200px] ">Holiday</p>
                            ) : time.evening.holiday === true ? (
                              <p className="font-medium text-base md:w-[100px] w-[200px] xl:w-[200px]  ">Off</p>
                            ):(
                              <p className="font-medium text-base md:w-[100px] w-[200px] xl:w-[200px]  "> {time.evening.start} to {time.evening.end}</p>
                            )
                            }


                      </div>

                    </div>

                  ))
                }
            </div>
          </div>
        </div>
      </div>

      <div className="section-3 w-full flex   px-10  mt-5 gap-5 ">
        <div className="Amenities w-[50%] ">
          <div className=" flex  justify-between items-center font-semibold ">
            <div>
              <h1> Amenities</h1>
            </div>
            <div>
              <FaEdit onClick={() => setAmenitiesModalOpen(true)}/>
            </div>
          </div>
          <div className="p-3">
            <Table
              columns={columns2}
              dataSource={amenityTableData}
              pagination={false}
              
            />
          </div>
        </div>

        <div className="equipments w-[50%] ">
          <div className=" flex  justify-between items-center font-semibold ">
            <div>
              <h1>Equipments</h1>
            </div>
            <div>
              <FaEdit onClick={() => setEquipmentsModalOpen(true)} />
            </div>
          </div>
          <div className="p-3 ">
            <div className="   items-center justify-between  mb-4 rounded-md shadow-md p-3">
              {mainData?.data?.equipments?.map((it: any, ind: number) => (
                <div
                  key={ind}
                  className="flex items-center gap-3 p-5 mb-2 bg-gray-100 rounded-md shadow-sm"
                >
                  <div className="image-section">
                    <img
                      src={`${imaageURL}/${it.equipment_img}`}
                      alt="image"
                      className="md:h-8  md:w-10 w-8 h-4"
                    />
                  </div>
                  <div className="Name-section">{it.equipment_name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      <Modal title=""
        open={basicModalOpen}
        onCancel={() => setBasicModalOpen(false)}
        footer={false}
        >
          <UpdateBasicInfo facilityData ={mainData?.data} refetch={()=>refetch()}  cancel={() => setBasicModalOpen(false)}/>
        </Modal>

        <Modal title=""
          open={locationModalOPen} 
            onCancel={() => setLocationModalOpen(false)}
            footer={false}
        >
            <UpdateLocation facilityData ={mainData?.data} refetch={()=>refetch()}  cancel={() => setLocationModalOpen(false)}/>

        </Modal>

        <Modal title=""
          open={membershipModalOpen}
          onCancel={() => setMembershipModalOpen(false)}
          footer={false}
        >
          <UpdateMembership facilityData ={mainData?.data} refetch={()=>refetch()}  cancel={() => setMembershipModalOpen(false)}/>
         </Modal>

         <Modal title=""
            open={amenitiesModalOpen}
            onCancel={() => setAmenitiesModalOpen(false)}
            footer={false}
            width={600}
          >
            <UpdateAmenities facilityData ={mainData?.data} refetch={()=>refetch()}  cancel={() => setAmenitiesModalOpen(false)}/>
          </Modal>

          <Modal title=""
            open={equipmentsModalOpen}
            onCancel={() => setEquipmentsModalOpen(false)}
            footer={false}
            width={600}
           >
            <UpdateEquipments facilityData ={mainData?.data} refetch={()=>refetch()} cancel={() => setEquipmentsModalOpen(false)}/>
          </Modal>

        
    </div>
  );
};

export default FacilitiesDetails;