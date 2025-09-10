import '../../styles/AdminDashboard.css';
import BarChart from '../components/BarChart';
import CustomCard from '../components/CustomCard';
import DoughnutChart from '../components/DoughnutChart';

const AdminDashboard = () => {
    const chart_data_set = {
        labels: ['Jun', 'Jul', 'Aug'],
        datasets: [
            {
                id: 1,
                label: 'This is user data',
                data: [5, 6, 7],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                // backgroundColor: [
                //     'rgba(255, 99, 132, 0.2)',
                //     'rgba(54, 162, 235, 0.2)',
                //     'rgba(255, 206, 86, 0.2)',
                //     'rgba(75, 192, 192, 0.2)',
                //     'rgba(153, 102, 255, 0.2)',
                //     'rgba(255, 159, 64, 0.2)',
                // ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }
    return (
        <>
        <div className="cards_container">
            <CustomCard title="School Fees" amount={2000}/>
            <CustomCard title="School Fees" amount={2000}/>
            <CustomCard title="School Fees" amount={2000}/>
            <CustomCard title="School Fees" amount={2000}/>
        </div>
            <div className='container'>
                <DoughnutChart data_set={chart_data_set} chart_width={300} chart_height={300} chart_title={'User data'} chart_sub_title={'A visual representation of users'} />
                <DoughnutChart data_set={chart_data_set} chart_width={300} chart_height={300} />
                <BarChart chart_width={300} chart_height={300}/>
                <BarChart chart_width={300} chart_height={300}/>
                <BarChart chart_width={300} chart_height={300}/>
            </div>
            {/* <div className='container'>
                <BarChart/>
                <BarChart/>
                <BarChart/>
                <BarChart/>
                <BarChart/>
            </div> */}
        </>
    );
};

export default AdminDashboard;
