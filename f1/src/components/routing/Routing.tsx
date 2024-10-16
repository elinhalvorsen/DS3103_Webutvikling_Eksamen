//Henviser til DS3103-Webutvikling-Slideserie-React-Routing.pdf og tilhørende forelesning(er).
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavigation from "../shared/MainNavigation";
import { DriverProvider } from "../../contexts/DriverContext";
import { TeamProvider } from "../../contexts/TeamContext";
import { RaceProvider } from "../../contexts/RaceContext";
//Importering av sidene som blir brukt.
import {
    RegisterPage,
    StrategyPage,
    HomePage,
    RacePage,
    NotFoundPage,
} from "../../pages";

// Komponent som har oppgave i å håndtere React Router og navigasjon mellom sidene
const Routing = () => {
    return (
        <BrowserRouter>
            <MainNavigation />
            <div className="container">
                <main>
                    <DriverProvider>
                        <TeamProvider>
                            <RaceProvider>
                                <Routes>
                                    <Route
                                        path="/"
                                        element={<HomePage />}
                                    ></Route>
                                    <Route
                                        path="register"
                                        element={<RegisterPage />}
                                    ></Route>
                                    <Route
                                        path="strategy"
                                        element={<StrategyPage />}
                                    ></Route>
                                    <Route
                                        path="race"
                                        element={<RacePage />}
                                    ></Route>
                                    {/* 404 dersom brukeren skriver inn feil i nettleseren */}
                                    <Route
                                        path="*"
                                        element={<NotFoundPage />}
                                    ></Route>
                                </Routes>
                            </RaceProvider>
                        </TeamProvider>
                    </DriverProvider>
                </main>
            </div>
        </BrowserRouter>
    );
};

// Eksporterer komponenten
export default Routing;
