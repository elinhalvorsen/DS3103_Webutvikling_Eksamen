import RaceList from "../components/races/RaceList";
import MainHeading from "../components/shared/MainHeading";
import Subtitle from "../components/shared/Subtitle";
import AddRace from "../components/races/AddRace";
import RaceResult from "../components/races/RaceResult";
import { useState } from "react";
import DisplayTeam from "../components/races/DisplayTeam";

import ActionButtonRace from "../components/shared/ActionButtonRace";

// Race siden der alle komponenter blir hentet inn.
const RacePage = () => {
    const [displayRaces, setDisplayRaces] = useState([]);
    const [displayTeams, setDisplayTeams] = useState([]);
    const [hasStarted, setHasStarted] = useState(false);

    return (
        <>
            <MainHeading title={"Race"} />
            <Subtitle
                title={"Kjør et race"}
                text={
                    "Her kan velge hvilket lag du vil være sjef over. Følg med på hvilke plasser førerne dine kommer på."
                }
            />

            <AddRace
                setHasStarted={setHasStarted}
                setDisplayRaces={setDisplayRaces}
                setDisplayTeams={setDisplayTeams}
            />

            <DisplayTeam teams={displayTeams} />
            <RaceList races={displayRaces} />

            {hasStarted &&
                displayRaces.length > 0 &&
                displayTeams.length > 0 && <RaceResult />}
        </>
    );
};

//Eksporteres og brukes i App.tsx
export default RacePage;
