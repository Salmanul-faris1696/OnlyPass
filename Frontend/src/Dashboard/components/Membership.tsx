import { Button, Checkbox, Form, Input, Select } from "antd";
import { useDispatch } from "react-redux";
import { nextButton, prevButton } from "../Redux/Features/ButtonSlice";
import {  useState } from "react";
import { addData, setTier } from "../Redux/Features/FacilityFeature/FacilititySlice";
import { useAppSelector } from "../Redux/hooks";

// const { TextArea } = Input;
interface CheckedState {
  admission_fee: boolean;
  daily_pass: boolean;
  monthly_pass: boolean;
  threeMonth_pass: boolean;
  sixMonth_pass: boolean;
  annual_pass: boolean;
}

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

  const reduxState = useAppSelector((state) => state.facility);
  const [checkedState, setCheckedState] = useState<CheckedState>({
    admission_fee: reduxState.admission_fee ? true : false,
    daily_pass: reduxState.daily_pass ? true : false,
    monthly_pass: reduxState.monthly_pass ?true :false,
    threeMonth_pass:reduxState.threeMonth_pass?true :   false,
    sixMonth_pass:reduxState.sixMonth_pass ?true : false,
    annual_pass:reduxState.annual_pass ?true : false,
  });
  console.log("check" ,checkedState);
  

const [form] = Form.useForm();

form.setFieldsValue({
  admission_fee: reduxState.admission_fee ,
  daily_pass: reduxState.daily_pass,
  monthly_pass: reduxState.monthly_pass,
  threeMonth_pass: reduxState.threeMonth_pass,
  sixMonth_pass: reduxState.sixMonth_pass,
  annual_pass: reduxState.annual_pass,
  tier: reduxState.tier? reduxState.tier : "Select Tier",
  other:reduxState.other
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
  // console.log("salman :" , { value });
  // dispatch(addData({ tier: value.value }));
  dispatch(setTier(value))
};

const handleOtherchange = (e:any) => {
  dispatch(addData({ ["other"] : e.target.value}))

}



    
  return (
    <div className="max-w-[500px] mx-auto mt-8">
      <Form form={form}
      onFinish={handleNext}
      >
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

                <Checkbox name={item.name }
                checked={
                  checkedState[
                    (item.name ) as keyof typeof checkedState
                  ]
                }
                onChange={handleCheckBox} >
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
                    (item.name ) as keyof typeof checkedState
                  ]
                }
                rules={
                  checkedState[item.name as keyof typeof checkedState]
                    ? [
                        {
                          required: true,
                          message: "Enter price",
                        },
                      
                      ]
                    : undefined // Set to undefined if no rule should be applied
                  }
              >
                <Input
                  className="w-20 price"
                  name={item.name}
                  type="tel"
                  maxLength={5}
                  onChange={(value) =>
                    handlePriceChange(item.name, +value.target.value)
                  }
                />
              </Form.Item>
            </div>
          </div>
        ))}
         
        <Form.Item
          label="Other Options"
          labelCol={{ span: 7 }}
          name={"other"}
        >
          <Input name="other" className="w-52" onChange={handleOtherchange} />
        </Form.Item>

        <Form.Item
            label="Facility Tier"
            name="tier"
            className="text-start"
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
      <div className="flex gap-3 justify-center ">
        <Button type="primary" className="bg-blue-600 " htmlType="submit">
          Next
        </Button>
        <Button className="bg-white " onClick={handlePrevious}>
          Previous
        </Button>
      </div>
      </Form>

    </div>
  );
};

export default Membership;
