import React, { useState } from 'react';
import { Table, Input } from 'antd';

interface TimeData {
  key: number;
  day: string;
  morningTime: string;
  eveningTime: string;
}

const TimeTable: React.FC = () => {
  const [data, setData] = useState<TimeData[]>([]);

  const columns = [
    {
      title: 'Day',
      dataIndex: 'day',
      key: 'day',
    },
    {
      title: 'Morning Time',
      dataIndex: 'morningTime',
      key: 'morningTime',
      render: ( record: TimeData) => (
        <Input
          value={record.morningTime}
          onChange={(e) => handleTimeChange('morningTime', record.key, e.target.value)}
        />
      ),
    },
    {
      title: 'Evening Time',
      dataIndex: 'eveningTime',
      key: 'eveningTime',
      render: ( record: TimeData) => (
        <Input
          value={record.eveningTime}
          onChange={(e) => handleTimeChange('eveningTime', record.key, e.target.value)}
        />
      ),
    },
  ];

  const handleTimeChange = (type: 'morningTime' | 'eveningTime', key: number, value: string) => {
    // Validate time format
    const isValidTime = /^([01]\d|2[0-3]):([0-5]\d)$/.test(value);

    if (isValidTime || value === '') {
      setData((prevData) =>
        prevData.map((item) =>
          item.key === key ? { ...item, [type]: value } : item
        )
      );
    }
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const initialData: TimeData[] = days.map((day, index) => ({
    key: index + 1,
    day,
    morningTime: '',
    eveningTime: '',
  }));

  return (
    <div>
      <Table dataSource={data.length === 0 ? initialData : data} columns={columns} />
    </div>
  );
};

export default TimeTable;
