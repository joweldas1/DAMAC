import { FaArrowRight } from "react-icons/fa";

const HeroButtonDiv = ({setButtonDivOpen}) => {
    return (
        <div className="w-full lg:w-1/2 h-[50vh] absolute lg:translate-x-[50%] 
        translate-y-[50%] rounded-lg customShadow z-50  bg-[rgba(6,35,73,1)]">

          <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-white text-center text-3xl font-poppins">This Section will coming soon!</h1> 
          <button onClick={()=>setButtonDivOpen(false)} className="bg-[rgba(6,35,73,1)] flex items-center gap-1 text-sm font-semibold font-poppins border-white border-2 text-white px-2 py-1 rounded-md mt-5 border-">Go Back <FaArrowRight/> </button>
          </div>
            
        </div>
    );
};

export default HeroButtonDiv;