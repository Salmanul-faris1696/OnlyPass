import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { nextButton, prevButton } from "../Redux/Features/ButtonSlice";
import { addData } from "../Redux/Features/FacilityFeature/FacilititySlice";
import { useAppSelector } from "../Redux/hooks";
import TimeTable from "./TimeTable";
import './Location.css'

const Location = () => {
  const dispatch = useDispatch();
  const handleNext = () => {
    console.log("next membership");

    dispatch(nextButton());
  };

  const handlePrevious = () => {
    console.log("basic info");

    dispatch(prevButton());
  };

  const reduxState = useAppSelector((state) => state.facility);
  console.log({ reduxState });
  const [form] = Form.useForm();

  form.setFieldsValue({
    address: reduxState.address,
    pin_code: reduxState.pin_code,
    country: "India",
    state: "Kerala",
    place: reduxState.place,
    latitude_lognitude: reduxState.latitude_longitude,
  });

  const { TextArea } = Input;

  const handleInputChange = (e: any) => {
    // console.log(e.target, "name:", e.target.name, "value:", e.target.value);

    const fieldName = e.target.name;

    const fieldValue = e.target.value;
    // console.log({fieldValue});
    dispatch(addData({ [fieldName]: fieldValue }));
    return;
    // console.log(e.target.value);
  };
  
  return (
    <div>
      <div className="font-semibold md:px-5 ">
        <Form
          form={form}
          onFinish={(values) => console.log({ values })}
          onChange={handleInputChange}
          labelCol={{ span: 7 }}
          className="text-start"
        >
          <div>
            <div className="font-semibold text-center text-2xl mb-10">
              <h1>Location</h1>
            </div>

            <div>
              {/* Address...........! */}
              <Form.Item
                label="Address"
                name={"address"}
                className="text-start"
                // rules={[{ required: true, message: "Enter address field" }]}
              >
                <TextArea
                  rows={3}
                  name="address"
                  className="md:w-[350px]"
                />
              </Form.Item>
              {/* Pin code ...........! */}
              <Form.Item label="Pin Code" name={"pin_code"}>
                <Input
                  name="pin_code"
                  type="number"
                  className="w-[100px]"
                />
              </Form.Item>
              {/* Place */}
              <Form.Item label="Place" className="" name="place">
                <Input name="place" className="md:w-[350px] " />
              </Form.Item>
              {/* State ............! */}
              <Form.Item label="State" className="" name="state">
                <Input
                  disabled value={"Kerala"} name="state" className="md:w-[350px]"/>
              </Form.Item>
              {/* Country ...........! */}
              <Form.Item label="Country" className="" name="country">
                <Input disabled value="India" name="country" className="md:w-[350px]" />
              </Form.Item>
              {/* Latitude Longitude */}
              <Form.Item label="Latitude_Longitude" name="latitude_longitude">
                <Input name="latitude_longitude" className="md:w-[350px]" />
              </Form.Item>
            </div>
          </div>
        </Form>

        <div>
          <div className="font-semibold text-center text-2xl my-10">
            <h1>Time</h1>
          </div>
          <div>
            <TimeTable />
          </div>
        </div>

        <div className="flex gap-3 justify-center">
          <Button type="primary" className="bg-blue-600 " onClick={handleNext}>
            Next
          </Button>
          <Button className="bg-white " onClick={handlePrevious}>
            Previous
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Location;
