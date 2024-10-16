import { IDriver, IDriverContext } from "../interfaces/DriverTypes";
import { ReactNode, createContext, useEffect, useState } from "react";
import DriverService from "../services/DriverService";

//Oppretter og exporterer DriverContext
export const DriverContext = createContext<IDriverContext | null>(null);

//Provideren
export const DriverProvider = ({ children }: { children: ReactNode }) => {
    const [drivers, setDrivers] = useState<IDriver[]>([]);

    //GET - Henter alle førere fra servicen
    const getDriversFromService = async () => {
        try {
            const driversFromService = await DriverService.getAll();
            setDrivers(driversFromService);
        } catch (err) {
            return console.log(err);
        }
    };
    //GET - Henter førere etter id.
    const getDriverById = async (id: number) => {
        try {
            const result = await DriverService.getById(id);
            return result;
        } catch (err) {
            return console.log(err);
        }
    };

    //GET - Henter førere etter navn
    const getDriverByName = async (name: string) => {
        try {
            const driversByName = await DriverService.getByName(name);
            return driversByName;
        } catch (err) {
            return console.log(err);
        }
    };

    //PUT - Oppdaterer førere
    const editDrivers = async (driversToEdit: IDriver) => {
        try {
            await DriverService.putDriver(driversToEdit);
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    //POST - Legger til en ny fører.
    const addNewDriver = async (newDriver: IDriver, image: File) => {
        try {
            await DriverService.postDriver(newDriver, image);
        } catch (err) {
            return console.log(err);
        }
    };

    //DELETE - Sletter en fører etter id.
    const deleteDriverById = async (id: number) => {
        try {
            const result = await DriverService.deleteById(id);
            return result;
        } catch (err) {
            return console.log(err);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            getDriversFromService();
        }, 1000);
    }, []);

    return (
        <DriverContext.Provider
            value={{
                drivers,
                getDriversFromService,
                getDriverById,
                getDriverByName,
                editDrivers,
                addNewDriver,
                deleteDriverById,
            }}
        >
            {children}
        </DriverContext.Provider>
    );
};
