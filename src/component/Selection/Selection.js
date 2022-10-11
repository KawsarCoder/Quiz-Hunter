import React from "react";
import buttonClicked from "../Options/Options";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Selection = ({ select }) => {
  //   const selected = select.select;
  //   const notify = () => {
  //     toast.success("Your answer is correct", { position: "top-center" });
  //   };
  //   console.log(props);
  const check = (demo) => {
    console.log(demo);
    buttonClicked(demo);
  };
  return (
    <div className="col col-lg-6 col-md-6 col-sm-12 col-12 m-auto">
      <div>
        <button
          //   onClick={notify}
          onClick={() => check(select)}
          className="border bg-warning rounded p-2 fw-bold m-2"
        >
          {select}
        </button>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Selection;
