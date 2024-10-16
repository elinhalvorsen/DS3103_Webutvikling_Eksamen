import { ITeamContext } from "../../interfaces/TeamTypes";

// Kompontent som gjør det mulig å vise lagene og begge førerne
const DisplayTeam = ({ teams }: ITeamContext) => {
  const displayTeams = () => {
    const allTeams = teams.map((team, i) => (
      <div key={i} className="bg-light rounded mt-3">
        <h3 className="bg-success rounded text-white">Lag</h3>
        <h4>{team.manufacturer}</h4>
        <p>Fører 1: {team.driver1}</p>
        <p>Fører 2: {team.driver2}</p>
      </div>
    ));
    return allTeams;
  };
  return <article className="text-center">{teams && displayTeams()}</article>;
};

// Eksporterer komponenten
export default DisplayTeam;
