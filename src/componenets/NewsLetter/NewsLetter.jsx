import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const NewsLetter = ({ setOpen }) => {
  const [data, setData] = useState("");
  const [show, setShow] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const message = form.message.value;

    const formData = { email, name, message };
    setData(formData);

    if (data) {
      setShow(true);
    }
  };

  const handleConfirm = () => {
    toast.success("Your Message send successfully");
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };
  console.log();
  return (
    <div>
      <div className="w-full lg:w-1/3 h-fit lg:h-[70vh] mx-auto py-3 absolute lg:translate-x-[80%] translate-y-[140%]  lg:translate-y-[80%] rounded-lg customShadow z-50  bg-[rgba(6,35,73,1)]">
        {/* form part */}

        {!show ? (
          <div className="p-3">
            <h1 className="text-3xl font-poppins text-center text-white font-semibold p-3">
              Get in Touch
            </h1>
            <form onSubmit={handleOnSubmit} action="">
              <div>
                <label className="text-white" htmlFor="email">
                  Email Address
                </label>{" "}
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Type you email"
                  className="input input-bordered w-full max-w-xs mb-3"
                />{" "}
                <br />
                <label className=" text-white" htmlFor="email">
                  Your Name
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="name"
                  placeholder="Type you email"
                  className="input  input-bordered w-full max-w-xs mb-3"
                />{" "}
                <br />
                <label className="text-white" htmlFor="message">
                  Your Message
                </label>{" "}
                <br />
                <textarea
                  className="w-full px-2 rounded-lg font-semibold font-poppins "
                  name="message"
                  id=""
                ></textarea>
                <button className="bg-[rgba(6,35,73,1)] border-2 mt-2 border-white text-white rounded-md font-poppins px-4 py-1">
                  Send
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="bg-[rgba(6,35,73,1)] ml-2 border-2 mt-2 border-white text-white rounded-md font-poppins px-4 py-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-3 h-full w-full flex flex-col justify-center items-center ">
            <div>
              <h1 className="text-white text-center text-3xl mb-4">
                Please Confirm your Message
              </h1>
              <h1 className="text-white text-xl">
                Name : <b>{data.name}</b>{" "}
              </h1>
              <h1 className="text-white text-xl">
                Email : <b>{data.email} </b>
              </h1>
              <h1 className="text-white text-xl">
                Message :{`${data?.message?.slice(0, 100)}....`}{" "}
              </h1>

              <button
                onClick={handleConfirm}
                className="bg-[rgba(6,35,73,1)] border-2 mt-2 border-white text-white rounded-md font-poppins px-4 py-1"
              >
                Confirm
              </button>
            </div>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default NewsLetter;

{
  /* <div className="w-full h-full flex flex-col justify-center items-center">

</div> */
}
