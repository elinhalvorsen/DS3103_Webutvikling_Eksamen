//Henviser til DS3103-Webutvikling-Slideserie-React-Routing.pdf og tilhørende forelesning(er).
//Henviser til Navbar fra Boostrap https://getbootstrap.com/docs/5.0/components/navbar/.
import { Link } from "react-router-dom";
const MainNavigation = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid justify-content-between">
                    {/* Bilde av headset */}
                    <img
                        id="icon-image"
                        src="./public/icon.png"
                        alt="Bilde av headsett i navbaren"
                    />
                    {/* Responsiv navigasjonsbar */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Innholdet i menyen med link */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/">
                                    Hjem
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-white"
                                    to="register"
                                >
                                    Registrer
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-white"
                                    to="strategy"
                                >
                                    Strategi
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="race">
                                    Race
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

// Eksporterer komponenten
export default MainNavigation;
