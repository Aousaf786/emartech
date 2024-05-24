import { useState } from "react";
import { SearchComponent } from "../inputs/search";
import ShippingtableComponent from "./Shippingtable.Component";

const ShippingQueueComponent = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <>
            <div className="manage-Inventory">
                <h1>Shipping Queue</h1>
                <p>This page provides details on all the shipments you are working on and those you have sent to Emartech.</p>
                <div className="row mt-4">
                    <div className="col-lg-6 d-flex gap-2">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Last Updated</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Status</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
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