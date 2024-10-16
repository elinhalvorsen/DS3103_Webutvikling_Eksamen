import { DriverContext } from "../../contexts/DriverContext";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import InputItem from "../shared/InputItem";
//Legger til en fører
const AddDriver = () => {
    const { addNewDriver, getDriversFromService } = useContext(DriverContext);
    const [resetKey, setResetKey] = useState(0);
    const [driver, setDriver] = useState({
        name: "",
        age: 0,
        nationality: "",
        image: null,
    });

    // Oppdatere ut ifra bruker input
    const handleChange = (e) => {
        const { name, value, files } = e.currentTarget;
        setDriver((preDriver) => ({
            ...preDriver,
            [name]: name === "age" ? parseInt(value, 10) : value,
            image: name === "image" ? files[0] : preDriver.image,
        }));
    };

    // Asynkron funksjon for å lagre føreren og vise en toast-melding
    const saveDriver = async () => {
        try {
            const newDriver = {
                name: driver.name,
                age: driver.age,
                nationality: driver.nationality,
                image: driver.image.name,
            };
            //Legger til ny fører i databasen
            await addNewDriver(newDriver, driver.image);
            toast.success("Fører er lagt til");
            setResetKey(resetKey + 1);
            //Gjør at oppdatering skjer med engang på nettsiden.
            getDriversFromService();
        } catch (err) {
            console.log(err);
            toast.error("Du må fylle inn alle verdiene");
        }
    };

    return (
        <section
            key={resetKey}
            id="section__register__page-drivers__left"
            className="row"
        >
            <article className="col-md-12">
                <div className="bg-dark p-3 rounded text-white">
                    <h3 className="text-center">Registrer ny fører</h3>
                    {/*Input component */}
                    <InputItem
                        id="name__driver__add"
                        name="name"
                        onChange={handleChange}
                        type="text"
                        aria-label="navn på fører"
                        label="Navn"
                    />
                    <InputItem
                        id="age__add"
                        name="age"
                        onChange={handleChange}
                        type="number"
                        aria-label="alder på fører"
                        label="Alder"
                    />
                    <InputItem
                        id="nationality__add"
                        name="nationality"
                        onChange={handleChange}
                        type="text"
                        aria-label="nasjonaliteten på fører"
                        label="Nasjonalitet"
                    />
                    <InputItem
                        id="image__driver"
                        name="image"
                        onChange={handleChange}
                        type="file"
                        aria-label="bilde av fører"
                        label="Last opp bilde"
                    />

                    {/*Lagrer handlingen. Slengt på border på knappen for å tydeligjgøre, mtp UU */}
                    <button
                        className="btn btn-success border-white mt-3"
                        onClick={saveDriver}
                        aria-label="Lagre knapp"
                    >
                        Lagre
                    </button>
                </div>
            </article>
        </section>
    );
};
// Eksporterer komponenten
export default AddDriver;
