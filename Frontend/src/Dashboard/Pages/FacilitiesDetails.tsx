import { FaEdit } from "react-icons/fa";

const data = [
  {
    id: 1,
    label: "Facility Type ",
    input: "Access",
  },
  {
    id: 2,
    label: " Facility Gender ",
    input: "Unisex",
  },
  {
    id: 3,
    label: "Facility Tier ",
    input: "Gold",
  },
  {
    id: 4,
    label: "Facility Name ",
    input: "Hulk Fit",
  },
  {
    id: 5,
    label: "Contact Person Name ",
    input: "Salman",
  },
  {
    id:6 ,
    label: "Email Address",
    input: "hulkfit111@gmail.com",
  },
  {
    id:7 ,
    label: "Phone Number",
    input: "1234567890",
  },
  {
    id: 8,
    label: "Website URL",
    input: "www.hulkfit.com",
  },
  
  
];

const FacilitiesDetails = () => {
  return (
    <div className="md:flex ">
      <div className="m-3 p-3  bg-gray-200 md:w-[50%]">
        <div className="basic_info flex justify-between items-center font-semibold">
          <div>
            <h1>Basic information</h1>
          </div>
          <div>
            <FaEdit />
          </div>
        </div>

        {data.map((item) => (
          <div key={item.id} className="Basic_info_detail mt-3  flex items-center m-3 p-1">
            {/* <Form labelCol={{ span: 4 }} wrapperCol={{ span: 3 }}>
              <div>
                <div>

                </div>
              </div>
              <Form.Item label={item.label} className="">
                <Input disabled value={item.input} />
              </Form.Item>
            </Form> */}
            <div className="label w-[150px]">
              <h1>
                {item.label}
              </h1>

            </div>
            <div className="input flex gap-3 items-center"> 
            :<input type="text" value={item.input} disabled className="border rounded-md p-2 bg-gray-300 w-[300px]"/>

            </div>
          </div>
        ))}

        <div className="description md:flex m-3 p-1 items-center">
          <div className=" md:w-[150px] w-[10px]">
            <h1>Description:</h1>
          </div>
          <div className="md:flex  md:gap-3 ">
            <textarea name="" value={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque maxime consequuntur voluptatem iusto inventore molestiae aspernatur? Non magnam, "}  id="" cols={45} rows={5} className="border rounded-md  p-2 bg-gray-300 md:w-[400px] mt-3 "></textarea>
            
          </div>
        </div>

        <div className="Logo">


        </div>
      </div>

      <div className="section-2 bg-gray-200 m-3 p-3 w-[50%]">
oijojo
      </div>
    </div>
  );
};

export default FacilitiesDetails;
