import { useContext, useState } from "react";
import { TeamContext } from "../../contexts/TeamContext";
import { DriverContext } from "../../contexts/DriverContext";
import { toast } from "react-toastify";
import SelectItem from "../shared/SelectItem";
import InputItem from "../shared/InputItem";

// Legge til nytt lag
const AddTeam = () => {
    const { addNewTeam, getTeamsFromService } = useContext(TeamContext);
    const { drivers } = useContext(DriverContext);
    const [resetKey, setResetKey] = useState(0);

    // Setter verdiene til team
    const [team, setTeam] = useState({
        manufacturer: "",
        image: null,
        driver1: "",
        driver2: "",
    });

    // Oppdatere ut ifra bruker input
    const handleChange = (e) => {
        const { name, value, files } = e.currentTarget;
        console.log(name, value, files);
        setTeam((preTeam) => ({
            ...preTeam,
            [name]:
                name === "driver1" || name === "driver2"
                    ? value
                    : name === "image"
                    ? files[0]
                    : preTeam.image,
        }));
    };

    // Asynkron funksjon for å lagre laget og vise en toast-melding
    const saveTeam = async () => {
        try {
            const newTeam = {
                manufacturer: team.manufacturer,
                image: team.image.name,
                driver1: team.driver1,
                driver2: team.driver2,
            };
            // Legger til nytt team i databasen
            await addNewTeam(newTeam, team.image);
            toast.success("Nytt lag er lagt til");

            // Resetter input/select feltene
            setResetKey(resetKey + 1);
            getTeamsFromService();
        } catch (err) {
            toast.error("Du må fylle inn feltene først!");
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
                <div className="bg-dark p-3 rounded text-white">
                    <h3 className="text-center">Registrer nytt lag</h3>
                    {/* Bruker input komponent der bruker kan skrive inn navn på laget */}
                    <InputItem
                        id="driver1__add"
                        name="name"
                        type="text"
                        aria-label="Velg fører 1"
                        onChange={(e) => {
                            team.manufacturer = e.target.value;
                            setTeam(team);
                        }}
                        label="Navn"
                    />
                    {/* Select til bruker for å velge fører 1 og 2 */}
                    <SelectItem
                        id="driver-edit"
                        defalutValue="Velg fører 1"
                        label="Velg fører"
                        aria-label="Velge fører 1 fra drivers"
                        placeholder="Fører 1:"
                        onChange={(e) => {
                            team.driver1 = e.target.value;
                            setTeam(team);
                        }}
                        options={drivers.map((driver, i) => ({
                            value: driver.name,
                            label: driver.name,
                        }))}
                    />
                    <SelectItem
                        id="driver2__add"
                        defalutValue="Velg fører 2"
                        label="Velg fører"
                        aria-label="Fører 2"
                        placeholder="Fører 2:"
                        onChange={(e) => {
                            team.driver2 = e.target.value;
                            setTeam(team);
                        }}
                        options={drivers.map((driver, i) => ({
                            value: driver.name,
                            label: driver.name,
                        }))}
                    />
                    {/* Her bruker kan laste opp bilde av bil */}
                    <InputItem
                        id="image__car"
                        className="form-control"
                        name="image"
                        type="file"
                        onChange={handleChange}
                        ariaLabel="Last opp bilde av fører"
                        label="Last opp bilde"
                    />
                    {/*Slenger på border rundt knappen for å tydeliggjøre den mer */}
                    <button
                        onClick={saveTeam}
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
export default AddTeam;
