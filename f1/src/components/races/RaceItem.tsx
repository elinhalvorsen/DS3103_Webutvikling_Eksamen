// Interface for hva hvert RaceItem skal inneholde
interface IRaceItem {
    winner: string;
    time: string;
    grandPrix: string;
    lap: number;
}

const RaceItem = ({ winner, time, grandPrix, lap }: IRaceItem) => {
    return (
        <div className="bg-light rounded mt-3">
            <h3 className="bg-success rounded text-white">{grandPrix}</h3>
            <p>Resultat fra forrige løp</p>
            <p>Vinner: {winner}</p>
            <p>Total tid: {time}</p>
            <p>Antall runder: {lap}</p>
        </div>
    );
};

// Eksporterer komponenten
export default RaceItem;
