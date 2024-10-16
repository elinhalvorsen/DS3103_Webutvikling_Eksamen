import { useContext, useEffect, useState } from "react";
import { DriverContext } from "../../contexts/DriverContext";
import { toast } from "react-toastify";
import InputItem from "../shared/InputItem";
import SelectItem from "../shared/SelectItem";

// Redigere informasjonen om en fører
const EditDriver = () => {
    const { drivers, getDriverById, editDrivers, getDriversFromService } =
        useContext(DriverContext);
    const [selectedId, setSelectedId] = useState("");
    //Denne skal resete søkefeltet
    const [resetKey, setResetKey] = useState(0);
    const [driversToUpdate, setDriversToUpdate] = useState({
        name: "",
        age: 0,
        nationality: "",
    });

    useEffect(() => {
        if (selectedId) {
            getDriver(selectedId);
        }
    }, [selectedId]);
    //Henter fører etter id (MÅ SE PÅ)
    const getDriver = async (id) => {
        try {
            const driver = await getDriverById(id);
            setDriversToUpdate(driver);
            console.log(driver);
        } catch (err) {
            return console.log(err);
        }
    };

    // Får tak i det brukeren velger
    const handleDriverSelection = (e) => {
        setSelectedId(e.currentTarget.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget;
        setDriversToUpdate((prev) => ({ ...prev, [name]: value }));
    };

    // Asynkron funksjon for å håndtere lagringen av ny informasjon om fører, samt toast melding
    const saveChanges = async () => {
        try {
            const result = await editDrivers(driversToUpdate);
            if (result === true) {
                toast.success("Fører er redigert ");
            }

            //Resetter feltene etter lagring
            setResetKey(resetKey + 1);
            // Gjør ar oppdatering skjer umiddelbart
            getDriversFromService();
        } catch (err) {
            return console.log(err);
        }
    };

    return (
        <section
            key={resetKey}
            id="section__register__page-drivers__left"
            className="row"
        >
            <article className="col-md-12">
                <div className="bg-warning p-3 rounded">
                    <h3 className="text-center">Rediger fører</h3>
                    <SelectItem
                        id="driver-edit"
                        defalutValue="Velg en fører å redigere"
                        label="Velg fører"
                        ariaLabel="velg fører å endre på"
                        onChange={handleDriverSelection}
                        options={drivers.map((driver, i) => ({
                            value: driver.id,
                            label: driver.name,
                        }))}
                    />
                    {/* Input-feltene brukeren fyller ut*/}
                    <InputItem
                        id="name__driver__edit"
                        onChange={handleInputChange}
                        name="name"
                        type="text"
                        aria-label="endret navn på fører"
                        label="Navn"
                    />
                    <InputItem
                        id="age__edit"
                        onChange={handleInputChange}
                        name="age"
                        type="number"
                        aria-label="endret alder på fører"
                        label="Alder"
                    />
                    <InputItem
                        id="nationality__edit"
                        onChange={handleInputChange}
                        name="nationality"
                        type="text"
                        aria-label="endret nasjonalitet på fører"
                        label="Nasjonalitet"
                    />
                    {/*Lagrer handlingen. Slengt på border på knappen for å tydeligjgøre, mtp UU */}
                    <button
                        onClick={saveChanges}
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

// Eksporterer komponenten
export default EditDriver;
