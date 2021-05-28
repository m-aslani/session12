import React,{useState} from 'react'
import Contact from './Contact';
import Footer from './Footer';
import Search from './Search';

 const ContactList = ({contactList,showMoreInformatio,addnewContact}) => {
    const [search, setsearch] = useState("");
    //  const [option, setoption] = useState(false);
    const handlerSearch = (e)=>{
        setsearch(e.target.value);
    }
    
    return (
        <div className="contactList-container">
            <Search search={handlerSearch}/>
        <div className="contactList">
            {
                contactList.filter(contact=> contact.name.includes(search)).map(
                    (contact,index) => <Contact key= {index} contact={contact} showMoreInformation={showMoreInformatio}/> 
                )
            }
        </div>
        <Footer addnewContact={addnewContact}/>
        </div>
    )
}
export default ContactList;