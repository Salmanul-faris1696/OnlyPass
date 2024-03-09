import svg2 from '../../../public/svg2-onlypass.svg';
import svg3 from '../../../public/svg3-onlypass.svg';
import svg4 from '../../../public/svg4-onlypass.svg';
import PageHeader from '../components/common_components/PageHeader';
import FDbasicInfo from '../components/Facilities/FD data components/FDbasicInfo';
import FDlocationInfo from '../components/Facilities/FD data components/FDlocationInfo';
import FDmembershipInfo from '../components/Facilities/FD data components/FDmembershipInfo';
import FDtimeInfo from '../components/Facilities/FD data components/FDtimeInfo';
import FDamenitiesInfo from '../components/Facilities/FD data components/FDamenitiesInfo';
import FDequipmentsInfo from '../components/Facilities/FD data components/FDequipmentsInfo';
import { ApiClientPrivate } from '../../utils/axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { useEffect } from 'react';
import {
  setAmenitiesUpdateBtn,
  setBasicUpdateBtn,
  setEquipmentUpdateBtn,
  setLocationUpdateBtn,
  setMembershipUpdateBtn,
  setTimeUpdatebtn
} from '../Redux/Features/updateFacilityBtn';

const FacilitiesDetails: React.FC = () => {
  const details = [
    {
      icon: svg4,
      head: 'Total Customer',
      value: '5,423',
      percentage1: '16'
    },
    {
      icon: svg3,
      head: 'Membership Sold',
      value: '1893',
      percentage1: '1'
    },
    {
      icon: svg2,
      head: 'Active Now',
      value: '189',
      percentage1: '39'
    }
  ];

  const dispatch = useAppDispatch();

  const {
    basicUpdateBtn,
    locationUpdateBtn,
    membershipUpdatebtn,
    timeUpdatebtn,
    amenitiesUpdateBtn,
    EquipmentUpdateBtn
  } = useAppSelector((state) => state.updateFacilities);

  console.log('redux>>>>>>>>:', basicUpdateBtn);

  const { id } = useParams();
  const fetchFacilityData = () => {
    return ApiClientPrivate.get(`/facilities/${id}`);
  };

  const { isLoading, data: mainData, refetch } = useQuery('fetchData', fetchFacilityData);

  // console.log(">>>log1" ,mainData);

  useEffect(() => {
    const fetchData = async () => {
      if (basicUpdateBtn) {
        await refetch();
        dispatch(setBasicUpdateBtn(false));
      }

      if (locationUpdateBtn) {
        await refetch();
        dispatch(setLocationUpdateBtn(false));
      }

      if (membershipUpdatebtn) {
        await refetch();
        dispatch(setMembershipUpdateBtn(false));
      }

      if (timeUpdatebtn) {
        await refetch();
        dispatch(setTimeUpdatebtn(false));
      }

      if (amenitiesUpdateBtn) {
        await refetch();
        dispatch(setAmenitiesUpdateBtn(false));
      }

      if (EquipmentUpdateBtn) {
        await refetch();
        dispatch(setEquipmentUpdateBtn(false));
      }
    };

    fetchData();
  }, [
    basicUpdateBtn,
    locationUpdateBtn,
    membershipUpdatebtn,
    timeUpdatebtn,
    amenitiesUpdateBtn,
    EquipmentUpdateBtn,
    refetch,
    dispatch
  ]);

  const data = !isLoading
    ? [
        {
          id: 1,
          label: 'Facility Type ',
          input: mainData?.data?.facility_type
        },
        {
          id: 2,
          label: ' Facility Gender ',
          input: mainData?.data?.gender
        },

        {
          id: 3,
          label: 'Facility Name ',
          input: mainData?.data?.facilityName
        },
        {
          id: 4,
          label: 'Contact Person',
          input: mainData?.data?.contactPerson
        },
        {
          id: 5,
          label: 'Email Address',
          input: mainData?.data?.emailAddress
        },
        {
          id: 6,
          label: 'Phone Number',
          input: mainData?.data?.phoneNumber
        },
        {
          id: 7,
          label: 'Website URL',
          input: mainData?.data?.websiteURL
        }
      ]
    : [];

  const Links = [
    {
      id: 1,
      path: <a href="#basicInfo">Basic Information</a>
    },
    {
      id: 2,
      path: <a href="#location">Location Information</a>
    },
    {
      id: 3,
      path: <a href="#membership">Membership Plans</a>
    },
    {
      id: 4,
      path: <a href="#time">Open Hours</a>
    },
    {
      id: 5,
      path: <a href="#amenities">Amenities</a>
    },
    {
      id: 6,
      path: <a href="#equipment">equipments</a>
    },
    {
      id: 7,
      path: <a href="#members">Members</a>
    },
    {
      id: 8,
      path: <a href="#paymentLog">Payment Log</a>
    },
    {
      id: 9,
      path: <a href="#attendanceLog">Attendance Log</a>
    }
  ];

  // Location data

  const data2 = [
    {
      id: 1,
      label: 'Pincode',
      input: mainData?.data?.pin_code
    },
    {
      id: 2,
      label: 'Country',
      input: 'India'
    },
    {
      id: 3,
      label: 'state',
      input: 'Kerala'
    },
    {
      id: 4,
      label: 'latitude_longitude',
      input: mainData?.data?.latitude_longitude
    }
  ];
  return (
    <div className="">
      <div className=" bg-[#F2F2F2] px-2 sm:px-10 md:px-16 pb-10 ">
        <PageHeader details={details} name={mainData?.data.facilityName} searchHide={true} />
        {/* Table Section */}

        <div className="bg-white px-2 sm:px-10 md:px-16 pb-10 ">
          <div className="FdNavbar">
            <div className="flex  justify-between gap-3 items-center py-7 md:py-10">
              <div className="text-xl md:text-3xl font-semibold ">
                <h1>Facility Details</h1>
              </div>

              <div className="flex items-center gap-5 ">
                <div className="flex items-center gap-1">
                  <p>Tier : </p>
                  <p className="font-semibold">Gold</p>
                </div>

                <div className="flex items-center gap-1">
                  <p>Registered on : </p>
                  <p className="font-semibold">14/02/2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="components_div w-full h-screen overflow-y-scroll ">
              <div id="basicInfo" className="mb-5">
                <FDbasicInfo
                  data={data}
                  mainData={mainData}
                  // refetch={refetch()}
                />
              </div>

              <div id="location" className="mb-10">
                <FDlocationInfo
                  data={data2}
                  mainData={mainData}
                  // refetch={refetch()}
                />
              </div>

              <div id="membership" className="mb-10">
                <FDmembershipInfo
                  mainData={mainData}
                  // refetch={refetch()}
                />
              </div>

              <div id="time" className="mb-10">
                <FDtimeInfo
                  mainData={mainData}
                  //  refetch={refetch()}
                />
              </div>

              <div id="amenities " className="mb-10">
                <FDamenitiesInfo
                  mainData={mainData}
                  // refetch={refetch()}
                />
              </div>

              <div id="equipment" className="mb-10">
                <FDequipmentsInfo
                  mainData={mainData}
                  //  refetch={refetch()}
                />
              </div>
              <div id="members" className="mb-10">
                members sections !!!!!!!
              </div>
              <div id="paymentLog" className="mb-10">
                Payment log sections !!!!!!!!
              </div>
              <div id="attendanceLog" className="mb-10">
                Attendance section !!!!!!
              </div>
            </div>

            <div className="Links w-fit">
              {Links.map((it) => (
                <div className="pl-5 w-[226px] h-[36px] flex items-center justify-start bg-[#F2F2F2] mb-3">
                  {it.path}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FacilitiesDetails;
