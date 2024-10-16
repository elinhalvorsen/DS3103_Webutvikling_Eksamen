import { IRaceContext } from "../../interfaces/RaceTypes";
import RaceItem from "./RaceItem";

// Kompontent som gjør det mulig å vise løpene
const RaceList = ({ races }: IRaceContext) => {
    const displayRaces = () => {
        const allRaces = races.map((race, i) => (
            <RaceItem
                key={i}
                winner={race.winner}
                time={race.time}
                grandPrix={race.grandPrix}
                lap={race.lap}
            />
        ));
        return allRaces;
    };
    return <article className="text-center">{races && displayRaces()}</article>;
};

// Eksporterer komponenten
export default RaceList;
