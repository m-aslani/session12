import React from 'react'

 const EditContact = ({editedContact,edit,updateContact}) => {
    return (
        <div className="input-holder">
                    <input className="input-edit" type="text" name="name" onChange={(e)=>edit(e)} value={editedContact.name} />
                    <input className="input-edit" type="text" name="phone" onChange={(e)=>edit(e)} value={editedContact.phone} />
                    <input className="input-edit" type="text" name="email" onChange={(e)=>edit(e)} value={editedContact.email} />
                    <input className="input-edit" type="text" name="addres" onChange={(e)=>edit(e)} value={editedContact.addres} />
               <button className="btn-update" onClick={()=>updateContact()}>UPDATE</button>
                </div>
    )
}
export default EditContact;