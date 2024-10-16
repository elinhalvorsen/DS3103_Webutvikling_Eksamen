import { ReactNode, createContext, useEffect, useState } from "react";
import RaceService from "../services/RaceService";
import { IRace, IRaceContext } from "../interfaces/RaceTypes";

//Oppretter og exporterer RaceContext
export const RaceContext = createContext<IRaceContext | null>(null);

//Provideren
export const RaceProvider = ({ children }: { children: ReactNode }) => {
    const [races, setRaces] = useState<IRace[]>([]);

    //GET - Henter alle løp fra servicen
    const getRacesFromService = async () => {
        try {
            const racesFromService = await RaceService.getAll();
            setRaces(racesFromService);
        } catch (err) {
            return console.log(err);
        }
    };

    //GET - Henter løp etter id.
    const getRacesById = async (id: number) => {
        try {
            const getRaceById = await RaceService.getById(id);
            return getRaceById;
        } catch (err) {
            return console.log(err);
        }
    };

    // PUT - Oppdaterer løp med ny informasjon
    const putRace = async (newRace: IRace) => {
        try {
            await RaceService.putRace(newRace);
        } catch (err) {
            return console.log(err);
        }
    };

    // POST - Legger til et nytt løp
    const postRace = async (newRace: IRace) => {
        try {
            await RaceService.postRace(newRace);
        } catch (err) {
            return console.log(err);
        }
    };

    // DELETE - Sletter et løp etter id
    const deleteRaceById = async (id: number) => {
        try {
            const result = await RaceService.deleteById(id);
            return result;
        } catch (err) {
            return console.log(err);
        }
    };
    useEffect(() => {
        getRacesFromService();
    }, []);

    return (
        <RaceContext.Provider
            value={{ races, getRacesById, putRace, postRace, deleteRaceById }}
        >
            {children}
        </RaceContext.Provider>
    );
};
