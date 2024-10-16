//Inputfelt som blir brukt flere steder i koden.
const InputItem = ({ id, name, onChange, type, ariaLabel, label }) => {
    return (
        <>
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input
                id={id}
                name={name}
                className="form-control"
                onChange={onChange}
                type={type}
                aria-label={ariaLabel}
            />
        </>
    );
};

// Eksporterer komponenten
export default InputItem;
