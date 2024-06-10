import { BarChart } from '@mui/x-charts/BarChart';

const BarChat = () => {
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 6767, 887, 775, 5644, 684];
    return (
        <BarChart
            borderRadius={10}
            xAxis={[{
                scaleType: 'band', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May ', 'Jun', 'Jul', 'Aug', 'Sup', 'Oct', 'Nov ', 'Dec'], colorMap: {
                    type: 'piecewise',
                    thresholds: [new Date(2021, 1, 1), new Date(2023, 1, 1)],
                    colors: ['#39C64E']

                }
            }
            ]
            }
            series={[{ data: uData, }]}
            width={600}
            height={300}

        />
    )
}

export default BarChat;
