import React,{useState} from 'react'
import AddContact from './AddContact';
import ContactList from './ContactList';
import user from "./pic/gestures.png";
import ShowMoreInfo from './ShowMoreInfo';

const ContactListApp = () => {
    const [contacts, setcontacts] = useState(
        [
            {
                id:1,
                photo:user,
                name : "Ed Revalo",
                addres: "Derivers , New Jersey",
                phone: "032-3453-321",
                email:"email@gmail.com"
            },
            {
                id:2,
                photo:user,
                name : "Ed Revalo",
                addres: "Derivers , New Jersey",
                phone: "032-3453-321",
                email:"email@gmail.com"
            },
            {
                id:3,
                photo:user,
                name : "Ed Revalo",
                addres: "Derivers , New Jersey",
                phone: "032-3453-321",
                email:"email@gmail.com"
            },
            {
                id:4,
                photo:user,
                name : "Ed Revalo",
                addres: "Derivers , New Jersey",
                phone: "032-3453-321",
                email:"email@gmail.com"
            },
            {
                id:5,
                photo:user,
                name : "Ed Revalo",
                addres: "Derivers , New Jersey",
                phone: "032-3453-321",
                email:"email@gmail.com"
            },
            {
                id:6,
                photo:user,
                name : "Ed Revalo",
                addres: "Derivers , New Jersey",
                phone: "032-3453-321",
                email:"email@gmail.com"
            },
        ]
    );
    const [option, setoption] = useState(1);
    const [selectedContact, setselectedContact] = useState({});

    const showMoreInformation = (contact)=>{
        console.log(contact);
        setselectedContact(contact);
        setoption(2);
    }
    const backToMain =()=>{
        setoption(1);
    }
    const deleteContact=(Id)=>{
        console.log(Id);
        setcontacts(contacts.filter((contact)=>contact.id !== Id));
        setoption(1);
    }
    const editContact = (newContact)=>{
        let list = [...contacts];
        list.splice(newContact.id-1,1,newContact);
        console.log(list);
        setcontacts(list);
    }
    const addnewContact=()=>{
        console.log("hi");
        setoption(3);
    }
    const addContact = (newContact)=>{
        let id = contacts.length;
        id++;
        let photo = user;
        let contact = {...newContact,id,photo};
        setcontacts([...contacts,contact]);
        setoption(1);
    }
    return (
        <div >
            
             { option===1 && <ContactList contactList={contacts} showMoreInformatio={showMoreInformation} addnewContact={addnewContact}/>}
             {option===2 && <ShowMoreInfo contact={selectedContact} back={backToMain} handleDelete={deleteContact} editContact={editContact} />}
             { option ===3 && <AddContact addContact={addContact}/>}
        </div>
    )
}
export default ContactListApp;