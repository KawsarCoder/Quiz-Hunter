import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Graph = () => {
  const apiData = useLoaderData();
  const data = apiData.data;

  return (
    <div>
      <h3 className="mt-5 text-primary">
        This Graph Shows the Total Number of Question in Single Topic
      </h3>
      <div className="d-flex justify-content-center">
        <BarChart
          width={300}
          height={400}
          data={data}
          margin={{
            top: 100,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="total" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default Graph;
