import React,{useState} from 'react'
import EditContact from './EditContact';

const ShowMoreInfo = ({contact,back,handleDelete , editContact}) => {

    const [editedContact, seteditedContact] = useState(contact);
    const [updatedContact, setupdatedContact] = useState(contact);
    const [flag, setflag] = useState(false);

    const anableEdit=()=>{
        setflag(!flag);
    }

    const edit =(e)=>{
        let obj = {...editedContact};
        obj[e.target.name] = e.target.value;
        seteditedContact(obj);
    }

    const updateContact = ()=>{
        console.log(editedContact);
        setupdatedContact(editedContact);
        editContact(editedContact);
    }

    return (
        <div className="contactList-container">
            <img src={contact.photo} alt="" className="big-profile"/>
            <p className="info">{updatedContact.name}</p>
            <p className="info">{updatedContact.phone}</p>
            <p className="info">{updatedContact.email}</p>
            <p className="info">{updatedContact.addres}</p>
            <div className="btn-holder">
                <button className={flag ? "btn-edit-active" : "btn"} onClick={()=>anableEdit()}>EDIT</button>
                <button className="btn" onClick={()=>handleDelete(contact.id)}>DELETE</button>
            </div>
            {flag && <EditContact editedContact={editedContact} edit={edit} updateContact={updateContact}/>}
            <button className="back-btn" onClick={back}>BACK</button>
        </div>
    )
}
export default ShowMoreInfo;