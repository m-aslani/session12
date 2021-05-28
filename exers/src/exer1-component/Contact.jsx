import React from 'react'
import { AiOutlineStar } from "react-icons/ai";

 const Contact = ({contact,showMoreInformation}) => {
    return (
        <div className="contact" onClick={()=>showMoreInformation(contact)}>
            <AiOutlineStar className="star-icon"/>
            <img src={contact.photo} alt="" className="profile"/>
            <h5 className="name">{contact.name}</h5>
            <p>{contact.addres}</p>
            <p>{contact.phone}</p>
        </div>
    )
}
export default Contact;