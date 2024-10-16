import { ITeam } from "../interfaces/TeamTypes";
import axios from "axios";

const TeamService = (() => {
    const teamsController = "http://localhost:5145/api/teams";
    const imageUploadController =
        "http://localhost:5145/api/imageupload/postimagecar";

    //GET - Henter alle førerne fra apiet.
    const getAll = async (): Promise<ITeam[]> => {
        try {
            const response = await axios.get<ITeam[]>(teamsController);
            return response.data;
        } catch (err) {
            throw console.log(err);
        }
    };
    //GET - Denne henter alle lagene etter id.
    const getById = async (id: number) => {
        try {
            const result = await axios.get<ITeam>(`${teamsController}/${id}`);
            return result.data;
        } catch (err) {
            return console.log(err);
        }
    };
    //PUT - Oppdatere et team. Denne returnere ikke noe
    const putTeam = async (teamsToUpdate: ITeam): Promise<void> => {
        try {
            await axios.put(teamsController, teamsToUpdate);
        } catch (err) {
            return console.log(err);
        }
    };
    //Denne gjør det mulig for brukeren å legge til et bilde av en bil i Team
    const postTema = async (newTeam: ITeam, image: File): Promise<void> => {
        try {
            const formData = new FormData();
            formData.append("formFileCars", image);

            //Returnerer ikke noe
            await axios.post(teamsController, newTeam);
            await axios({
                url: imageUploadController,
                method: "POST",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
            formData.delete("formFileCars");
        } catch (err) {
            return console.log(err);
        }
    };

    //Sletter et team etter id
    const deleteById = async (id: number): Promise<boolean> => {
        try {
            await axios.delete(`${teamsController}/${id}`);
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    };
    return {
        getAll,
        getById,
        putTeam,
        postTema,
        deleteById,
    };
})();
export default TeamService;
