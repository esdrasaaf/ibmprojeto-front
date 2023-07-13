import { useState } from "react";
import ActionButtons from "../components/ActionButtons";
import CandidateList from "../components/CandidateList";
import FilterArea from "../components/FilterArea";
import Header from "../constants/Header";

export default function HomePage() {
    const [status, setStatus] = useState([]);
    const [showApproved, setShowApproved] = useState(false);

    return (
        <div className="bg-grayLogo h-screen w-screen flex flex-col items-center">
            <Header />

            <div className="flex flex-col gap-10 w-full items-center mt-5">
                <ActionButtons setStatus={setStatus}/>

                <FilterArea showApproved={showApproved} setShowApproved={setShowApproved}/>

                <CandidateList status={status} showApproved={showApproved}/>
            </div>
        </div>
    );
}