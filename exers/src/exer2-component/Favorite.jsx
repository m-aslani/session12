import React,{useEffect, useState} from 'react'
import Name from "./Name"

const Favorite = ({Item}) => {
    
    const [items, setitems] = useState([]);
    
    useEffect(() => {
        setitems([...Item]);
    }, [Item])

    const handlerDelete=(id)=>{
        Item = Item.filter((item)=> item.id !== id);
        console.log(Item);
        setitems(Item);
        console.log(items);
    }
    return (
        <div>
            <ul>
            {
                items.map((item,index)=> <Name key = {index} name={item} flag={true} handlerdelete={handlerDelete}/>)
            }
            </ul>
        </div>
    )
}
export default Favorite;