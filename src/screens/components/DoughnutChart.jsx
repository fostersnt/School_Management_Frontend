import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, SubTitle } from "chart.js";
import { Doughnut } from "react-chartjs-2";
// import '../../styles/Charts.css'

ChartJS.register(ArcElement, Tooltip, Legend, Title, SubTitle);

const DoughnutChart = ({ data_set, chart_width, chart_height }) => {

    return (
        <div className="chart_container">
            <Doughnut data={data_set} width={chart_width} height={chart_height} options={{
                responsive: false,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: "User Growth by Month",   // main title
                        font: { size: 18, weight: "bold" },
                        color: "#333"
                    },
                    subtitle: {
                        display: true,
                        text: "This chart shows users added in Jun–Aug", // description
                        font: { size: 14 },
                        color: "#666",
                        padding: { top: 10, bottom: 20 }
                    }
                }
            }} />
        </div>
    );
};

export default DoughnutChart;
