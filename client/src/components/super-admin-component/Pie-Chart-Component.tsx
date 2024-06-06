
import { PieChart } from '@mui/x-charts/PieChart';
const PieChartComponent = ({ data, centerImage }: any) => {



    const size = {
        width: 400,
        height: 200,
    };


    return (
        <div className='pie-chart'>
            <PieChart series={[{ data, innerRadius: 80, }]} {...size}  >
            </PieChart>
        </div>
    )
}

export default PieChartComponent;
