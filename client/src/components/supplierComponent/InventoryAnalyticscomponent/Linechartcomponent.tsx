
import { LineChart } from '@mui/x-charts/LineChart';
const Linechartcomponent = () => {

    return (
        <div className='LineChart-component'>
            <LineChart
                xAxis={[{
                    data: [1, 2, 3, 5, 8, 10], colorMap: {
                        type: 'piecewise',
                        thresholds: [new Date(2021, 1, 1), new Date(2023, 1, 1)],
                        colors: ['#39C64E']

                    }
                }]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                ]}
                // width={700}
                height={300}
                grid={{ vertical: false, horizontal: true }}
            />
            <p>Purchase Date</p>
        </div>
    )
}

export default Linechartcomponent;