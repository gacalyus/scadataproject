import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

const data = {
    datasets: [
        {
            data: [3, 10, 10],
            backgroundColor: [
                "#336699",
                "#99CCFF",
                "#999933",

            ],
            display: true,
            borderWidth: 0,
            border: 0,
        }
    ]
};

export default function HalfDoughnut() {
    return (
        <div>
            <Doughnut
                data={data}
                options={{
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: false
                        }
                    },
                    rotation: -90,
                    circumference: 180,
                    cutout: "60%",
                    maintainAspectRatio: true,
                    responsive: true
                }}
            /> 
        </div>
    );
};

