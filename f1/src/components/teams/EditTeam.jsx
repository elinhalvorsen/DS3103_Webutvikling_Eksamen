import { useState, useContext, useEffect } from "react";
import { TeamContext } from "../../contexts/TeamContext";
import { DriverContext } from "../../contexts/DriverContext";
import { toast } from "react-toastify";
import SelectItem from "../shared/SelectItem";
import InputItem from "../shared/InputItem";

// Funksjon for å redigere fører
const EditTeam = () => {
    const { teams, editTeam, getTeamsFromService, getTeamsById } =
        useContext(TeamContext);
    const [resetKey, setResetKey] = useState(0);
    const { drivers, getDriverById } = useContext(DriverContext);
    const [selectedId, setSelectedId] = useState("");

    // Setter de verdiene bruker kan oppdatere.
    const [teamsToUpdate, setTeamsToUpdate] = useState({
        manufacturer: "",
        driver1: "",
        driver2: "",
    });

    useEffect(() => {
        if (selectedId) {
            getTeam(selectedId);
        }
    }, [selectedId]);

    // Henter det bruker velger
    const handleTeamSelection = (e) => {
        setSelectedId(e.currentTarget.value);
    };

    // Henter team etter id, som blir brukt i selecten.
    const getTeam = async (id) => {
        try {
            const team = await getTeamsById(id);
            setTeamsToUpdate(team);
        } catch (err) {
            return console.log(err);
        }
    };

    // Legger inn den nye føreren.
    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget;
        setTeamsToUpdate((prev) => ({ ...prev, [name]: value }));
    };

    // Lagrer oppdatert fører i databasen.
    const saveChanges = async () => {
        try {
            const result = await editTeam(teamsToUpdate);
            if (result === true) {
                toast.success("Lag er redigert");
            } else {
                toast.error("Du må fylle inn feltene først");
            }

            // Resetter feltet etter bruker trykker lagre.
            setResetKey(resetKey + 1);
            // Gjør at oppdateringen skjer imiddelbart
            getTeamsFromService();
        } catch (err) {
            return console.log(err);
        }
    };

    return (
        <section
            key={resetKey}
            id="section__register__page-teams__left"
            className="row"
        >
            <article className="col-md-12">
                <div className="bg-warning p-3 rounded">
                    <h3 className="text-center">Rediger lag</h3>

                    {/* Her kan bruker velge hvilket lag de ønsker å redigere */}
                    <SelectItem
                        id="team-edit"
                        defalutValue="Velg et lag å redigere"
                        ariaLabel="velg fører å endre på"
                        label="Lag"
                        onChange={handleTeamSelection}
                        options={teams.map((team, i) => ({
                            value: team.id,
                            label: team.manufacturer,
                        }))}
                    />
                    {/* Nytt navn på lag */}
                    <InputItem
                        id="name__team-edit"
                        onChange={handleInputChange}
                        className="form-control"
                        type="text"
                        name="manufacturer"
                        label="Navn"
                    />
                    {/* Her kan bruker velge ny fører 1 og 2 */}
                    <SelectItem
                        id="driver1__edit"
                        defalutValue="Velg fører 1"
                        ariaLabel="velg hvilken fører 1 du ønsker å bytte ut"
                        label="Fører 1: "
                        onChange={async (e) => {
                            const driver = await getDriverById(
                                e.currentTarget.value
                            );
                            setTeamsToUpdate((prev) => ({
                                ...prev,
                                ["driver1"]: driver.name,
                            }));
                            console.log(driver.name);
                        }}
                        options={drivers.map((driver, i) => ({
                            value: driver.id,
                            label: driver.name,
                        }))}
                    />
                    <SelectItem
                        id="driver2__edit"
                        defalutValue="Velg fører 2"
                        ariaLabel="velg hvilken fører 2 du ønsker å bytte ut"
                        label="Fører 2: "
                        onChange={async (e) => {
                            const driver = await getDriverById(
                                e.currentTarget.value
                            );
                            setTeamsToUpdate((prev) => ({
                                ...prev,
                                ["driver2"]: driver.name,
                            }));
                            console.log(driver.name);
                        }}
                        options={drivers.map((driver, i) => ({
                            value: driver.id,
                            label: driver.name,
                        }))}
                    />
                    {/*Slenger på border rundt knappen for å tydeliggjøre den mer */}
                    <button
                        onClick={saveChanges}
                        className="btn btn-success border-white mt-3"
                    >
                        Lagre
                    </button>
                </div>
            </article>
        </section>
    );
};

// Eksporterer komponenten
export default EditTeam;
