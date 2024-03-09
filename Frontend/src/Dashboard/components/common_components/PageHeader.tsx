import { Avatar, DatePicker, DatePickerProps, Space } from 'antd';
import { FaArrowUp } from 'react-icons/fa';
import { RiSearchLine } from 'react-icons/ri';
import WindowLength from '../../../Hook/WindowLengthHook';

const PageHeader = (props: any) => {
  const onChangeDatePicker: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  const screen = WindowLength();

  return (
    <div>
      <div className="flex justify-between gap-3 items-center py-7 md:py-10">
        <div className="text-xl md:text-3xl font-semibold ">
          <h1>{props.name}</h1>
        </div>

        <div className={` relative ${props.searchHide === true ? 'hidden' : 'block'}`}>
          <input
            type="text"
            placeholder="Search"
            onChange={props.searchFunction}
            className="lg:w-[400px] md:w-[300px] w-[200px] h-[30px] md:h-[40px] text-sm pl-8 outline-none"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
            <RiSearchLine className="text-gray-500" size={18} />
          </div>
        </div>

        <div className="flex items-center md:gap-2 ">
          <div>
            <h1 className=" text-[#7e7e7e] text-xs md:text-sm ">Showing result of</h1>
          </div>

          <div>
            <Space direction="vertical">
              <DatePicker
                onChange={onChangeDatePicker}
                picker="month"
                format="MMMM YYYY" // Set the format to display the full month name and year
                className="w-[140px] md:w-full h-[40px]"
              />
            </Space>
          </div>
        </div>
      </div>

      {/* Facility Result Show */}

      <div className="flex justify-between bg-white mb-3 md:mb-7 lg:mb-16 py-3 md:py-5 lg:py-10 p-2">
        {props.details.map((it: any) => (
          <div className="flex items-center p-2 gap-1 border-r w-1/3 justify-center last:border-none ">
            <div>
              {screen <= 854 ? (
                <Avatar size={60} src={it.icon} />
              ) : screen <= 1006 && screen >= 854 ? (
                <Avatar size={70} src={it.icon} />
              ) : (
                <Avatar size={90} src={it.icon} />
              )}
            </div>
            <div>
              <p className="text-xs md:text-sm lg:text-base text-[#ACACAC] text-nowrap">
                {it.head}
              </p>
              <h3 className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl">{it.value}</h3>
              <div className="flex gap-1">
                <p className="text-[#00ac4f] flex items-center text-xs lg:text-sm font-semibold ">
                  <FaArrowUp />
                  {it.percentage}%
                </p>
                <p className="text-xs lg:text-sm font-medium">this month</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageHeader;
