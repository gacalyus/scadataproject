import Chart from "chart.js/auto";
import { useState } from "react";
// import { Data } from "./Data";
import LineChart from "./LineChart";

export default function Line({ lineData }) {


    var labels = []; var data = [];
    lineData?.map((item) => {
        labels.push(item.year);
        data.push(item.saving);
    });



    const chartData = ({
        labels: labels,
        datasets: [
            {
                label: "Return on Investment",
                data: data,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    });
    return (
        <div style={{ maxHeight: "400px" }} >
            <LineChart chartData={chartData} />
        </div>
    )

}