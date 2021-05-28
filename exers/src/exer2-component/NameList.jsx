import React from 'react'
import Name from './Name';

const NameList = ({nameList}) => {
    return (
        <div>
            <ul>
            {nameList.map(
         
               (name , index) => <Name key = {index} name={name}/>
                
            )}
            </ul>
        </div>
    )
}

export default NameList;