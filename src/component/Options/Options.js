// import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EyeIcon } from "@heroicons/react/24/solid";

const Options = (props) => {
  const { id, correctAnswer, question, options } = props.question;
  const check = (demo) => {
    if (correctAnswer === demo) {
      toast.success("Your answer is correct", { position: "top-center" });
    } else {
      toast.error("Your answer is Incorrect", { position: "top-center" });
    }
  };
  const eyeClick = () => {
    const answer = document.getElementById(id);
    answer.classList.remove("d-none");
  };
  return (
    <div className="p-5 my-3 bg-info rounded w-75 m-auto">
      <div className="row">
        <h5 className="col col-lg-10 col-md-9 col-sm-12 col-12">{question}</h5>
        <div className="col col-lg-2 col-md-3">
          <EyeIcon
            onClick={() => eyeClick()}
            className="h-25 w-50 text-blue-500"
          />
          <h6 id={id} className="d-none">
            {correctAnswer}
          </h6>
        </div>
      </div>
      <div className="row m-auto">
        {options.map((select) => (
          <div className="col col-lg-6 col-md-6 col-sm-12 col-12 m-auto">
            <div>
              <button
                onClick={() => check(select)}
                className="border bg-warning rounded p-2 fw-bold m-2"
              >
                {select}
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Options;
