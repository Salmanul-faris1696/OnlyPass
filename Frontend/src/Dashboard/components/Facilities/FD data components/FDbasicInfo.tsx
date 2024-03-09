import { Modal } from 'antd';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { dataImages, dataLogo } from '../../../../utils/urls';
import UpdateBasicInfo from '../updateFacilities/UpdateBasicInfo';

const FDbasicInfo = ({ data, mainData }: any) => {
  const Facilityimages = mainData?.data.images;
  const [basicModalOpen, setBasicModalOpen] = useState(false);

  return (
    <div>
      <div className="md:flex sm:px-10 md:px-1">
        <div className=" p-3 w-full ">
          <div className="basic_info ">
            <div className=" flex justify-between items-center font-semibold ">
              <div>
                <h1>Basic information</h1>
              </div>
              <div
                onClick={() => setBasicModalOpen(true)}
                className="flex items-center gap-1 bg-[#F2F2F2] w-[84px] h-[24px] px-2 justify-center"
              >
                <FaEdit />
                <p>Edit</p>
              </div>
            </div>

            {data.map((item: any, index: any) => (
              <div
                key={index}
                className="Basic_info_detail mt-3 grid gap-5  lg:flex items-center m-3 p-1"
              >
                <div className="label w-[150px]">
                  <h1>{item.label}</h1>
                </div>
                <div className="input bg-white flex gap-3 items-center font-medium">
                  <p>{item.input}</p>
                </div>
              </div>
            ))}

            <div className="description   gap-9 md:grid lg:flex m-3 p-1 items-center">
              <div className=" md:w-[150px] w-[10px]">
                <h1>Description</h1>
              </div>
              <div className="font-medium">
                <p>{mainData?.data.description}</p>
              </div>
            </div>

            <div className="Logo flex gap-5 md:flex md:gap-5 m-3 p-1 items-center">
              <div className="md:w-[150px] ">
                <h1>Logo </h1>
              </div>
              <div className="flex   items-center gap-4">
                <img
                  src={`${dataLogo}/${mainData?.data.logoUrl}`}
                  alt="gym logo"
                  className="w-[80px] h-[80px]"
                />
              </div>
            </div>

            <div className="imageGallery md:flex gap-16 md:flex-wrap items-center">
              <div>Facility Images </div>
              <div className="flex gap-2 flex-wrap mt-3">
                {Facilityimages?.map((url: any, index: any) => (
                  <img
                    key={index} // Add a unique key for each image
                    src={`${dataImages}/${url}`}
                    alt={`Facility Image ${index + 1}`}
                    className="w-[80px] h-[80px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title=""
        open={basicModalOpen}
        onCancel={() => setBasicModalOpen(false)}
        footer={false}
      >
        <UpdateBasicInfo facilityData={mainData?.data} cancel={() => setBasicModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default FDbasicInfo;
