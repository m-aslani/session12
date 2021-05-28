import React,{useState,useEffect} from 'react';
import Modal from 'react-modal';

const AddContact = ({addContact}) => {

    const [name, setname] = useState("");
    const [addres, setaddres] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [open, setOpen] = useState(false);
    const [message,setMessage]=useState("");
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () =>{
        setOpen(false)
        setMessage('')
    };
    Modal.setAppElement('#root');

    const add = ()=>{
        let text = "";
        if(!name) text = "enter new contact name!";
        if(!phone) text="enter new contact phone number!";
        if(!name && !phone) text="enter name and phone number!";
        if(name && phone){
            text="new contact added!";
            setMessage(text);
            addContact({
                name,
                addres,
                phone,
                email
            });
        }
        setMessage(text);
    }

    useEffect(() => {
        if(message){
            onOpenModal()
        }
       
    },[message])

    const customStyles = {
        content : {
          top                   : '40%',
          left                  : '35%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };

    return (
        <div className="contactList-container">
            <label>name : </label>
            <input className="add-input" type="text" onChange={(e)=>setname(e.target.value)} placeholder="Name ..." />
            <label>addres : </label>
            <input  className="add-input" type="text" onChange={(e)=>setaddres(e.target.value)} placeholder="Addres ..." />
            <label>phone : </label>
            <input  className="add-input" type="number" onChange={(e)=>setphone(e.target.value)} placeholder="Phone ..." />
            <label>e-mail : </label>
            <input className="add-input"  type="email" onChange={(e)=>setemail(e.target.value)} placeholder="E-mail ..." />
            <button className ="back-btn" onClick={()=>add()}>ADD</button>
            <button className ="back-btn">BACK</button>
            <Modal isOpen={open}  onRequestClose={onCloseModal} style={customStyles} >
            <p className="message">{message}</p>
            </Modal>
                
        </div>
    )
}
export default AddContact;