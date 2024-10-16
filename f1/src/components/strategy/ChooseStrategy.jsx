import { useState } from "react";
import DisplayStrategy from "./DisplayStrategy";
import { StrategyModule } from "../../modules/StrategyModule";
import Spinner from "../shared/Spinner";
import { toast } from "react-toastify";

// Kompontent for å velge strategi
const ChooseStrategy = ({ onShowResult }) => {
    const [chosenTires, setChosenTires] = useState("");
    const [pitstops, setPitstops] = useState(0);
    const [outcome, setOutcome] = useState(null);
    const [overtake, setOvertake] = useState("");
    const [loading, setLoading] = useState(false);

    // Henter det brukeren velger av dekktype
    const handleTireSelection = (e) => {
        setChosenTires(e.currentTarget.value);
    };

    // Henter det brukeren velger på antall pitstops
    const handlePitstopSelection = (e) => {
        setPitstops(parseInt(e.currentTarget.value, 10));
    };

    //Henter det brukeren velger på overtake.
    const handleOvertakeSelection = (e) => {
        setOvertake(e.currentTarget.value);
    };

    // Henter svarene fra StrategyModule resultat utifra det du velger.
    // Bruker kan velge å ikke si ja til overtake.
    const handleCalculateOutcome = () => {
        if (chosenTires && pitstops > 0) {
            // Loading-spinner som skal illusterer at den beregner utfallet.
            setLoading(true);
            setTimeout(() => {
                const result = StrategyModule(chosenTires, pitstops, overtake);
                setOutcome(result);
                onShowResult(result);
                setLoading(false);
            }, 2000);
        } else {
            toast.error("Du må velge dekktype og antall pitstops");
        }
    };

    return (
        <section className="row">
            <article className="col-md-12 d-flex justify-content-center align-items-center">
                <div className="shadow bg-dark text-white rounded p-4">
                    <p>Start med å planlegge strategi. Tenk deg nøye gjennom</p>
                    <hr />

                    <h3>Hvilken dekktype vil du gå for?</h3>
                    {/* Form-chek, der brukeren kan velge mellom forskjellige ting */}
                    <div className="form-check">
                        <input
                            id="hard"
                            className="form-check-input"
                            type="radio"
                            name="tire"
                            value="Hard"
                            onChange={handleTireSelection}
                        />
                        <label htmlFor="hard" className="form-check-label">
                            Hard
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            id="medium"
                            className="form-check-input"
                            type="radio"
                            name="tire"
                            value="Medium"
                            onChange={handleTireSelection}
                        />
                        <label htmlFor="medium" className="form-check-label">
                            Medium
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            id="soft"
                            className="form-check-input"
                            type="radio"
                            name="tire"
                            value="Soft"
                            onChange={handleTireSelection}
                        />
                        <label htmlFor="soft" className="form-check-label">
                            Soft
                        </label>
                    </div>
                    <h3>Hvor mange pitstops vil du ta?</h3>
                    <div>
                        <div className="form-check">
                            <input
                                id="1"
                                className="form-check-input"
                                type="radio"
                                name="pitstops"
                                onChange={handlePitstopSelection}
                                value={"1"}
                            />
                            <label htmlFor="1" className="form-check-label">
                                1
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                id="2"
                                className="form-check-input"
                                type="radio"
                                name="pitstops"
                                onChange={handlePitstopSelection}
                                value={"2"}
                            />
                            <label htmlFor="2" className="form-check-label">
                                2
                            </label>
                        </div>
                        <h3>Vil du kjøre overtake?</h3>
                        <div className="form-check">
                            <input
                                id="overtake"
                                className="form-check-input"
                                type="radio"
                                name="overtake"
                                onChange={handleOvertakeSelection}
                                value="Ja"
                            />
                            <label htmlFor="overtake">Ja</label>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        {/*Slenger på border rundt knappen for å tydeliggjøre den mer */}
                        {!loading ? (
                            <button
                                onClick={handleCalculateOutcome}
                                className="btn btn-danger border-white mt-2 "
                            >
                                Beregn utfall
                            </button>
                        ) : (
                            <Spinner title={"Beregner...."} />
                        )}
                        {outcome && <DisplayStrategy result={outcome} />}
                    </div>
                </div>
            </article>
        </section>
    );
};

// Eksporterer komponenten
export default ChooseStrategy;
