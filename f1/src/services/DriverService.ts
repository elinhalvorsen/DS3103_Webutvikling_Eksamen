import { IDriver } from "../interfaces/DriverTypes";
import axios from "axios";
const DriverService = (() => {
    //Endepunktene for å hente dataene i Drivers
    const driversController = "http://localhost:5145/api/drivers";
    //Endepunkt for bildeopplast
    const imageUploadController = "http://localhost:5145/api/imageupload";

    //GET - Henter alle førere
    const getAll = async (): Promise<IDriver[]> => {
        try {
            const response = await axios.get<IDriver[]>(driversController);
            return response.data;
        } catch (err) {
            throw err;
        }
    };

    //GET - Henter førerne by Id.
    const getById = async (id: number) => {
        try {
            const result = await axios.get<IDriver>(
                `${driversController}/${id}`
            );
            return result.data;
        } catch (err) {
            throw err;
        }
    };

    //GET - Henter førere etter navn
    const getByName = async (name: string) => {
        try {
            const result = await axios.get<IDriver[]>(
                `${driversController}/getbyname/${name}`
            );
            return result.data;
        } catch (err) {
            return console.log(err);
        }
    };

    //PUT - Oppdaterer førere
    const putDriver = async (driversToUpdate: IDriver): Promise<void> => {
        try {
            await axios.put(driversController, driversToUpdate);
        } catch (err) {
            console.log(err);
        }
    };

    //POST - Legger til en ny fører
    const postDriver = async (
        newDriver: IDriver,
        image: File
    ): Promise<void> => {
        try {
            const formData = new FormData();
            formData.append("formFileDriver", image);
            console.log(image);
            await axios.post(driversController, newDriver);
            await axios({
                url: imageUploadController,
                method: "POST",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
            formData.delete("formFileDriver");
        } catch (err) {
            return console.log(err);
        }
    };

    //DELETE - Sletter en fører etter id
    const deleteById = async (id: number): Promise<boolean> => {
        try {
            await axios.delete(`${driversController}/${id}`);
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    return {
        getAll,
        getById,
        getByName,
        putDriver,
        postDriver,
        deleteById,
    };
})();
export default DriverService;
