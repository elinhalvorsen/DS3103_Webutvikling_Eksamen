// Denne modulen gir melding til brukeren basert på hvilket valg de tar vedrørende dekk, pitstop og overtake.
export const StrategyModule = (
    chosenTires: string,
    pitstops: number,
    overtake: string
) => {
    // Funksjon som genererer melding basert på hvilket dekktype som blir valgt
    const tireStrategy = (chosenTires: string) => {
        let tireMessage = "";
        if (chosenTires === "Hard") {
            tireMessage =
                "Valget av harde dekk være en fordel i løp med høy dekkslitasje, da de er slitesterke og kan redusere antall pitstops. Dette sparer tid og gir mer stabil ytelse over tid. Mindre utsatt for skader, øker de sikkerheten og gir lagene mulighet til å bytte til raskere dekk mot slutten av løpet for å forbedre plasseringen. Samlet sett gir harde dekk en effektiv kombinasjon av utholdenhet og taktisk fleksibilitet.";
        } else if (chosenTires === "Medium") {
            tireMessage =
                "Valget av medium dekk i Formel 1 tilbyr en balansert blanding av slitestyrke og fart, noe som gjør dem ideelle for varierte baneforhold. Disse dekkene er en mellomvei mellom de holdbare harde dekkene og de raske myke dekkene, og gir pålitelig ytelse over et bredt spekter av runder. Dette gjør dem til et fleksibelt og allsidig valg, godt egnet for mange løpsstrategier.";
        } else if (chosenTires === "Soft") {
            tireMessage =
                "Valget av myke dekk i Formel 1 fokuserer på maksimal hastighet og grep, noe som er ideelt for kortere løp eller aggressiv kjøring. Disse dekkene gir raskere rundetider og bedre grep, spesielt under kvalifisering eller mot slutten av løpet. Imidlertid slites de raskere og krever oftere pitstops, noe som gjør dem til et strategisk valg for intensiv kjøring og taktiske overhalinger over kortere distanser. Myke dekk er best egnet for å maksimere ytelsen i løpets kritiske faser.";
        }
        return tireMessage;
    };

    // Funksjon som genererer melding basert på hvor mange pitstop som blir valgt
    const pitstopStrategy = (pitstops: number) => {
        let pitstopMessage = "";
        if (pitstops === 1) {
            pitstopMessage =
                "Å velge en én-pitstop-strategi i Formel 1 er gunstig på baner med lav dekkslitasje, da det kan minske tidsbruk i pitlane og redusere risiko for posisjonstap. Denne tilnærmingen krever imidlertid nøye dekkvalg og forsiktig kjøring for å unngå overdreven slitasje. En vellykket strategi med én pitstop balanserer behovet for fart med effektiv dekkhåndtering, samtidig som den tilpasser seg til banens og værforholdenes unike utfordringer.";
        } else if (pitstops === 2) {
            pitstopMessage =
                "Å velge en to-pitstop-strategi i Formel 1 kan være fordelaktig på baner med høy dekkslitasje, hvor det gir fleksibilitet til å tilpasse seg raskt skiftende forhold. Denne tilnærmingen muliggjør bruk av forskjellige dekktyper tilpasset ulike løpsfaser, optimaliserer ytelse på fri bane og kan gi taktiske fordeler gjennom løpet. Selv om det krever nøye timing, kan to pitstops maksimere bilens potensial og tilpasse seg løpets dynamikk effektivt.";
        }
        return pitstopMessage;
    };

    // Funksjon som genererer melding basert på om brukeren velger overtake eller ikke, samt hvilken dekktype som blir valgt i tireStrategy
    const overtakeStragety = (overtake: string, chosenTires: string) => {
        let overtakeMessage = "";
        if (overtake === "Ja") {
            if (chosenTires === "Hard") {
                overtakeMessage = `Med overtakes og harde dekk, vil du ha en mer konservativ tilnærming, men med mindre risiko for slitasje. Dette kan begrense dine overtakingsmuligheter, men gir en mer stabil ytelse over hele løpet.`;
            } else if (chosenTires === "Medium") {
                overtakeMessage = `Planlegger du overtakes, vil medium dekk gi en god balanse mellom ytelse og holdbarhet, noe som er ideelt for å gjøre sikre overtak uten å kompromittere total dekkslitasje betydelig.`;
            } else if (chosenTires === "Soft") {
                overtakeMessage = `Med planlagte overtakes, vil myke dekk gi deg fordelen av bedre grep og akselerasjon, noe som er kritisk for vellykkede overtakingsmanøvrer. Men vær oppmerksom på dekkets raskere slitasje, som kan kreve ekstra pitstops.`;
            }
        } else {
            overtakeMessage = "Du valgte ikke overtake denne gangen";
        }
        return overtakeMessage;
    };

    // Her blir de ulike funksjonene kalt på, og resultatene blir lagret
    const tireMessage = tireStrategy(chosenTires);
    const pitstopMessage = pitstopStrategy(pitstops);
    const overtakeMessage = overtakeStragety(overtake, chosenTires);

    // Returnerer meldingene
    return {
        tireMessage,
        pitstopMessage,
        overtakeMessage,
    };
};
