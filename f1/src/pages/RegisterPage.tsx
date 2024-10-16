import { useState } from "react";
import DriverList from "../components/drivers/DriverList";
import AddDriver from "../components/drivers/AddDriver";
import EditDriver from "../components/drivers/editdriver";
import TeamList from "../components/teams/TeamList";
import AddTeam from "../components/teams/AddTeam";
import DeleteDriver from "../components/drivers/DeleteDriver";
import ActionButtons from "../components/shared/ActionButtons";
import MainHeading from "../components/shared/MainHeading";
import DeleteTeam from "../components/teams/DeleteTeam";
import EditTeam from "../components/teams/EditTeam";
import Subtitle from "../components/shared/Subtitle";

// Registrer siden der alle komponenter blir hentet inn.
const RegisterPage = () => {
    const [actionTabDriver, setActionTabDriver] = useState(0);
    const [actionTabTeam, setActionTabTeam] = useState(0);
    return (
        <>
            <MainHeading
                title={"Førere og lag"}
                text={
                    "Det er viktig å ha dyktige førere. Legg til gode førere, og sett sammen de riktige lagene"
                }
            />

            <Subtitle
                title={"Fører"}
                text={"Her kan du registrere, redigere og slette førere"}
            />
            {/*Denne bytter ut komponenter utifra hva du vil gjøre på fører*/}
            <ActionButtons
                actionTab={actionTabDriver}
                setActionTab={setActionTabDriver}
            />
            {actionTabDriver === 0 ? (
                <AddDriver />
            ) : actionTabDriver === 1 ? (
                <EditDriver />
            ) : (
                actionTabDriver === 2 && <DeleteDriver />
            )}
            <DriverList />

            <Subtitle
                title={"Lag"}
                text={"Her kan du registrere, redigere og slette lag"}
            />

            {/*Denne bytter ut komponenter utifra hva du vil gjøre på lag */}
            <ActionButtons
                actionTab={actionTabTeam}
                setActionTab={setActionTabTeam}
            />
            {actionTabTeam === 0 ? (
                <AddTeam />
            ) : actionTabTeam === 1 ? (
                <EditTeam />
            ) : (
                actionTabTeam === 2 && <DeleteTeam />
            )}
            <TeamList />
        </>
    );
};

//Eksporteres og brukes i App.tsx
export default RegisterPage;
