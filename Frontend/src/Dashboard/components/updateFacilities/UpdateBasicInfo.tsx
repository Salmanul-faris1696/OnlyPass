import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio, Upload, UploadFile, UploadProps, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { ApiClientPrivate } from "../../../utils/axios";
import { useState } from 'react';
import { dataLogo } from '../../../utils/urls';
import { useDebounce } from '../../../Hook/CustomHook';

export default function UpdateBasicInfo(props:any) {

  const [remove , setRemove] = useState(props.facilityData.logoUrl? true:false)
  const [fileList, setFileList] = useState<UploadFile[]>(props.facilityData.logoUrl? [
    {
      uid: '1',
      name: props.facilityData.logoUrl,
      status: 'done',
      url: props.facilityData.logoUrl ? `${dataLogo}/${props.facilityData.logoUrl}` : "",
    },
  ]:[])
    const [form]= Form.useForm()
    
    // console.log("fadRfdf:", );
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


    const handleUpdate = async () => {
      try {
        const values = await form.validateFields(); // validate the form fields
  
        // Assuming you have an API endpoint for updating facilities, adjust the URL accordingly
        const id = props.facilityData._id; // Replace 'id' with the actual identifier for your facility
        await ApiClientPrivate.put(`facilities/update/${id}`, values);
        // You may want to handle success, close modal, or update the Redux state accordingly
        props.cancel()
        props.refetch()
      } catch (error) {
        console.error('Error updating facility:', error);
        // Handle error appropriately
      }
    };

    const normFileLogo = async (e: any) => {
      try {
        // Assuming ApiClientPrivate is an Axios instance
        const formData = new FormData();
        formData.append("logo", e.file.originFileObj);
        console.log("logooooooooo",e.file.originFileObj);
        
        // Make the POST request to upload the logo
        if(remove !== true){
        const response = await ApiClientPrivate.post(
          "/images/upload-logo",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const id = props.facilityData._id; // Replace 'id' with the actual identifier for your facility
        await ApiClientPrivate.put(`facilities/update/${id}` ,{logoUrl:response.data.facility_images})


  
        // console.log("Logo upload :", response.data.facility_images);
        // dispatch(addData({ ["logoUrl"]: response.data.facility_images }));
        }
        setRemove(true)
        // Return the file list (or any other value you need)
        return e.fileList;
      } catch (error) {
        // Handle errors during logo upload 
        console.error("Logo upload error:", error);
  
        // Return the file list or handle errors based on your requirements
        return e.fileList;
      }
    };
  const debouncedNormFileLogo = useDebounce(normFileLogo, 500);

  const propsimg: UploadProps = {
    name: "file",
    
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    
    
    onChange(info) {
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}`,
    },
  };

  const handleLogoRemove = () => {
    // dispatch(addData({ logoUrl: "" }));
    
    setFileList([]); 
    // console.log("salman");
    setRemove(false)
  };


  

  return (
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
                onChange={(e) =>{ if(remove === false) debouncedNormFileLogo(e)}}
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                listType="picture"
                onRemove={handleLogoRemove}
                // fileList={fileList}
                
                
                defaultFileList={[...fileList]}
              >
              <Button disabled={remove === true}
              icon={<UploadOutlined />}>Upload</Button>
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
        <div className="flex justify-center">
            <Button type="primary" htmlType="submit" className="bg-blue-600" onClick={handleUpdate}>
                Update
            </Button>
        </div>
      </Form>
    </div>
  )
}
