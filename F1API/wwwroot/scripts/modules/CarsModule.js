const CarsModule = (() => {
    // Informasjon om bilene med manufactor og bilde
    const cars = [
        {
            manufactor: "Red Bull Racing",
            image: "car1.jpeg",
        },
        {
            manufactor: "Mercedes",
            image: "car2.jpeg",
        },
        {
            manufactor: "McLaren",
            image: "car4.jpeg",
        },
        {
            manufactor: "Ferrari",
            image: "car3.jpeg",
        },
    ];
    // Funksjon for å hente alle bilene
    const getAllCars = () => {
        // structuredClone for å lage en dyp kopi av arrayet
        return structuredClone(cars);
    };
    return {
        // Her blir det som skal være tilgjengelig returnert
        getAllCars,
    };
})();

// Eksporterer modulen for bruk i andre deler av koden
export default CarsModule;
