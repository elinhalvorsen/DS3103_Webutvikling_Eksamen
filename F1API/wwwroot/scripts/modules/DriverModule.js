const DriverModule = (() => {
    // Informasjon om førere med navn og bilde
    const drivers = [
        {
            name: "Max Verstappen",
            image: "driver1.jpeg",
        },
        {
            name: "Sergio Perez",
            image: "driver2.jpeg",
        },
        {
            name: "Lewis Hamilton",
            image: "driver3.jpeg",
        },
        {
            name: "George Russell",
            image: "driver8.jpeg",
        },

        {
            name: "Lando Norris",
            image: "driver5.jpeg",
        },
        {
            name: "Oscar Piastri",
            image: "driver9.jpeg",
        },
        {
            name: "Carlos Sainz",
            image: "driver6.jpeg",
        },
        {
            name: "Charles Leclerc",
            image: "driver7.jpeg",
        },
    ];

    // Funksjon for å hente alle førerne
    const getAllDrivers = () => {
        // structuredClone for å lage en dyp kopi av arrayet
        return structuredClone(drivers);
    };
    return {
        // Her blir det som skal være tilgjengelig returnert
        getAllDrivers,
    };
})();

// Eksporterer modulen for bruk i andre deler av koden
export default DriverModule;
