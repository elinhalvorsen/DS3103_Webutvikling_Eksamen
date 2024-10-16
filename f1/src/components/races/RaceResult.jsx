import { useContext, useEffect, useState } from "react";
import { DriverContext } from "../../contexts/DriverContext";
import Subtitle from "../shared/Subtitle";

// Komponent for å vise resultatet av de ulike løpene med en rangering av førere
const RaceResult = () => {
    const { drivers } = useContext(DriverContext);
    const [shuffledDrivers, setSuffledDrivers] = useState([]);

    // Denne skal være med på å ikke påvirke førere på registrer siden.
    useEffect(() => {
        // Gir oss et random utfall av hvilke plasser førerne kommer på
        const shuffled = [...drivers].sort(() => Math.random() - 0.5);
        setSuffledDrivers(shuffled);
    }, [drivers]);

    // Viser løpsresultatet med plassering, og tydeliggjøring av hvem som vinner
    const displayDriverRanking = (driverList) => {
        return driverList.map((driver, index) => (
            <article key={index} className="col-6 col-md-4 col-lg-3 mt-3">
                <div
                    className={`border-top border-end border-5 border-danger ${
                        index === 0
                            ? "border-primary bg-danger"
                            : "border-danger"
                    } rounded p-2`}
                >
                    {/* Viser førerens navn med en spesiell formattering for vinneren */}
                    <p className="card-title">
                        {index === 0 ? (
                            <b className="text-white">Vinner: {driver.name}</b>
                        ) : (
                            `${index + 1}. ${driver.name}`
                        )}
                    </p>
                </div>
            </article>
        ));
    };
    return (
        <section className="row">
            <Subtitle title={"Resultat"} />

            {shuffledDrivers && displayDriverRanking(shuffledDrivers)}
        </section>
    );
};

// Eksporterer kompontenten
export default RaceResult;
