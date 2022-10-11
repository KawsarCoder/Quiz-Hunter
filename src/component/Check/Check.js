import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
const Check = ({ correctAnswer }) => {
  const eyeClick = () => {
      const answer = document.getElementById("answer").innerText;
      console.log(answer);
  };
  return (
    <div>
      <EyeIcon onClick={() => eyeClick()} className="h-25 w-25 text-blue-500" />
      <h6 id="answer" className="d-none">
        {correctAnswer}
      </h6>
    </div>
  );
};

export default Check;
