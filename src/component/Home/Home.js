import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

import Carousel from "../Carousel/Carousel";

const Home = () => {
  const allQuizApi = useLoaderData();
  const quizData = allQuizApi.data;
  // console.log(quizData);
  return (
    <div>
      <Carousel></Carousel>
      <div className="row container m-auto my-5">
        {quizData.map((data) => (
          <Card key={data.id} data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
