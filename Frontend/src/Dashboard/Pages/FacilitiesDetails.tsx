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
    <div className="md:flex m-3">
      <div className=" p-3 w-fit bg-red-600  md:w-[50%]">
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
            :<input type="text" value={item.input} disabled className="border rounded-md p-2 bg-gray-300 w-[250px]"/>

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

        <div className="Logo flex md:flex m-3 p-1 items-center">
          <div className="md:w-[150px] ">
            <h1>Logo </h1>
          </div>
          <div className="flex   items-center gap-4">:
          <img src="https://imgs.search.brave.com/sG4czDv-d0Np2FXnGSENDEBc43QLUn1hizwPmzCQWIo/rs:fit:560:320:1/g:ce/aHR0cHM6Ly9pbWcu/Zml0aW1nLmluL3N0/dWRpb19sb2dvXzk0/NTlDMTNEMTY5MDc1/LnBuZw" alt="gym logo" className="w-32 h-32" />
          </div>


        </div>

        <div className="imageGallery flex gap-3 items-center">
          <div>
            Facility Images :
          </div>
          <div className="flex gap-3 flex-wrap mt-3">

          <img src="https://imgs.search.brave.com/H3nggTbu0mEank_1QIXqMUCqwRaN-p6EcGiZFqhMQw4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/Zml0aW1nLmluL3N0/dWRpb19wcm9maWxl/XzdGNjE2RDg3NkU0/NEU0LnBuZw" alt="" className="w-36 h-36"/>
          <img src="https://imgs.search.brave.com/lmF6KYApAIMjw6tCLsTXDJxJOfvgt-5BzA5mzEvQ7V8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9saDUu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL3Av/QUYxUWlwTllZTzZy/Qm5FVEhhcHJZblZ3/RVRFVkZoakRCV2ct/b3hfcmROT3I9dzQ4/MC1oMzAwLWstbg.jpeg" alt="" className="w-36 h-36"/>
          <img src="https://imgs.search.brave.com/4FKeEERirxo6o9b7IbdHWaVZitlD1pupx7Z3JpDkZcw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9odWxr/Zml0LmRpYWxuZGlh/bC5jb20vaW1hZ2Vz/L3NlcnZpY2UvMTY2/NzYzNTE4NDYzNjYx/N2YwZTRjNTkuanBn" alt="" className="w-36 h-36"/>
         
          </div>


        </div>
      </div>

      <div className="section-2 bg-gray-200 ml-3 p-3 w-[50%]">
oijojo
      </div>
    </div>
  );
};

export default FacilitiesDetails;
