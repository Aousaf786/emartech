

import userProfile1 from "../../assets/images/profile-icon-chart.svg";
import BarChat from '../common/barChat';
import Linechart from '../common/line-chart';
import PieChartComponent from './Pie-Chart-Component';
const SuperChart = () => {
    const data2 = [
        { value: 5, label: 'Option A 2.3K', color: '#CCCCCC', },
        { value: 5, label: 'Option B $5.6K', color: '#F4A79D', },
        { value: 5, label: 'Option C 5.9K', color: '#F68D2B' },
        { value: 5, label: 'Option D 5.9K', color: '#FFD200' },
    ];
    const data1 = [
        { value: 5, label: 'Spent $5.6K', color: '#39C64E', },
        { value: 5, label: 'Left 5.9K', color: '#39C64E' },
    ];

    return (
        <>
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
                </div>
                <div className="col-lg-4">
                    <div className="chart-component " style={{ height: "95%", marginTop: "10px" }}>
                        <PieChartComponent data={data2} centerImage={userProfile1} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8">
                    <div className="chart-component executor-chart" style={{ height: "auto", marginTop: "10px" }}>
                        <div className="d-flex align-items-center justify-content-between">
                            <h1>Sales Funnel</h1>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>This Month</option>
                                <option value="2">Weekly</option>
                                <option value="3">Yearly</option>
                            </select>
                        </div>
                        <Linechart />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="chart-component executor-chart" style={{ height: "95%", marginTop: "10px" }}>
                        <h1 className='heading'>Monthly Income $5000</h1>
                        <PieChartComponent data={data1} centerImage={userProfile1} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SuperChart;