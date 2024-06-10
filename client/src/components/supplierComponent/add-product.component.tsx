import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchComponent } from "../inputs/search";
import AddProductTableComponent from "./add-product-table.component";


const AddProductComponent = () => {
    const navigate = useNavigate(); // Initialize useHistory hook
    const [isNewProduct, setIsNewProduct] = useState(false); // State to track if it's a new product
    const [showTable, setShowTable] = useState(false); // State to track whether to show the table component

    // Function to handle search
    const handleSearch = (query: any) => {
        // Your search logic here
        setShowTable(true); // Show the table when a search is performed
    };



    const handleRadioButtonClick = (event: any) => {
        const value = event.target.id === 'flexRadioDefault2';
        setIsNewProduct(value);
        navigate(value ? '/add-new-product' : '/existing-product');
    };

    return (
        <>
            <div className="manage-Inventory">
                <h1>Add Product</h1>
                <div className={showTable ? 'add-project-content add-project-content-class' : "add-project-content "}>
                    <div className="add-project-inner-content">
                        <div className="inner-content">
                            <h6>To begin adding products</h6>
                            <h1>Find your products in Emartech’s catalog</h1>
                            <div className="d-flex gap-4">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                        checked={isNewProduct}
                                        onChange={handleRadioButtonClick}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Search for Existing product
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault2"
                                        checked={isNewProduct}
                                        onChange={handleRadioButtonClick}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Add New Product
                                    </label>
                                </div>
                            </div>
                            <SearchComponent onSearch={handleSearch} />
                        </div>
                        {showTable ? ( // Conditionally render based on showTable state
                            <AddProductTableComponent />
                        ) : (
                            <>

                                <div className="row">
                                    <div className="col-lg-4 mt-3" style={{ borderLeft: "1px solid #747474" }}>
                                        <div className="description">
                                            <p>I am Adding a Product
                                                Not Sold on Emartech</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-3" style={{ borderLeft: "1px solid #747474" }}>
                                        <div className="description">
                                            <p>I am Uploading a file to add
                                                Multiple products</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-3" style={{ borderLeft: "1px solid #747474", borderRight: "1px solid #747474" }}>
                                        <div className="description">
                                            <p>I want to Learn how to List
                                                a Product</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                    </div>
                </div>


            </div>

        </>
    )
}

export default AddProductComponent;