interface IDriverItem {
    index: number;
    name: string;
    age: number;
    nationality: string;
    image: string;
}
// Skriver ut førerne, der props blir tatt i mot
const DriverItem = ({ index, name, age, nationality, image }: IDriverItem) => {
    return (
        <article className="col-6 col-md-4 col-lg-3 text-center">
            <div className="card shadow h-100">
                <img
                    className="card-img-top"
                    src={`http://localhost:5145/images/drivers/${image} `}
                    alt={`Bilde av  fører: ${name}.`}
                />
                <strong className="card-text bg-danger text-white">
                    {index + 1}
                </strong>
                <h3 className="card-title text-dark">{name}</h3>
                <strong className="text-danger card-text p-2">
                    Alder: {age}
                </strong>
                <strong className="text-danger card-text p-2">
                    Nasjonalitet: {nationality}
                </strong>
            </div>
        </article>
    );
};
// Eksporterer komponenten
export default DriverItem;
