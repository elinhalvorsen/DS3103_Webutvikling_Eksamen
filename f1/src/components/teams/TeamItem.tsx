interface ITeamItem {
    index: number;
    manufacturer: string;
    image: string;
    driver1: string;
    driver2: string;
}
//Denne skriver ut bilde av bildene med verdiene, sender props videre til TeamList.
const TeamItem = ({
    index,
    manufacturer,
    image,
    driver1,
    driver2,
}: ITeamItem) => {
    return (
        <article className="col-12 col-md-6 col-lg-4 text-center">
            <div className="card shadow h-100">
                <img
                    className="card-img-top"
                    src={`http://localhost:5145/images/cars/${image}`}
                    alt="Bilde av bilene til de forskjellige lagene"
                />
                <strong className="bg-danger text-white">{index + 1}</strong>
                <h3 className="card-tile text-custom-danger">{manufacturer}</h3>
                <strong className="card-title text-danger p-2">
                    Fører 1: {driver1}
                </strong>
                <strong className="card-title text-danger p-2">
                    Fører 2: {driver2}
                </strong>
            </div>
        </article>
    );
};

// Eksporterer komponenten
export default TeamItem;
