
import image from "../../../assets/images/Rectangle4777.svg";
import ImageUploader from "./imageuploader";
const TableDtailComponent = () => {
    return (
        <>
            <div className="Table-Dtail">
                <div className="inner-content">
                    <img src={image} alt="img not found" />
                    <div>
                        <p>Signature Acrylic Colours – 100 gm</p>
                        <p>EAN: <span>A37001BBA</span></p>
                        <p>Sales Rank: <span>122</span></p>
                        <p>Offers: <span>1 Used & New</span></p>
                        <p className="mb-0">Competing Marketplace Offers:</p>
                        <span>1 New  from AED 35.00+ AED 0.00 shipping</span>
                    </div>
                </div>
            </div>
            <div className="input-field-data">
                <div className="input-field">
                    <ImageUploader />
                    <div className="mb-3">
                        <label htmlFor="" className="label">Contribution SKU:</label>
                        <input className="input" type="text" placeholder="Example ABC123" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="label">*Quantity:</label>
                        <input className="input" type="text" placeholder="142" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="label">Handling Time:</label>
                        <input className="input" type="text" placeholder="0" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="label">Restock Date:</label>
                        <input className="input" type="text" placeholder="15/04/2024" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="label">*Your Price:</label>
                        <input className="input" type="text" placeholder="AED 14.99" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="label">Sale Price:</label>
                        <input className="input" type="text" placeholder="AED 14.99" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="label">Sale Start Date:</label>
                        <input className="input" type="text" placeholder="15/04/2024" />
                    </div>
                    <div className="mb-3 d-md-flex align-items-md-center">
                        <label htmlFor="" className="label">Offering Condition Type:</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">New</option>
                            <option value="2">Exisitng</option>

                        </select>
                    </div>
                    <hr className="my-5" />
                    <p>Item Weight?</p>
                    <div className="mb-3">
                        <label htmlFor="" className="label">Item Weight:</label>
                        <input className="input" type="text" placeholder="Example:  30, 1.5" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="label">Item Weight Units:</label>
                        <input className="input" type="text" placeholder="Example: Pounds, Grams" />
                    </div>
                    <hr />
                    <div className="d-flex gap-2 mt-md-5 justify-content-center">

                        <p>*Fulfilment Channel:</p>
                        <div className="radio-button">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Emartech will ship this item <br />
                                    (Fulfilled by Emartech)
                                </label>
                            </div>
                            <hr />
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    I will ship this item myself<br />
                                    (Fulfilled by Marchant)
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end gap-3 mt-3">
                <button className="button-list Cancel-btn ">Cancel</button>
                <button className="button-list ">Save & Finish</button>
            </div>
        </>
    )
}

export default TableDtailComponent;