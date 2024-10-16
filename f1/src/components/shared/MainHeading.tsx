interface IMainHeading {
    title: string;
    text?: string;
}
//Overskrift som går igjen på alle sidene
const MainHeading = ({ title, text }: IMainHeading) => {
    return (
        <section className="row">
            <article>
                <h1 className="text-center mt-3">{title}</h1>
                <p>{text}</p>
                <hr />
            </article>
        </section>
    );
};

// Eksporterer komponenten
export default MainHeading;
