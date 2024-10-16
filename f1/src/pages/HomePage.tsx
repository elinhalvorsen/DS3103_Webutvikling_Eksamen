//Henviser til Accordion fra Bootstrap https://getbootstrap.com/docs/5.0/components/accordion/
import MainHeading from "../components/shared/MainHeading";
const HomePage = () => {
    return (
        <>
            {/* Overskrift og velkomstmelding */}
            <MainHeading
                title={"Formel 1 Manager"}
                text={
                    "Velkommen til Formel 1 Manager! Her har du kontrollen over ditt eget F1-lag. Registrer dine egne førere, tilpass laget, og ta avgjørende beslutninger for suksess på banen. Lykke til som teamleder."
                }
            />
            {/* Viser informasjon om å registrere, strategi, og race. */}
            {/* Fungerer som informasjon til bruker om hva de kan gjøre på siden */}
            <section className="row text-center">
                <article
                    className="accordion accordion-flush"
                    id="accordion__formel1-manager"
                >
                    {/* Registrer */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne"
                            >
                                Registrer
                            </button>
                        </h2>
                        <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordion__formel1-manager"
                        >
                            <p className="accordion-body">
                                Når du registrerer laget, velger du førere fra
                                vårt galleri eller legger til egne. Om en fører
                                ikke leverer som forventet, har du makten til å
                                sparke dem fra systemet. Du kan også gi laget
                                ditt en unik identitet ved å tildele et lagnavn
                                og laste opp et bilde av bilen. Hvis ting ikke
                                går som planlagt, har du til og med muligheten
                                til å slette hele laget. Utforsk førernes og
                                bilenes verden ved å se bilder og informasjon.
                                Som Manager har du også muligheten til å
                                oppdatere både førerne og lagene sin relevante
                                informasjon når som helst. Administrer laget
                                ditt med omhu og ta de riktige beslutningene for
                                å nå toppen av F1-verdenen.
                            </p>
                        </div>
                    </div>
                    {/* Strategi */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="flush-collapseTwo"
                            >
                                Strategi
                            </button>
                        </h2>
                        <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordion__formel1-manager"
                        >
                            <p className="accordion-body">
                                Det er din oppgave som teamleder å ta styringen.
                                Planlegg strategi for å oppnå et best mulig løp!
                                Her har du muligheten til å tilpasse de
                                strategiske elementene for dine førere,
                                inkludert valg av dekktype og antall pit stop.
                                Ha værforholdet, førernes kondisjon/individuelle
                                kjørestil, og løpets lengde + unike egenskaper i
                                bakhodet. Ta kloke avgjørelser for å sikre en
                                vellykket løpsstrategi. Suksess på banen krever
                                smart planlegging og rask tilpasning til endrede
                                forhold. Vi har troa på at den klarer å finne
                                den perfekte strategien for ditt lag!
                            </p>
                        </div>
                    </div>
                    {/* Race */}
                    <div className="accordion-item">
                        <h2
                            className="accordion-header"
                            id="flush-headingThree"
                        >
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree"
                            >
                                Race
                            </button>
                        </h2>
                        <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordion__formel1-manager"
                        >
                            <p className="accordion-body">
                                Her kan du kjøre flere løp ved å velge et lag,
                                styre laget, og velge banen. Under løpet må du
                                følge nøye med på plasseringen til dine førere
                                for å ta strategiske beslutninger. Du kan også
                                starte nye løp med ulike alternativer for å
                                variere opplevelsen. Du kan også velge å starte
                                et nytt løp.
                            </p>
                        </div>
                    </div>
                    {/* Bilde av headset */}
                    <img
                        className="mt-3"
                        src="./public/icon.png"
                        alt="Bilde av manager-headsett."
                    />
                </article>
            </section>
        </>
    );
};

//Eksporteres og brukes i App.tsx
export default HomePage;
