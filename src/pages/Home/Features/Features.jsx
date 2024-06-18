import sectionHeading from "/section/section.png";
import details from "./details.json";
import FeatureShow from "./FeatureShow";
import { useState } from "react";
import NewsLetter from "../../../componenets/NewsLetter/NewsLetter";

const Features = () => {

  const [open,setOpen] = useState(false)



  return (
    <div className="sm:w-full md:w-4/5 mx-auto my-16 relative ">
      {
        open && <NewsLetter setOpen={setOpen}/>
      }
      <div  className="w-full  flex justify-center py-3">
        <img data-aos="fade-left" src={sectionHeading} alt="" />
      </div>

        <h1  data-aos="flip-up" className="text-center font-semibold font-oswald mx-1  text-4xl my-3 text-[rgba(0,69,114,1)]">
          Features & Amenities
        </h1>

      <p  data-aos="fade-up-right"  className="text-lg md:w-4/5 px-4 md:px-10 mx-auto text-center font-semibold text-[rgba(52,52,52,1)]">
        Harbour Lights beautifully honours maritime voyages while embracing an
        opulent seafront lifestyle. Its maritime-inspired amenities provide an
        unmatched seaside experience, offering a life of tranquility and bliss.
      </p>
    {/* all data show  */}
      <div data-aos="flip-up" className="grid grid-cols-2 lg:grid-cols-4 mt-10 ">
        {details.map((data, idx) => (
          <FeatureShow  key={idx} data={data} />
        ))}
      </div>

      <p className="text-[14px] mx-10 md:mt-10 md:mx-0 text-[rgba(104,104,104,1)] text-center lg:text-right font-poppins">
        *T&Cs apply | ** Based on similar branded projects in the last 2 years.
        Source 1 | Source 2
      </p>
        {/* button part */}
      <div  className="space-x-3   my-10 flex justify-center lg:justify-end">
        <button onClick={()=>setOpen(true)} className="font-poppins button-5 px-10 py-3 tracking-wider text-[13px] ">EXTERIORS</button>
        <button className="font-poppins button-6 px-10 py-3 tracking-wider text-[13px] ">EXTERIORS</button>
      </div>
    </div>
  );
};

export default Features;
