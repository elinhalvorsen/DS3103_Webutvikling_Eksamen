import { IRace } from "../interfaces/RaceTypes";
import axios from "axios";

const RaceService = (() => {
    const racesController = "http://localhost:5145/api/races";

    const getAll = async (): Promise<IRace[]> => {
        try {
            const response = await axios.get<IRace[]>(racesController);
            return response.data;
        } catch (err) {
            throw err;
        }
    };
    //Henter de ulike racene etter id
    const getById = async (id: number) => {
        try {
            const result = await axios.get<IRace>(`${racesController}/${id}`);
            return result.data;
        } catch (err) {
            return console.log(err);
        }
    };
    const putRace = async (racesToUpdate: IRace): Promise<void> => {
        try {
            await axios.put(racesController, racesToUpdate);
        } catch (err) {
            return console.log(err);
        }
    };
    const postRace = async (newRace: IRace): Promise<void> => {
        try {
            await axios.post(racesController, newRace);
        } catch (err) {
            return console.log(err);
        }
    };

    const deleteById = async (id: number): Promise<boolean> => {
        try {
            await axios.delete(`${racesController}/${id}`);
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    };
    return {
        getAll,
        getById,
        putRace,
        postRace,
        deleteById,
    };
})();
export default RaceService;
