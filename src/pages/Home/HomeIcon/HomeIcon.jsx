import icon1 from '/icon/1.png'
import icon2 from '/icon/2.png'
import icon3 from '/icon/3.png'
import icon4 from '/icon/4.png'

const HomeIcon = () => {
    return (
     <div   className='w-full bg-[rgba(244,249,255,1)] '>
         <div className='w-4/5 mx-auto '>
          <div data-aos="fade-left" className='grid grid-cols-2  lg:grid-cols-4 justify-items-center items-center gap-10 lg:gap-0 py-10  '>
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
            <img src={icon4} alt="" />
        </div>
      </div>
     </div>
    );
};

export default HomeIcon;