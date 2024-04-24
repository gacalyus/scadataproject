
import { useState, useEffect } from "react";
import DoughnutChart from "./DoughnutChart";

export default function Doughnut({ value }) {

    const [data, setData] = useState([
        {
            id: 0,
            year: "major",
        },
        {
            id: 1,
            year: "minor",
        },
        {
            id: 2,
            year: "warning",
        },
        {
            id: 3,
            year: "critical",
        },
        {
            id: 4,
            year: "online",
        },
        {
            id: 5,
            year: "offline",
        },
        {
            id: 6,
            year: "faulty",
        },
    ])

    const updatedData = [...data];

    updatedData.forEach((item) => {
        if (value.hasOwnProperty(item.year)) {
            item.value = value[item.year];
        }
    });
    useEffect(() => {
        setData(updatedData);
    }, [])

    const [chartData, setChartData] = useState({
        // labels: Data.map((data) => data.year),
        datasets: [
            {
                label: " ",
                data: data.map((data) => data.value),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "#4CAF50",
                borderWidth: 0,
                spacing: 0

            }
        ]
    });

    return (
        <div style={{ display: "flex", justifyContent: "center" }} className="chart-container">
            <DoughnutChart chartData={chartData} />
        </div>
    )

}