
import { useState } from 'react';
import Selector from '../common/selector';
const cardData = [
    {
        description: "Average Return Rate",
        heading: "3.51 %"
    },
    {
        description: "Total Return Units",
        heading: "2 Units"
    },
    {
        description: "Number of Products with Return",
        heading: "1 SKU"
    }
]

const ManageReturnsComponent = () => {
    const [value, setValue] = useState('')
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
                <h1>Manage Returns</h1>
                <p>Seller Fulfilled</p>
                <div className="row mt-4 d-flex justify-content-between align-items-end" >
                    <div className="col-lg-8 ">
                        <div className=" d-flex gap-2">
                            <div className="slect-lebal">
                                <Selector
                                    label="Date Range"
                                    value={selectedValue}
                                    options={options}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="slect-lebal">
                                <Selector
                                    label="Product Group"
                                    value={selectedValue}
                                    options={options}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="slect-lebal">
                                <div className="slect-lebal">
                                    <Selector
                                        label="Marketplace"
                                        value={selectedValue}
                                        options={options}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {cardData.map((item, i) => (
                        <div className="col-lg-4" key={i}>
                            <div className="box-card">
                                <p>{item.description}</p>
                                <h2>{item.heading}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default ManageReturnsComponent;