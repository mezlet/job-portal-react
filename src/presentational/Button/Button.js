import React from 'react';

const Button = (props) => {
return <button className={`button ${props.className}`} onClick={props.click}>
    {props.title}  
    { props.icon ? <i className="fa fa-plus icon" aria-hidden="true"></i>: null}
    </button>
}

export default Button;