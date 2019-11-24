import React from "react";
import {Button } from "reactstrap"; 
import "./progressbar.css"
const ProgressBar = props => {
    return props.questions.map((question) => {
        const buttonColor = question.selectedChoice != '' ? 'btn-primary' : 'btn-secondary';
        return (
            <div className="d-flex justify-content-center">
                <div className="btn-toolbar">
                    <div className="mr-2">
                        <div className="mt-2">
                            <div className="mb-2"> 
                                <button class={`btn ${buttonColor}`}>
                                    {question.id}
                                </button>    
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    })

}
export default ProgressBar; 