// Kompontent for å vise resultatet av strategien
const DisplayStrategy = ({ result, onShowStrategy }) => {
    const { tireMessage, pitstopMessage, overtakeMessage } = result;
    return (
        <section className="row">
            <article className="col-md-12 d-flex justify-content-center align-items-center">
                <div className="shadow rounded p-4">
                    <h3>Resultat av utfall</h3>
                    <p>
                        <b>Dekktype:</b> {tireMessage}
                    </p>
                    <hr />
                    <p>
                        <b>Antall stopp:</b> {pitstopMessage}
                    </p>
                    <p>{overtakeMessage}</p>
                    {/* Gjør det mulig for brukeren å velge en ny strategi */}
                    <button
                        onClick={onShowStrategy}
                        className="btn btn-success mt-2"
                    >
                        Ny strategi
                    </button>
                </div>
            </article>
        </section>
    );
};

// Eksporterer kompontenten
export default DisplayStrategy;
