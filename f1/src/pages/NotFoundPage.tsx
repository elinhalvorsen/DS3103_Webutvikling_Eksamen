// Side som dukker opp dersom det skjer noe galt
const NotFoundPage = () => {
    return (
        <section className="row mt-4">
            <article className="text-center">
                <h1>Finner ikke siden dessverre... Prøv igjen</h1>
                <p>OBS! Her skjedde det noe galt</p>
            </article>
        </section>
    );
};

//Eksporteres og brukes i App.tsx
export default NotFoundPage;
