

import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import NotifcationComponent from './notifcationComponent';
const ExecutorChart = () => {
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 6767, 887, 775, 5644, 684];

    return (
        <div className="row">
            <div className="col-lg-8">
                <div className="chart-component executor-chart" style={{ height: "auto" }}>
                    <h1>Weekly Overview</h1>
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
                    <div className="d-flex gap-1 justify-content-between">
                        <div className='d-flex align-item-center'>
                            <h1>30%</h1>
                            <p className='description'>Your sales performance is 30% <br />
                                better compare to last month</p>
                        </div>
                        <button className='chart-button w-25'>
                            Details
                        </button>

                    </div>
                </div>

                <div className="chart-component executor-chart" style={{ height: "auto", marginTop: "10px" }}>

                    <h1>Sales Report</h1>
                    <h5>Your total saving so far</h5>
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
                    <div className="d-flex gap-1 justify-content-end">
                        <button className='chart-button w-25'>
                            Details
                        </button>

                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <NotifcationComponent />
            </div>
        </div>
    )
}

export default ExecutorChart;