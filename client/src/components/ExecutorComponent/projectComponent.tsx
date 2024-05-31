import { useState } from "react";
import Selector from "../common/selector";

const ProjectComponent = ({ refreshButton }: any) => {
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
                        <Selector
                            label="Status"
                            value={selectedValue}
                            options={options}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="slect-lebal">
                        <Selector
                            label="Project Date"
                            value={selectedValue}
                            options={options}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {refreshButton}
            </div>

        </div>
    )
}

export default ProjectComponent;