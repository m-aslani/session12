import React from 'react'

 const Button = ({op,onAction}) => {
    return (
        <div>
            <button className="btn-plus" onClick = {() => onAction(op)}>{op}</button>
        </div>
    )
}
export default Button;
