import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { Toolbar } from "../../components/toolbar";

export const Chart = ({ empAge, empSal }) => {
  const data = {
    labels: empAge,
    datasets: [
      {
        label: "Dynamic Line Chart",
        fill: false,
        lineTension: 0.3,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 2,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: empSal,
      },
    ],
  };

  return (
    <div className="container mx-auto px-20">
      <Toolbar />
      <h1 className="text-4xl text-center font-bold text-gray-800 my-10">
        CHART OF EMPLOYEE SALARY IN A COMPANY
      </h1>
      <Line data={data} width={100} height={50} />
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  let empSal = [];
  let empAge = [];

  const apiResponse = await axios.get(
    "http://dummy.restapiexample.com/api/v1/employees"
  );

  for (const dataObj of apiResponse.data.data) {
    empAge.push(parseInt(dataObj.employee_age));
    empSal.push(parseInt(dataObj.employee_salary));
  }

  return {
    props: {
      empAge,
      empSal,
    },
  };
};

export default Chart;
