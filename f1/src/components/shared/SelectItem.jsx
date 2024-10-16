//Må se på denne
const SelectItem = ({
    id,
    onChange,
    options,
    defalutValue,
    label,
    ariaLabel,
}) => {
    return (
        <>
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <select
                id={id}
                className="form-select"
                onChange={onChange}
                aria-label={ariaLabel}
            >
                <option>{defalutValue}</option>
                {options.map((option, i) => (
                    <option key={i} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    );
};

// Eksporterer komponenten
export default SelectItem;
