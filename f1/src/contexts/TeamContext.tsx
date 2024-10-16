import { ReactNode, createContext, useEffect, useState } from "react";
import TeamService from "../services/TeamService";
import { ITeamContext, ITeam } from "../interfaces/TeamTypes";

//Oppretter og exporterer TeamContext
export const TeamContext = createContext<ITeamContext | null>(null);

//Provideren
export const TeamProvider = ({ children }: { children: ReactNode }) => {
    const [teams, setTeams] = useState<ITeam[]>([]);

    //GET - Henter alle lag fra servicen
    const getTeamsFromService = async () => {
        try {
            const teamsFromService = await TeamService.getAll();
            setTeams(teamsFromService);
        } catch (err) {
            return console.log(err);
        }
    };
    //GET - Henter alle lagene etter id
    const getTeamsById = async (id: number) => {
        try {
            const teamsToUpdate = await TeamService.getById(id);
            return teamsToUpdate;
        } catch (err) {
            return console.log(err);
        }
    };
    //POST - Oppretter et nytt lag - fikse
    const addNewTeam = async (newTeam: ITeam, image: File) => {
        try {
            await TeamService.postTema(newTeam, image);
        } catch (err) {
            console.log(err);
        }
    };

    //PUT - Oppdaterer et lag
    const editTeam = async (teamsToUpdate: ITeam) => {
        try {
            await TeamService.putTeam(teamsToUpdate);
            return true;
        } catch (err) {
            return console.log(err);
        }
    };
    //DELETE - Sletter et lag fra databasen
    const deleteTeam = async (id: number) => {
        try {
            const result = await TeamService.deleteById(id);
            return result;
        } catch (err) {
            return console.log(err);
        }
    };
    useEffect(() => {
        setTimeout(() => {
            getTeamsFromService();
        }, 1000);
    }, []);
    return (
        <TeamContext.Provider
            value={{
                teams,
                getTeamsFromService,
                getTeamsById,
                addNewTeam,
                editTeam,
                deleteTeam,
            }}
        >
            {children}
        </TeamContext.Provider>
    );
};
