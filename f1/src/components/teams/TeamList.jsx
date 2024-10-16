import { useEffect, useContext } from "react";
import TeamItem from "./TeamItem";
import { TeamContext } from "../../contexts/TeamContext";

// Vise en liste over alle lagene
const TeamList = () => {
    //Henter teams fra TeamContext.
    const { teams } = useContext(TeamContext);
    const displayTeams = () => {
        const allTeams = teams.map((team, index) => (
            <TeamItem
                key={team.id}
                index={index}
                manufacturer={team.manufacturer}
                image={team.image}
                driver1={team.driver1}
                driver2={team.driver2}
            />
        ));
        return allTeams;
    };

    return (
        <section id="section__register__page-teams__right" className="row g-3">
            <strong>Antall lag: {teams.length}</strong>
            {teams && displayTeams()}
        </section>
    );
};

// Eksporterer komponenten
export default TeamList;
