import React,{useState} from 'react'
import Favorite from './Favorite';
import Name from './Name';

 const Search = ({nameList}) => {
     const [search, setsearch] = useState("");
     const [option, setoption] = useState(false);
     const [Tags, setTags] = useState([]);

     const SearchSomthing = (e)=>{
        setsearch(e.target.value);
        if(search === ""){
            setoption(true);
        }else if(!search){
            setoption(false);
        }
     }
     const clearHistory = ()=>{
         setsearch("");
     }

     const choose=(name)=>{
         setTags([...Tags,name]);
     }

    return (
        <div className="container">
            <input type="text" value={search} placeholder="search ..." onChange = {(e) => SearchSomthing(e)} />
            <p>Your Favorit</p>
            <Favorite Item={Tags}/>
            <br />
            <ul>
            {nameList.filter(name => name.name.includes(search)).map(
                (name , index) => <Name key = {index} name={name} choose={choose} flag={false}/>
            )}
            </ul>
            <button className={option === true ? "btn--visible" : "btn--invisible"} onClick={()=>clearHistory()}>clear history</button>
        </div>
    )
}
export default Search;