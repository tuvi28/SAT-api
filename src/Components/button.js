
import React from "react";
import {Button } from "reactstrap"; 
import './button.css';


const ButtonComponent = props => {
  return (
    <div>
      <p><b> {props.question} </b></p>
      <div className="choice">
        <div className='mb-2' >
        { 
          props.sections.map( section => {
            props.section.choices.map((choice) => {
              const selected = props.selectedChoice === choice.id;
              return(
                <div key={choice.id} className="mt-2">
                  <Button
                    key={choice.id}
                    onClick={() => props.onClick(choice.id)}  
                    className="btn-circle" 
                    outline={!selected} 
                    color="primary">
                    {choice.opt}
                </Button>
                <span className="m-2">
                  {choice.text}
                </span>
              </div>
              )
            })

          })
        }
        </div>
      </div>
    </div>

  );
}

export default ButtonComponent; 




