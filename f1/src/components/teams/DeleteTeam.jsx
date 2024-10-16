import axios from "axios";
import { TeamContext } from "../../contexts/TeamContext";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import SelectItem from "../shared/SelectItem";

// Slette et lag
const DeleteTeam = () => {
    const { teams, deleteTeam, getTeamsFromService } = useContext(TeamContext);
    const [id, setId] = useState([]);

    // Henter id'en til teams utifra hvilken fører bruker velger.
    const handleTeamSelection = async (e) => {
        const selectedId = e.currentTarget.value;
        setId(selectedId);
    };

    // Asynkron funksjon for å håndtere sletting av lag
    const handleDeleteTeam = async () => {
        try {
            const result = await deleteTeam(id);
            if (result === true) {
                toast.success("Lag er slettet");
                getTeamsFromService();
            } else {
                toast.error("Du må velge et lag før du kan slette");
            }
        } catch (err) {
            return console.log(err);
        }
    };

    return (
        <section id="section__register__page-teams__left" className="row">
            <article className="col-md-12 mb-4">
                <div className="bg-danger p-3 rounded text-white">
                    <h3 className="text-center">Slett lag</h3>
                    <p>
                        Tenk deg nøye gjennom før du sletter et lag. Da er det
                        borte for godt!
                    </p>
                    <hr />
                    {/* Select der bruker kan velge hvilket lag de ønsker å slette */}
                    <SelectItem
                        id="driver-edit"
                        defalutValue="Velg et lag å slette"
                        ariaLabel="Velg et lag å slette"
                        label="Lag"
                        onChange={handleTeamSelection}
                        options={teams.map((team, i) => ({
                            value: team.id,
                            label: team.manufacturer,
                        }))}
                    />
                    {/* Slenger på border rundt knappen for å tydeliggjøre den mer */}
                    <button
                        onClick={handleDeleteTeam}
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
export default DeleteTeam;
