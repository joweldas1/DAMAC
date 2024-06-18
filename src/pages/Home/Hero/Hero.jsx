import { useState } from "react";
import "./hero.css";
import logo from "/Logo.png";
import { IoMenu } from "react-icons/io5";
import Toggle from "../../../componenets/ToogleComponent/Toggle";
import HeroButtonDiv from "../../../componenets/HeroButtonDiv/HeroButtonDiv";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [buttonDivOpen,setButtonDivOpen] = useState(false)
  
  const handleOnClick =() =>{
    setButtonDivOpen(true)
  }
 

  return (
   <div className="relative">
    {
      buttonDivOpen && <HeroButtonDiv setButtonDivOpen={setButtonDivOpen}/>
    }
    {
      open &&  <div className={`menu-container ${open?'open':'closed'}`}> <Toggle setOpen={setOpen} />  </div>
    }

     <div className="w-full heroBg h-screen bg-contain bg-no-repeat bg-center ">
      <div className="w-full h-screen  bg-[rgba(6,35,73,.8)] lg:bg-transparent lg:bg-gradient-to-r lg:from-[#062349] lg:to-[rgba(0,0,0,.4)]  bg-cover bg-center">
        <div className="lg:w-4/5 px-6 mx-auto ">
          {/* navbar logo and btn */}
          <div className="flex items-center justify-between py-3 lg:py-8">
            <div>
              <img src={logo} alt="" className="w-[111px] lg:w-[160px]" />
            </div>

            <div>
              {/* btn for large screen */}
              <button className="btn heroBtn1 font-poppins hidden md:block">
                ENQUIRE NOW
              </button>
              {/* btn for sm screen */}
                <button className="md:hidden" onClick={() => setOpen(!open)}>
                  {!open && 
                    <IoMenu className="text-3xl text-white" />}
              </button>
            </div>
          </div>

          {/*navbar second section  */}
          <div className="lg:flex justify-between items-center mt-4 lg:mt-14">
            {/*  left */}
            <div className="">
              <h1   data-aos="fade-up" className=" text-4xl lg:text-6xl uppercase text-white  fontOswald font-semibold leading-snug">
                Harbour Lights <br />
                de <span className="heroText">GRESOGONO</span>
              </h1>
              <p  data-aos="fade-up" className="text-white text-lg md:text-2xl lg:text-[25px] font-semibold mt-2 font-poppins">
                1, 2 & 3 Bedrooms Seaside Apartments{" "}
                <br className="hidden md:block" /> in Dubai Maritime City
              </p>

              <div data-aos="fade-right" className="bg-[rgba(0,0,0,.4)] mt-10 lg:mt-10 lg:w-[400px] border-l-4 border-[rgba(23,171,255,1)]  pl-3 text-white py-3">
                <p  className="text-lg  font-poppins">
                  Rental Returns of
                  <span className="text-xl font-semibold ml-2">UPTO 11%**</span>
                </p>
              </div>

              <div data-aos="fade-left" className="bg-[rgba(0,0,0,.4)] mt-1 lg:mt-5 lg:w-[400px] border-l-4 border-[rgba(23,171,255,1)]  pl-3 text-white py-3">
                <p className="text-lg  font-poppins">
                  Capital Appreciation of
                  <span className="text-xl font-semibold ml-2">UPTO 32%**</span>
                </p>
              </div>
            </div>
            {/* right */}
            <div data-aos="fade-down" className="inset-0 divShadow  bg-opacity-50 backdrop-blur-3xl  mt-12 lg:mt-4 border lg:border-none lg:backdrop-blur-md ">
              <div className="p-4 lg:p-10 border-b-2 border-[rgba(0,0,0,.4)]">
                <p className=" font-poppins text-white tracking-widest text-base lg:text-md">
                  PRICING STARTS FROM
                </p>
                <h1 className="font-oswald text-4xl lg:text-5xl font-semibold leading-10 my-2 text-white">
                  $ 425,000
                </h1>
                <h1 className="font-oswald text-xl lg:text-2xl mb-3 font-semibold leading-10 text-white">
                  AED 1.3 Million
                </h1>
                <button onClick={handleOnClick} className="btn w-full mt px-7 font-poppins bg-[rgba(23,171,255,1)] border-transparent text-white hover:text-[rgba(23,171,255,1)] hover:bg-white hover:border-2 hover:border-[rgba(23,171,255,1)]">
                  GET A PRESENTATION
                </button>
              </div>

              <h1 className="text-gray-300 text-sm w-full mx-6 py-2 ">
                Get an Expert’s Presentation of Real <br /> Estate in Dubai for
                Life and investment
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Hero;
