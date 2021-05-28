import React from 'react'

 const Footer = ({addnewContact}) => {
    return (
        <div className="footer">
            <button className="add-new-user" onClick={()=>addnewContact()}>+</button>
        </div>
    )
}
export default Footer;