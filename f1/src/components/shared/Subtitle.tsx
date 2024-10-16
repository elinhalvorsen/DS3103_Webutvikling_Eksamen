interface ISubtilte {
    title: string;
    text?: string;
}
//Underoverskifter som brukes på flere sider. Sender med props, for å generere ulikt innhold.
const Subtitle = ({ title, text }: ISubtilte) => {
    return (
        <section className="row">
            <article className="mt-2">
                <h2 className="text-center">{title}</h2>
                <p>{text}</p>
            </article>
        </section>
    );
};

// Eksporterer komponenten
export default Subtitle;
