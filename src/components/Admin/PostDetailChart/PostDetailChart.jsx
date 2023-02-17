import React, { useState } from "react";
import Chart from "react-apexcharts";

const PostDetailChart = ({postGraphCategories,postGraphData}) => {
    const [state, setState] = useState({
        options: {
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: postGraphCategories?postGraphCategories:"",
          },
        },
        series: [
          {
            name: "series-1",
            data: postGraphData?postGraphData:"",
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
            type="line"
            width="600"
          />
          </div>
        </div>
      );
}

export default PostDetailChart