import { useContext, useState, useEffect } from "react";
import { RaceContext } from "../../contexts/RaceContext";
import { TeamContext } from "../../contexts/TeamContext";
import { toast } from "react-toastify";
import { DriverContext } from "../../contexts/DriverContext";
import Spinner from "../shared/Spinner";
import SelectItem from "../shared/SelectItem";

//Trenger ikke kommentere her enda, den er ikke ferdig------------------
const AddRace = ({ setDisplayRaces, setDisplayTeams, setHasStarted }) => {
    const { races, getRacesById } = useContext(RaceContext);
    const { teams } = useContext(TeamContext);
    const { drivers } = useContext(DriverContext);
    const [selectedTeam, setSelectedTeam] = useState("");
    const [selectedRace, setSelectedRace] = useState("");
    const [resetKey, setResetKey] = useState(0);
    const [loading, setLoading] = useState(false);

    // Starter løp med random utfall.
    const startRace = () => {
        if (!selectedTeam || !selectedRace) {
            toast.error("Du må velge lag og bane før du starter!");
            return;
        }

        // Denne gjør slik at den spinner står og går litt før man får se resultat.
        setLoading(true);
        setTimeout(() => {
            toast.success("Sjekk resultat av race lengre ned");
            setHasStarted(true);
            setLoading(false);
        }, 2000);
    };

    // Resetter valg av bane, resultat av løp og lag.
    const resetRace = () => {
        setDisplayRaces([]);
        setDisplayTeams([]);
        setSelectedTeam("");
        setSelectedRace("");
        setResetKey(resetKey + 1);
        setHasStarted(false);
    };

    return (
        <section key={resetKey} className="row g-2">
            <article className="col-12 bg-success p-3 rounded shadow text-white">
                <h3>Lag og bane</h3>
                <p>Velg lag og bane før du starter løpet</p>
                <hr />

                {/* Her bruker kan velge lag og bane*/}
                <SelectItem
                    id="team"
                    defalutValue="Velg lag du vil styre"
                    ariaLabel="velg lag du vil styre"
                    label="Lag"
                    onChange={(e) => {
                        setSelectedTeam(e.currentTarget.value);
                        setDisplayTeams(
                            teams.filter(
                                (team) =>
                                    e.currentTarget.value === team.manufacturer
                            )
                        );
                    }}
                    options={teams.map((team, i) => ({
                        value: team.manufacturer,
                        label: team.manufacturer,
                    }))}
                />
                <SelectItem
                    id="grand-prix"
                    defalutValue="Velg en bane"
                    label="Bane"
                    onChange={async (e) => {
                        setSelectedRace(e.currentTarget.value);
                        const selectedRace = await getRacesById(
                            e.currentTarget.value
                        );
                        setDisplayRaces([await selectedRace]);
                    }}
                    options={races.map((race, i) => ({
                        value: race.id,
                        label: race.grandPrix,
                    }))}
                />

                {/* Knapper for lagring og reset*/}
                <div className="d-flex justify-content-between mt-3">
                    {!loading && (
                        <>
                            <button
                                onClick={startRace}
                                className="btn btn-danger border-white"
                            >
                                Start
                            </button>
                            <button
                                onClick={resetRace}
                                className="btn btn-light"
                            >
                                Kjør nytt løp
                            </button>
                        </>
                    )}

                    {/* Loading-spinner som skal illustrerer at den kalkulerer resultatet av løpet */}
                    {loading && <Spinner title={"Kalkulerer løp...."} />}
                </div>
            </article>
        </section>
    );
};
export default AddRace;
