import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useTranslation } from 'react-i18next';

function DoughnutChart({ chartData }) {
  const { t } = useTranslation();

  return (
    <div className="chart-container">
      <Doughnut
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            // title: {
            //   display: true,
            //   text: t('active-alarms') ,
            //   align: 'start',
            //   color: 'blue',
            //   font: {
            //     size: 14
            //   },
            //   padding: {
            //     top: 30,
            //     bottom: 30
            //   },
            //   responsive: true,
            //   animation: {
            //     animateScale: true,
            //   }
            // }, 
            legend: {
              display: true,
              position: "bottom",
              align: "center",
              labels: {
                usePointStyle: true,
                pointStyle: "circle",
                font: {
                  size: 11
                },
                
              },
            },
          },
          layout: {
            // padding: {
            //   top: 20
            // }
          },
          cutout: 120,
        }
        }
      />
    </div>
  );
}
export default DoughnutChart;