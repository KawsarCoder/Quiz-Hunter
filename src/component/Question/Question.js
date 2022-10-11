// import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import Options from "../Options/Options";

const Question = () => {
  const questionsData = useLoaderData();
  const { name, total, questions } = questionsData.data;

  return (
    <div>
      <div className="bg-secondary text-white p-2">
        <h3 className="mt-5">This quiz of {name}</h3>
        <h5 className="my-3">Total question: {total} </h5>
      </div>
      {questions.map((question) => (
        <Options key={question.id} question={question}></Options>
      ))}
    </div>
  );
};

export default Question;
