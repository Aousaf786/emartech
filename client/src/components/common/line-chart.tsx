import { LineChart } from "@mui/x-charts/LineChart";

const Linechart = () => {
    return (
        <LineChart
            xAxis={[{
                data: [1, 2, 3, 5, 8, 10], colorMap: {
                    type: 'piecewise',
                    thresholds: [new Date(2021, 1, 1), new Date(2023, 1, 1)],
                    colors: ['rgba(57, 198, 78, 0.16)'
                    ]

                }
            }]}
            series={[
                {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    area: true,
                },
            ]}
            width={600}
            height={300}
        />
    )
}

export default Linechart;
