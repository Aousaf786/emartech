

const Selector = ({ label, value, options, onChange }: any) => {
    return (
        <div>
            {label && <label className="form-label">{label}</label>}
            <select className="form-select" value={value} onChange={onChange} aria-label="Default select example">
                {options.map((Option: any, index: any) => (
                    <option key={index} value={Option.value}>
                        {Option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Selector;
