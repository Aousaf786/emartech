import { useState } from "react";
import Selector from "../common/selector";

const SaleComponent = ({ refreshButton }: any) => {
    const [selectedValue, setSelectedValue] = useState('');

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];
    const handleChange = (event: any) => {
        setSelectedValue(event.target.value);
    };
    return (
        <div className="row mt-4" >
            <div className="col-lg-12 d-flex justify-content-between align-items-end">
                <div className=" d-flex gap-2">
                    <div className="slect-lebal">
                        <label>Date</label>
                        <div className="d-flex align-items-center gap-2">
                            <input type="date" name="" id="" />
                        </div>
                    </div>


                    <div className="slect-lebal">
                        <Selector
                            label="Sales Breakdown"
                            value={selectedValue}
                            options={options}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="slect-lebal">
                        <Selector
                            label="Fulfilment Channel"
                            value={selectedValue}
                            options={options}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            {refreshButton}
        </div>


    )
}

export default SaleComponent;