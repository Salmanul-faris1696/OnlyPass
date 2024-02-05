import { Button, Checkbox, Form, Input, InputNumber, Select } from "antd";
import { useDispatch } from "react-redux";
import { nextButton, prevButton } from "../Redux/Features/ButtonSlice";
import { useState } from "react";
import { addData } from "../Redux/Features/FacilityFeature/FacilititySlice";
import { useAppSelector } from "../Redux/hooks";

// const { TextArea } = Input;

const Membership = () => {
  const data = [
    {
      id: 1,
      label: "Admission fee (one-time)",
      name: "admission_fee",
    },
    {
      id: 2,
      label: "Daily Pass",
      name: "daily_pass",
    },
    {
      id: 3,
      label: "Monthly Pass",
      name: "monthly_pass",
    },
    {
      id: 4,
      label: "3 Month Pass",
      name: "threeMonth_pass",
    },
    {
      id: 5,
      label: "6 Month Pass",
      name: "sixMonth_pass",
    },
    {
      id: 6,
      label: "Annual Pass",
      name: "annual_pass",
    },
  ];

  const [checkedState, setCheckedState] = useState({
    admissionFee: false,
    dailyPass: false,
    monthlyPass: false,
    threeMonthPass: false,
    sixMonthPass: false,
    annualPass: false,
  });

const reduxState = useAppSelector((state) => state.facility);
const [form] = Form.useForm();

form.setFieldsValue({
  admission_fee: reduxState.admission_fee,
  daily_pass: reduxState.daily_pass,
  monthly_pass: reduxState.monthly_pass,
  threeMonth_pass: reduxState.threeMonth_pass,
  sixMonth_pass: reduxState.sixMonth_pass,
  annual_pass: reduxState.annual_pass,
  tier: reduxState.tier? reduxState.tier : "Select Tier",
});

const dispatch = useDispatch();
const handleNext = () => {
  dispatch(nextButton());
  };
  const handlePrevious = () => {
    dispatch(prevButton());
  };

const handleCheckBox = (e:any) => {
  const { name, checked } = e.target;
  setCheckedState((prevState) => ({
    ...prevState,
    [name]: checked,}));
  };

const handlePriceChange = (name: string, value: number) => {
  dispatch(addData({ [name]: value }));

  
};
const handleChange = (value: { value: string; label: React.ReactNode }) => {
  console.log({ value });
  dispatch(addData({ ["tier"]: value.value }));
};
    
  return (
    <div className="max-w-[500px] mx-auto mt-8">
      <Form form={form} >
        <div className="font-semibold text-center text-2xl mb-10">
          <h1>Membership options</h1>
        </div>
        {data.map((item) => (
          <div key={item.id} className="flex items-center gap-5 mb-3 ">
            <Form.Item
              name={item.name}
              valuePropName="checked"
              // wrapperCol={{ span: 30 }}
            >
              <div className=" w-[150px] md:w-[200px]  flex justify-between gap-3">
                {item.label}

                <Checkbox name={item.name + "Check"} onChange={handleCheckBox}>
                  {" "}
                </Checkbox>
              </div>
            </Form.Item>

            <div className="flex gap-1 w-40">
              <Form.Item
                label="Price"
                name={item.name}
                hidden={
                  !checkedState[
                    (item.name + "Check") as keyof typeof checkedState
                  ]
                }
                // wrapperCol={{ span: 6 }}
              >
                <InputNumber
                  className="w-20 price"
                  name={item.name}
                  type="number"
                  onChange={(value) =>
                    handlePriceChange(item.name, value as number)
                  }
                />
              </Form.Item>
            </div>
          </div>
        ))}
          <Form.Item
            label="Facility Tier"
            name="tier"
            className="text-start"
            rules={[{ required: true, message: "Please Select your Tier!" }]}
            labelCol={{ span: 7 }}
          >
            <Select
              defaultValue={{ value: "", label: "Select tier" }}
              style={{ width: 205 }}
              onChange={handleChange}
              options={[
                {
                  value: "Platinum",
                  label: "Platinum",
                  name: "platinum",
                },
                {
                  value: "Gold",
                  label: "Gold",
                  name: "gold",
                },
                {
                  value: "Silver",
                  label: "Silver",
                  name: "silver",
                },
              ]}
            />
          </Form.Item>
        <Form.Item
          label="Other Options"
          labelCol={{ span: 7 }}

        >
          <Input name="other" className="w-52" />
        </Form.Item>
      </Form>

      <div className="flex gap-3 justify-center">
        <Button type="primary" className="bg-blue-600 " onClick={handleNext}>
          Next
        </Button>
        <Button className="bg-white " onClick={handlePrevious}>
          Previous
        </Button>
      </div>
    </div>
  );
};

export default Membership;
