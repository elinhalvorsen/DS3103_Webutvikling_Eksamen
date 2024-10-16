// Interface for Team
export interface ITeam {
    id: number;
    manufacturer: string;
    image: string;
    driver1: string;
    driver2: string;
}

export interface ITeamContext {
    teams: ITeam[];
    getTeamsFromService: () => Promise<ITeam[] | void>;
    getTeamsById: (id: number) => Promise<void | ITeam>;
    addNewTeam: (newTeam: ITeam, image: File) => Promise<void>;
    editTeam: (teamsToUpdate: ITeam) => void;
    deleteTeam: (id: number) => Promise<boolean | void>;
}
