// Komponent for å vise knapper for både å kjøre og fjerne race
const ActionButtonRace = ({ actionTab, setActionTab }) => {
    return (
        <div className="d-flex justify-content-end gap-2 mb-3">
            <button
                onClick={() => setActionTab(0)}
                className={`btn btn-${actionTab === 0 ? "danger" : "light"}`}
            >
                Kjør race
            </button>
            <button
                onClick={() => setActionTab(1)}
                className={`btn btn-${actionTab === 1 ? "danger" : "light"}`}
            >
                Fjern race
            </button>
        </div>
    );
};

// Eksporterer komponenten
export default ActionButtonRace;
