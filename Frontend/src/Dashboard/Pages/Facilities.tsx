import { Switch, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import svg1 from '../../../public/svg1-onlypass.svg';
import svg2 from '../../../public/svg2-onlypass.svg';
import { ApiClientPrivate } from '../../utils/axios';
import PageHeader from '../components/PageHeader';

interface FacilityData {
  key: string;
  _id: string;
  facilityName: string;
  address: string;
}

const Facilities: React.FC = () => {
  const [facilityData, setFacilityData] = useState<FacilityData[]>([]);
  const [filteredData, setFilteredData] = useState<FacilityData[]>([]);
  // Data fetching.....!
  const fetchFacility = async () => {
    try {
      const res = await ApiClientPrivate.get('/facilities');
      setFacilityData(res.data);
      setFilteredData(res.data);
    } catch (error: any) {
      alert(error.message);
    }
  };
  useEffect(() => {
    fetchFacility();
  }, []);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const lowerCasedValue = value.toLowerCase();
    const filtered = facilityData.filter(
      (item) =>
        item.facilityName.toLowerCase().includes(lowerCasedValue) ||
        item.address.toLowerCase().includes(lowerCasedValue)
    );
    setFilteredData(filtered);
  };
  const tableData = filteredData?.map((It: any, i: number) => ({
    ...It,
    key: i + 1
  }));

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  const columns = [
    {
      title: 'Facilities',
      key: 'facilityName',
      render: (record: any) => (
        <Link to={`/FacilitiesDetails/${record._id}`}>{record.facilityName}</Link>
      )
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber'
    },
    {
      title: 'Onlypass',
      key: 'action',
      render: () => <Switch defaultChecked onChange={onChange} />
    },

    {
      title: 'Justgyms',
      key: 'action',
      render: () => <Switch defaultChecked onChange={onChange} className="" />
    }
  ];

  const details = [
    {
      icon: svg1,
      head: 'Total no.of Facilities',
      value: '1,280',
      percentage1: '16'
    },
    {
      icon: svg2,
      head: 'Live with Onlypass',
      value: '1,009',
      percentage1: '1'
    },
    {
      icon: svg2,
      head: 'Coverage (kerala)',
      value: '91/1039',
      percentage1: '39'
    }
  ];
  return (
    <div>
      <div className=" bg-[#F2F2F2] px-2 sm:px-10 md:px-16 pb-10 ">
        <PageHeader details={details} name={'Facility'} searchFunction={onChangeSearch} />
        {/* Table Section */}
        <div className="w-fit sm:w-auto bg-white p-10 mb-8 ">
          <div className="font-bold pb-5 text-lg">
            <h1>All Facilities </h1>
          </div>

          <Table
            columns={columns}
            dataSource={tableData}
            pagination={{ pageSize: 10 }}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Facilities;
