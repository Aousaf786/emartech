
import { useState } from 'react';
import Selector from '../common/selector';

const ManageClaimsComponent = () => {
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
        <>
            <div className="manage-Inventory">
                <h1>Manage Claims</h1>
                <p>Seller Fulfilled</p>
                <div className="row mt-4" >
                    <div className="col-lg-12 d-flex gap-2">
                        <div className="slect-lebal">
                            <Selector
                                label="Fulfillment Channel"
                                value={selectedValue}
                                options={options}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="slect-lebal">
                            <label>Claim Date</label>
                            <div className="d-flex align-items-center gap-2">
                                <input type="date" name="" id="" />
                            </div>
                        </div>
                        <div className="slect-lebal">

                            <Selector
                                label="Date Range"
                                value={selectedValue}
                                options={options}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ManageClaimsComponent;