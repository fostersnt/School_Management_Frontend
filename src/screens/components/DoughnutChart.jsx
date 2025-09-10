import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({data_set, chart_width, chart_height}) => {

    return (
        <Doughnut data={ data_set } />
    );
};

export default DoughnutChart;
