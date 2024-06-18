import './feature.css'

const FeatureShow = ({data}) => {
console.log(data);
    return (
        <div  className="mb-10 md:mb-0  mx-auto  bg-[rgba(252,252,252,1)] shadow1  customBorder px-1 pb-2 ">
          <div className="circle-container  ">
        <div className='half-border '></div>
          <img src={data?.image_url}   className="circle-image" alt="" />
          </div>
            <h1 className='text-center text-[rgba(1,23,150,1)] font-poppins font-semibold text-sm w-36 my-2  mx-auto'>{data?.title}</h1>
        </div>
    );
};

export default FeatureShow; 