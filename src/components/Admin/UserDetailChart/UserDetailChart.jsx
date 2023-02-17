import React, { useState } from "react";
import Chart from "react-apexcharts";

const PostDetailChart = () => {
    const [state, setState] = useState({
        options: {
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
          },
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
        ],
      });
      return (
        <div className="flex flex-col w-full  content-center justify-center p-5 gap-y-5">
          <h1 className="text-center text-2xl font-bold">Post Details </h1>
          <div className="mx-auto">
          <Chart 
            options={state.options}
            series={state.series}
            type="bar"
            width="600"
          />
          </div>
        </div>
      );
}

export default PostDetailChart