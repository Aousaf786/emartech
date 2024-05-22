import { useState } from "react";
import Selector from "../common/selector";
import { SearchComponent } from "../inputs/search";
import ShippingtableComponent from "./Shippingtable.Component";

const ShippingQueueComponent = () => {
    const [searchQuery, setSearchQuery] = useState("");
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
                <h1>Shipping Queue</h1>
                <p>This page provides details on all the shipments you are working on and those you have sent to Emartech.</p>
                <div className="row mt-4">
                    <div className="col-lg-6 d-flex gap-2">
                        <Selector
                            label=""
                            value={selectedValue}
                            options={options}
                            onChange={handleChange}
                        />
                        <Selector
                            label=""
                            value={selectedValue}
                            options={options}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='col-lg-6'>
                        <SearchComponent onSearch={setSearchQuery} />
                    </div>
                </div>
            </div>
            <ShippingtableComponent searchQuery={searchQuery} />
        </>
    )
}

export default ShippingQueueComponent