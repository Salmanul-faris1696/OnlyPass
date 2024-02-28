import React from 'react';
import svg2 from '../../../public/svg2-onlypass.svg';
import svg3 from '../../../public/svg3-onlypass.svg';
import svg4 from '../../../public/svg4-onlypass.svg';
import PageHeader from '../components/PageHeader';

const MembershipPlans: React.FC = () => {
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
  return (
    <div>
      <div className=" bg-[#F2F2F2] px-2 sm:px-10 md:px-16 pb-10 ">
        <PageHeader details={details} name={'Membership'} />
        {/* Table Section */}
      </div>
    </div>
  );
};
export default MembershipPlans;
