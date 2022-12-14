import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./component/Main/Main";
import Home from "./component/Home/Home";
import Blog from "./component/Blog/Blog";
import Question from "./component/Question/Question";
import Graph from "./component/Graph/Graph";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home></Home>,
        },
        {
          path: "home",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home></Home>,
        },
        {
          path: "blog",
          element: <Blog></Blog>,
        },
        {
          path: "graph",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Graph></Graph>,
        },
        {
          path: "question/:questionId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.questionId}`
            );
          },
          element: <Question></Question>,
        },
      ],
    },
    {
      path: "*",
      element: <h1>Wrong path</h1>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
