import axios from "axios";
import { useState } from "react";
import Button from "../constants/Button";
import swal from "sweetalert";

export default function ActionButtons({ setStatus }) {
    async function newCandidate(name) {
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/api/v1/hiring/start`, { nome: name });
            setStatus([]);
        } catch (error) {
            if (error.response.status === 400) swal({ title: "This candidate is already participating in the process!", icon: "info" })
        }
    }

    async function markSchedule(id) {
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/api/v1/hiring/schedule`, { codCandidato: id });
            setStatus([]);
        } catch (error) {
            if (error.response.status === 400) swal({ title: "This candidate does not have the necessary status to complete the action!", icon: "info" })

            if (error.response.status === 404) swal({ title: "This candidate does not exist in our database!", icon: "info" })
        }
    }

    async function approveCandidate(id) {
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/api/v1/hiring/approve`, { codCandidato: id });
            setStatus([]);
        } catch (error) {
            if (error.response.status === 400) swal({ title: "This candidate does not have the necessary status to complete the action!", icon: "info" })

            if (error.response.status === 404) swal({ title: "This candidate does not exist in our database!", icon: "info" })
        }
    }

    return (
        <div className="flex gap-14">
            <div onClick={() => {
                    swal({
                        title: "You want to register a candidate?",
                        icon: "info",
                        buttons: true,
                        dangerMode: false,
                    })
                    .then((willChangin) => {
                        if (willChangin) {
                            swal({
                                title: "What is the name of the candidate?",
                                content: "input",
                                button: {
                                    text: "OK",
                                    closeModal: true,
                                }
                            })
                            .then(name => {
                                if(name !== '') {
                                    newCandidate(name);
                                } else {
                                    swal({ title: "Invalid Name", icon: "error" })
                                }
                            })
                    } else {
                        swal("Ok! :)");
                    }
                });
            }}>

                <Button Text="Register Candidate"  />
            </div> 

            <div onClick={() => {
                 swal({
                    title: "You want to schedule a candidate?",
                    text: "Insert below candidate id",
                    content: "input",
                    buttons: true,
                })
                .then(id => {
                    if (id === '') swal({ title: "This id is not valid", icon: "error" });

                    if(id !== null && id !== '') markSchedule(id);
                });
            }}>
                <Button Text="Schedule Candidate" />
            </div> 

            <div onClick={() => {
                 swal({
                    title: "You want to approve a candidate?",
                    text: "Insert below candidate id",
                    content: "input",
                    buttons: true,
                })
                .then(id => {
                    if (id === '') swal({ title: "This id is not valid", icon: "error" });

                    if(id !== null && id !== '') approveCandidate(id);
                });
            }}>
                <Button Text="Approve Candidate" />
            </div> 
        </div>
        
    );
}