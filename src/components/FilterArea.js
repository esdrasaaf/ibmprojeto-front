import searchIcon from "../assets/images/search.svg";
import { Checkbox } from '@mui/material';
import axios from "axios";
import swal from "sweetalert";
import { useState } from "react";

export default function FilterArea({ showApproved, setShowApproved}) {
    const [candidateId, setCandidadeId] = useState();

    async function getCandidateStatus(e) {
        e.preventDefault()

        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/v1/hiring/status/candidate/${candidateId}`);

            swal({ title: response.data, icon: "info" })
        } catch (error) { 
            if (error.response.status === 404)
            swal({ title: "Este candidato não existe no nosso banco de dados!", icon: "info" })
        }
    }


    return (
        <div className="flex items-center gap-10">
            <form className="group flex items-center relative max-w-[900px]" onSubmit={getCandidateStatus}>
                <input onChange={(e) => setCandidadeId(e.target.value)} required type="text" className="input w-full h-10 pl-10 border-2  bg-gray-100 outline-indigo-400 text-tom2 transition duration-300 ease-in-out" placeholder="Insert candidate id" />
                <img className="icon absolute left-3 top-3 invert-[45%] sepia-[11%] saturate-[441%] hue-rotate-[182deg] brightness-[97%] contrast-[100%] w-4 h-4" src={searchIcon} alt="glass"/>
            </form>

            <div className="flex items-center gap-5">
                <div className="flex items-center">
                    <Checkbox id="check1" checked={!showApproved} onClick={() => setShowApproved(false)}/>
                    <label htmlFor="check1" className="cursor-pointer">All Candidates</label>
                </div>
                
                <div className="flex items-center">
                    <Checkbox id="check2" checked={showApproved} onClick={() => setShowApproved(true)}/>
                    <label htmlFor="check2" className="cursor-pointer">Only Approved</label>
                </div>
            </div>
        </div>
    );
}