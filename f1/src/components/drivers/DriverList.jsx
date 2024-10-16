import { DriverContext } from "../../contexts/DriverContext";
import { useContext } from "react";
import DriverItem from "./DriverItem";
import Subtitle from "../shared/Subtitle";

const DriverList = () => {
    // Henter alle drivers fra context.
    const { drivers } = useContext(DriverContext);

    //Gegenererer en liste av 'DriverItem' komponenter for hver fører, inkluderer propsen fra Item.
    const displayAllDrivers = () => {
        const allDrivers = drivers.map((driver, index) => (
            <DriverItem
                key={driver.id}
                index={index}
                name={driver.name}
                image={driver.image}
                nationality={driver.nationality}
                age={driver.age}
            />
        ));
        return allDrivers;
    };

    return (
        <section
            id="section__register__page-drivers__right"
            className="row g-3"
        >
            <strong>Antall førere: {drivers.length}</strong>
            {drivers && displayAllDrivers()}
        </section>
    );
};

// Eksporterer komponenten
export default DriverList;
