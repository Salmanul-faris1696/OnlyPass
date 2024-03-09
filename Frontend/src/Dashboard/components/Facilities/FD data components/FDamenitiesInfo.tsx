import { Modal, Table, TableProps } from 'antd';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { iconURL } from '../../../../utils/urls';
import UpdateAmenities from '../updateFacilities/UpdateAmenities';

interface amenityData {
  amenities: string;
  paid: string;
}

const columns2: TableProps<amenityData>['columns'] = [
  {
    title: 'Amenties',
    // dataIndex: "amenity",
    key: 'amenity',
    render: (record: any) => (
      <div className="flex items-center gap-3">
        <img src={`${iconURL}/${record.icon}`} alt={record} style={{ width: '25px' }} />
        <a>{record.amenity}</a>
      </div>
    )
  },
  {
    title: 'Paid',
    dataIndex: 'paid',
    key: 'paid'
  }
];

const FDamenitiesInfo = ({ mainData }: any) => {
  //refetch removed
  const [amenitiesModalOpen, setAmenitiesModalOpen] = useState(false);

  const amenityTableData = mainData?.data?.amenities?.map((amenity: any) => ({
    id: amenity._id,
    icon: amenity.iconUrl,
    amenity: amenity.amenities_name,
    paid: amenity.isPaid === 'paid' ? 'Paid' : 'Free'
  }));
  return (
    <div>
      <div className="Amenities p-3 w-full ">
        <div className=" flex  justify-between items-center font-semibold ">
          <div>
            <h1> Amenities</h1>
          </div>
          <div
            onClick={() => setAmenitiesModalOpen(true)}
            className="flex items-center gap-1 bg-[#F2F2F2] w-[84px] h-[24px] px-2 justify-center"
          >
            <FaEdit />
            <p>Edit</p>
          </div>
        </div>
        <div className=" mt-5">
          <Table columns={columns2} dataSource={amenityTableData} pagination={false} />
        </div>
      </div>

      <Modal
        title=""
        open={amenitiesModalOpen}
        onCancel={() => setAmenitiesModalOpen(false)}
        footer={false}
        width={600}
      >
        <UpdateAmenities
          facilityData={mainData?.data}
          cancel={() => setAmenitiesModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default FDamenitiesInfo;
