// Interface for Race
export interface IRace {
    id: number;
    winner: string;
    time: string;
    grandPrix: string;
    lap: number;
}

export interface IRaceContext {
    races: IRace[];
    getRacesById: (id: number) => Promise<IRace | void>;
    putRace: (newRace: IRace) => Promise<void>;
    postRace: (newRace: IRace) => Promise<void>;
    deleteRaceById: (id: number) => Promise<boolean | void>;
}
