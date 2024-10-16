// Interface for Driver
export interface IDriver {
    id: number;
    name: string;
    age: number;
    nationality: string;
    image: string;
}

export interface IDriverContext {
    drivers: IDriver[];
    getDriversFromService: () => Promise<IDriver[] | void>;
    getDriverById: (id: number) => Promise<IDriver | void>;
    getDriverByName: (name: string) => Promise<IDriver[] | void>;
    editDrivers: (driversToEdit: IDriver) => void;
    addNewDriver: (newDriver: IDriver, image: File) => void;
    deleteDriverById: (id: number) => Promise<boolean | void>;
}
