import React from "react";
import '../../styles/Charts.css'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  SubTitle
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register the required chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, SubTitle);

const BarChart = ({ data_set, chart_width, chart_height, chart_title, chart_sub_title }) => {
  const data = {
    labels: ["Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "Sales",
        data: [120, 150, 180, 90, 200],
        backgroundColor: "rgba(54, 162, 235, 0.7)",   // blue bars
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Expenses",
        data: [100, 130, 140, 70, 150],
        backgroundColor: "rgba(255, 99, 132, 0.7)",   // red bars
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Monthly Sales vs Expenses",
        font: { size: 18, weight: "bold" },
        color: "#333",
      },
      subtitle: {
        display: true,
        text: "This chart compares sales and expenses for the last 5 months",
        font: { size: 14 },
        color: "#666",
        padding: { top: 5, bottom: 15 },
      },
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
