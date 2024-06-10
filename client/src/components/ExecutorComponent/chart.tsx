

import BarChat from '../common/barChat';
import Linechart from '../common/line-chart';
import NotifcationComponent from './notifcationComponent';
const ExecutorChart = () => {


    return (
        <div className="row">
            <div className="col-lg-8">
                <div className="chart-component executor-chart" style={{ height: "auto" }}>
                    <h1>Weekly Overview</h1>
                    <BarChat />
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
                    <Linechart />
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