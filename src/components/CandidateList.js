import axios from "axios";
import trash from "../assets/images/trash.png"
import { useEffect, useState } from "react";

export default function CandidateList({ status, showApproved }) {
    const [candidateList, setCandidateList] = useState([]);
    const [deleteStatus, setDeleteStatus] = useState([]);

    useEffect(() => {
        async function getCandidates() {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/v1/hiring/candidates`);

            try {
                setCandidateList(response.data);
            } catch (error) {
                alert(error.message);
            }
          }

          async function getApproved() {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/v1/hiring/approved`);

            try {
                setCandidateList(response.data);
            } catch (error) {
                alert(error.message);
            }
          }

          showApproved ? getApproved() : getCandidates();
    }, [status, deleteStatus, showApproved])

    async function disqualifyCandidate(id) {
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/api/v1/hiring/disqualify`, { codCandidato: id });
            setDeleteStatus([]);
        } catch (error) { }
    }

    return (
        <table className="border-collapse border border-tom1 w-92 w-2/4 font-normal font-inter">
            <thead>
                <tr>
                    <th className="border border-tom1 text-blue-700 py-2">Id</th>
                    <th className="border border-tom1 text-blue-700 py-2">Name</th>
                    <th className="border border-tom1 text-blue-700 py-2">Status</th>
                    <th className="border border-tom1 text-blue-700 py-2">Delete</th>
                </tr>
            </thead>

            <tbody>
                {
                    candidateList?.map((candidate, idx) => {
                        return (
                            <tr key={idx}>
                                <td className="border border-tom1 text-blue-600 text-center py-1">{ candidate.id }</td>
                                <td className="border border-tom1 text-blue-600 pl-3 py-1">{ candidate.name }</td>
                                <td className="border border-tom1 text-blue-600 text-center py-1">{ candidate.status }</td>
                                <td className="border border-tom1 text-blue-600 py-2">
                                    <div className="flex justify-center" onClick={() => {
                                        swal({
                                            title: "You want to delete a candidate?",
                                            buttons: true,
                                        })
                                        .then((willChangin) => willChangin ? disqualifyCandidate(candidate.id) : console.log('ok'));
                                    }}>
                                        <img className="h-7 cursor-pointer" src={trash} alt="trash icon"/>
                                    </div>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}