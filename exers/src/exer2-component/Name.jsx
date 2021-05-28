import React from 'react'

 const Name = ({name,choose,flag,handlerdelete}) => {
    return (
        <div className="tag">
        <button className={flag ? "close" : "close-invisible"} onClick={()=>handlerdelete(name.id)}>X</button>
        <li onClick={()=>choose(name)} className={name.sex === 'girl' ? "li--girl" : "li--boy"}>{name.name}</li>
        </div>
    )
}
export default Name;