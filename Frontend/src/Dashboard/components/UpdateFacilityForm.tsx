import { UploadOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, InputNumber, Modal, Radio, Select, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { setBasicEditBtn, setLocationEditBtn, setMembershipEditBtn } from "../Redux/Features/EditFacilityBtn";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { useState } from 'react';



export const UpdateBasicInfo = (props: any) => {

    const [form]= Form.useForm()
    const {basicEditBtn} = useAppSelector((state) => state.editFacilities);
    console.log({basicEditBtn});
    const dispatch = useAppDispatch()
    console.log("fadRfdf:", );
    form.setFieldsValue({
        facility_type:props.facilityData.facility_type,
        gender:props.facilityData.gender,
        facilityName:props.facilityData.facilityName,
        emailAddress:props.facilityData.emailAddress,
        contactPerson:props.facilityData.contactPerson,
        phoneNumber:props.facilityData.phoneNumber,
        websiteURL:props.facilityData.websiteURL,
        logo:props.facilityData.logoUrl,
        description:props.facilityData.description,
        images:props.facilityData.Facilityimages
    })


  const handleOk = () => {
    dispatch(setBasicEditBtn(false))
  };

  const handleCancel = () => {
    dispatch(setBasicEditBtn(false))

  };
  console.log("hello,,,ggggggggggg");


  return (
    <div>
        <Modal title=""
        open={basicEditBtn}
         onOk={handleOk} 
         onCancel={handleCancel} 
         footer={[
            <Button key='update' type='primary' onClick={handleOk}   className='bg-blue-500'>
            Update
          </Button>,
            
         ]}
         >
        <div className="font-semibold  ">
      <Form
        form={form}
        // onFinish={onFinish}
        // onChange={handleInputChange}
        className=""
        labelCol={{ span: 7 }}
      >
        <div>
          <div className="text-start">
         
            <Form.Item
              label="Facility Type :"
              className="text-left"
              name={"facility_type"}
              
              rules={[{ required: true, message: "Please Select your Type!" }]}
            >
              <Radio.Group name="facility_type">
                <Radio value="acess"> Access </Radio>
                <Radio value="pass"> Pass </Radio>
              </Radio.Group>
            </Form.Item>
          </div>

          <div className="">
            <Form.Item
              label="Gender :"
              className="text-start"
              name={"gender"}
              rules={[{ required: true, message: "Please Select your Type!" }]}
            >
              <Radio.Group name="gender">
                <Radio value="gents"> Gents </Radio>
                <Radio value="ladies"> Ladies </Radio>
                <Radio value="unisex"> Unisex (mixed) </Radio>
              </Radio.Group>
            </Form.Item>
          </div>
        </div>

        <div>
          <div>
            <Form.Item
              label="Facility Name"
              name={"facilityName"}
              className="text-left"
              rules={[
                { required: true, message: "Please Enter Facilicty name" },
              ]}
            >
              <Input name="facilityName" value={props.facilityData.facilityName} className="md:w-[350px]" />
            </Form.Item>
            <Form.Item
              label="Email"
              name={"emailAddress"}
              rules={[
                { required: true, message: "Please Enter Email Address" },
              ]}
              className=""
            >
              <Input name="emailAddress" className="md:w-[350px]" />
            </Form.Item>
            <Form.Item
              label="Contact Person"
              name={"contactPerson"}
              rules={[
                { required: true, message: "Please Enter Contact person name" },
              ]}
            >
              <Input name="contactPerson" className="md:w-[350px]" />
            </Form.Item>
            <Form.Item
              label=" Phone No "
              name={"phoneNumber"}
              rules={[{ required: true, message: "Please Enter phone number" }]}
              className="text-left"
            >
              <Input type="tel" name="phoneNumber" className="md:w-[350px]" />
            </Form.Item>

            <Form.Item label="Website url" className="" name={"websiteURL"}>
              <Input name="websiteURL" className="md:w-[350px]" />
            </Form.Item>

            <Form.Item label="Logo" name={"logo"}>
              <div className="w-[200px]">
              <Upload
                maxCount={1}
                // onChange={(e) =>
                // //   debouncedNormFileLogo(e)
                // ""
                // }
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                listType="picture"
                // defaultFileList={[...fileList]}
              >
              <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
              
              </div>
            </Form.Item>

            <Form.Item label="Description" name={"description"}>
              <TextArea name="description" rows={4} className="w-[350px]" />
            </Form.Item>

            <div className=" ">
              <Form.Item
                label="Images (min.5 Nos)"
                name={"images"}
              >
                <Upload
                  {...props}
                  onChange={() =>
                    // debouncedNormFileImages(form.getFieldValue("images"))
                    ""
                  }
                >
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  <h1 className="text-red-600">(preview size is 16:9)</h1>
                </Upload>
              </Form.Item>
            </div>
          </div>
        </div>
       
      </Form>
    </div>
      </Modal>
    </div>
  )
}

export const UpdateLocation = (props : any) => {

    const [form]= Form.useForm()
    const {locationEditBtn} = useAppSelector((state) => state.editFacilities);
    const dispatch = useAppDispatch()
    const handleOk = () => {
        dispatch(setLocationEditBtn(false))
      };
    
      const handleCancel = () => {
        dispatch(setLocationEditBtn(false))
    
      };

      form.setFieldsValue({
        address :props.facilityData.address,
        pin_code:props.facilityData.pin_code,
        state:props.facilityData.state,
        country:props.facilityData.country,
        latitude_longitude:props.facilityData.latitude_longitude





      })
    return(
        <div>
        <Modal title=""
        open={locationEditBtn}
         onOk={handleOk} 
         onCancel={handleCancel} 
         footer={[
            <Button key='update' type='primary' onClick={handleOk}   className='bg-blue-500'>
            Update
          </Button>,
            
         ]}
         >
        <div className="font-semibold  ">
        <Form
          form={form}
          onFinish={(values) => console.log({ values })}
        //   onChange={handleInputChange}
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
                rules={[{ required: true, message: "Enter address field" }]}
              >
                <TextArea
                  rows={3}
                  name="address"
                  className="md:w-[350px]"
                />
              </Form.Item>
              {/* Pin code ...........! */}
              <Form.Item label="Pin Code" name={"pin_code"} 
              rules={[{ required: true, message: "Enter pin code" }]}>
                <Input
                  name="pin_code"
                  type="number"
                  className="w-[100px]"
                //   value={pincode}
                //   onChange={handlePincodeChange}
                />
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
              <Form.Item label="Latitude_Longitude" name="latitude_longitude"
              rules={[{ required: true, message: "latitude_longitude " }]}>
                <Input name="latitude_longitude" className="md:w-[350px]" />
              </Form.Item>
            </div>
          </div>
        </Form>
    </div>
      </Modal>
    </div>
    )
}

interface CheckedState {
    admission_fee: boolean;
    daily_pass: boolean;
    monthly_pass: boolean;
    threeMonth_pass: boolean;
    sixMonth_pass: boolean;
    annual_pass: boolean;
  }



export const UpadteMembershipModal = (props : any) => {

    const {membershipEditbtn} = useAppSelector((state) => state.editFacilities);
    const dispatch = useAppDispatch()
    const handleOk = () => {
        dispatch(setMembershipEditBtn(false))
      };
    
      const handleCancel = () => {
        dispatch(setMembershipEditBtn(false))
    
      };

      const [checkedState, setCheckedState] = useState<CheckedState>({
        admission_fee: props.facilityData.admission_fee ? true : false,
        daily_pass: props.facilityData.daily_pass ? true : false,
        monthly_pass: props.facilityData.monthly_pass ?true :false,
        threeMonth_pass:props.facilityData.threeMonth_pass?true :   false,
        sixMonth_pass:props.facilityData.sixMonth_pass ?true : false,
        annual_pass:props.facilityData.annual_pass ?true : false,
      });

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

      const handleCheckBox = (e:any) => {
        const { name, checked } = e.target;
        setCheckedState((prevState) => ({
          ...prevState,
          [name]: checked,}));
        };
const [form] = Form.useForm();

form.setFieldsValue({
  admission_fee: props.facilityData.admission_fee ,
  daily_pass: props.facilityData.daily_pass,
  monthly_pass: props.facilityData.monthly_pass,
  threeMonth_pass: props.facilityData.threeMonth_pass,
  sixMonth_pass: props.facilityData.sixMonth_pass,
  annual_pass: props.facilityData.annual_pass,
  tier: props.facilityData.tier? props.facilityData.tier : "Select Tier",
  other:props.facilityData.other
});
    
    return(
        <div>
        <Modal title=""
        open={membershipEditbtn}
         onOk={handleOk} 
         onCancel={handleCancel} 
         footer={[
            <Button key='update' type='primary' onClick={handleOk}   className='bg-blue-500'>
            Update
          </Button>,
            
         ]}
         >
        <div className="font-semibold  ">
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

                <Checkbox name={item.name }
                checked={
                  checkedState[
                    (item.name ) as keyof typeof checkedState
                  ]
                }
                onChange={handleCheckBox}
                 >
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
                wrapperCol={{ span: 6 }}
              >
                <InputNumber
                  className="w-20 price"
                  name={item.name}
                  type="number"
                //   onChange={(value:any) =>
                //     // handlePriceChange(item.name, value as number)
                //     ""
                //   }
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
          <Input name="other" className="w-52"
        //    onChange={handleOtherchange}
            />
        </Form.Item>

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
            //   onChange={handleChange}
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
      </Form>
    </div>
      </Modal>
    </div>
    )
}

