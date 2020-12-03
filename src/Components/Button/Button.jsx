import React from 'react'

import './Button.css'

const Button = (props) => {
    return (
        <button 
            className={props.cssClass} 
            id={props.id} 
            title={props.title}
            onClick={props.onSubmit}
        >
            {props.children}
        </button>
    );
}

export default Button;