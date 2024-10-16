interface ISpinner {
    title?: string;
}
//Loading spinner
const Spinner = ({ title }: ISpinner) => {
    return (
        <div>
            <strong>{title}</strong>
            <div
                className="spinner-border ms-auto"
                role="status"
                aria-hidden="true"
            ></div>
        </div>
    );
};

// Eksporterer komponenten
export default Spinner;
