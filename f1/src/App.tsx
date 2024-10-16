import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Routing from "./components/routing/Routing";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
function App() {
    return (
        <>
            <Routing />
            <ToastContainer />
        </>
    );
}

export default App;
