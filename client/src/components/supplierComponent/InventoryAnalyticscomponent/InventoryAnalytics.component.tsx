
import { useState } from 'react'
import Select from 'react-select'
import Selector from '../../common/selector'

const InventoryAnalyticsComponent = () => {

    const [value, setValue] = useState('')
    const [selectedValue, setSelectedValue] = useState('');

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
        // Add more options as needed
    ];
    const handleChange = (event: any) => {
        setSelectedValue(event.target.value);
    };

    const changeHandler = (value: any) => {
        setValue(value)
    }
    const customStyles = {
        menu: (provided: any, state: any) => ({
            ...provided,
        }),

        control: (provided: any, state: any) => ({
            ...provided,
            borderRadius: "4px;",
            height: "28px",
            backgroundColor: "#fff",
            color: "#747474",
            border: "1px solid #E3E3E3",
            zIndex: "999",
            fontSize: "14px",
            boxShadow: "none",
            width: "159px",

        }),
        classNamePrefix: (provided: any, state: any) => ({
            ...provided,
            borderRadius: "4px",
            backgroundColor: "tranprent",
            color: "#9A9A9A",
            border: "1px solid #E3E3E3",
        }),
        indicatorSeparator: (provided: any) => ({
            ...provided,
            display: "none",
        }),
        indicatorContainer: (provided: any) => ({
            ...provided,
            color: "#fff",
            "&:hover": {
                color: "#fff",
                borderColor: " #E7E7E7",
            },
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            zIndex: "999",
            backgroundColor: state.isSelected || "#F8F8F8",
            // backgroundColor: theme === "dark" ? "#000" : "#fff",
            height: "38px",
            color: "#7A7979",
            "&:hover": {
                backgroundColor: "#fff",
            },
        }),
    };
    return (
        <>
            <div className="manage-Inventory">
                <h1>Inventory Analytics</h1>
                <h4>Fulfilled Sales</h4>
                <div className="row mt-4" >
                    <div className="col-lg-12 d-flex gap-2">
                        <div className="slect-lebal">
                            <Selector
                                label="Products"
                                value={selectedValue}
                                options={options}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="slect-lebal">
                            <label>Country</label>
                            <Select options={options} value={value} onChange={changeHandler} styles={customStyles} />
                        </div>
                        <div className="slect-lebal">
                            <label>Purchase date range</label>
                            <div className="d-flex align-items-center gap-2">
                                <input type="date" name="" id="" />
                                <span>-</span>
                                <input type="date" name="" id="" />
                            </div>
                        </div>
                        <div className="slect-lebal">
                            <Selector
                                label="Granularity"
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

export default InventoryAnalyticsComponent