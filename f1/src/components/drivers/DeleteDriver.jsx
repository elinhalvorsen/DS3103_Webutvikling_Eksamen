import axios from "axios";
import { DriverContext } from "../../contexts/DriverContext";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import SelectItem from "../shared/SelectItem";
import InputItem from "../shared/InputItem";

//Sletter en fører
const DeleteDriver = () => {
    const { deleteDriverById, getDriverByName, getDriversFromService } =
        useContext(DriverContext);
    const [searchByName, setSearchByName] = useState("");
    const [driverId, setDriverId] = useState(null);

    //Her blir navnet brukeren skriver inn håndtert
    const handleSearchDriver = (e) => {
        setSearchByName(
            e.currentTarget.value
                //Denne gjør det mulig for brukeren å søke etter navn med små og store bokstaver.
                .split(" ")
                .map(
                    (name) =>
                        name.charAt(0).toUpperCase() +
                        name.slice(1).toLowerCase()
                )
                .join(" ")
        );
    };
    // Henter fører etter navn
    const handleFindDriverByName = async () => {
        try {
            // Bruker getByName
            const driver = await getDriverByName(searchByName);
            console.log("Fører funnet:", driver);
            if (driver) {
                setDriverId(driver[0].id);
                toast.info(`Fører funnet: ${driver[0].name} `);
            } else {
                setDriverId(null);
                toast.error("Fant ingen fører med dette navnet");
            }
        } catch (err) {
            toast.error("Det oppsto en feil under søket");
            setDriverId(null);
            return console.log(err);
        }
    };
    // Asynkron funksjon for å håndtere sletting av fører
    const handleDeleteDriver = async () => {
        if (!driverId) {
            toast.error("Du må først finne en fører å slette");
            return;
        }
        try {
            // Sletter fører etter id
            const result = await deleteDriverById(driverId);
            if (result === true) {
                toast.success("Fører er slettet!");
                getDriversFromService();
                setDriverId(null);
            } else {
                toast.error("Kunne ikke slette fører");
            }
        } catch (err) {
            console.log(err);
            toast.error("Det oppstod en feil under slettingen");
        }
    };

    return (
        <section id="section__register__page-drivers__left" className="row">
            <article className="col-md-12">
                <div className="bg-danger p-3 rounded text-white">
                    <h3 className="text-center">Slett fører</h3>
                    <p>
                        Tenk deg nøye gjennom før du sletter en fører. Da er den
                        borte for godt!
                    </p>
                    <hr />
                    <div>
                        {/*Her bruker sriver inn navn på fører de ønsker å slette */}
                        <InputItem
                            id="name__driver__add"
                            name="name"
                            type="text"
                            aria-label="navn på fører"
                            label="Søk etter fører du vil slete"
                            onChange={handleSearchDriver}
                        />
                        <button
                            onClick={handleFindDriverByName}
                            className="btn btn-success border-white mt-3"
                        >
                            Finn fører
                        </button>
                    </div>

                    {/*Lagrer handlingen. Slengt på border på knappen for å tydeligjgøre, mtp UU */}
                    <button
                        onClick={handleDeleteDriver}
                        className="btn btn-success border-white mt-3"
                        aria-label="Lagre knapp"
                    >
                        Lagre
                    </button>
                </div>
            </article>
        </section>
    );
};
export default DeleteDriver;
