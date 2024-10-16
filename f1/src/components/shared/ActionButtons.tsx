interface IActionButtons {
    actionTab: number;
    setActionTab: (tabIndex: number) => void;
}

// Komponent for å vise knapper for å registrere, redigere og slette
const ActionButtons = ({ actionTab, setActionTab }: IActionButtons) => {
    return (
        <div className="d-flex justify-content-end gap-2">
            <button
                onClick={() => setActionTab(0)}
                className={`btn btn-${actionTab === 0 ? "danger" : "light"}`}
            >
                Registrer
            </button>
            <button
                onClick={() => setActionTab(1)}
                className={`btn btn-${actionTab === 1 ? "danger" : "light"}`}
            >
                Rediger
            </button>
            <button
                onClick={() => setActionTab(2)}
                className={`btn btn-${actionTab === 2 ? "danger" : "light"}`}
            >
                Slett
            </button>
        </div>
    );
};

// Eksporterer komponenten
export default ActionButtons;
