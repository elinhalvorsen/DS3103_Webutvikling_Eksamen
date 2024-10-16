import ChooseStrategy from "../components/strategy/ChooseStrategy";
import MainHeading from "../components/shared/MainHeading";
import Subtitle from "../components/shared/Subtitle";
import { useState } from "react";
import DisplayStrategy from "../components/strategy/DisplayStrategy";
const StrategyPage = () => {
    const [actionTab, setActionTab] = useState(0);
    const [outcome, setOutCome] = useState(null);

    const handleShowResult = (result) => {
        setOutCome(result);
        setActionTab(1);
    };

    const handleShowStrategy = () => {
        setActionTab(0);
    };
    return (
        <>
            <MainHeading
                title={"Strategi"}
                text={
                    "Her kan du velge ulike strategier, som kan hjelpe deg med å få et bedre løp."
                }
            />
            <Subtitle
                title={"Planlegg strategi"}
                text={"Start med å planlegge strategi. Tenk deg nøye gjennom"}
            />
            {actionTab === 0 ? (
                <ChooseStrategy onShowResult={handleShowResult} />
            ) : (
                <DisplayStrategy
                    result={outcome}
                    onShowStrategy={handleShowStrategy}
                />
            )}
        </>
    );
};

//Eksporteres og brukes i App.tsx
export default StrategyPage;
