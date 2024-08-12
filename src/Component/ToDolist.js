import React,{useState} from "react";


function ToDolist(){
    const[addItem,setAddItem]=useState('')
    const[displayItem,setDisplayItem]=useState([])
    console.log('addItem',addItem,'displayItem',displayItem)

    const submitHandler=() =>{
        setDisplayItem([...displayItem,addItem])
        setAddItem('')
    }

    return(
        <>
        <div id='mylist'>
            <h1> TO DO LIST</h1>
            <input type='text' placeholder="enter your list" value={addItem}
            onChange={(e)=>setAddItem(e.target.value
                
            )}/>
            <br/><br/>
            <button onClick={submitHandler}>Add</button>
            <ol>
            {
                displayItem.map((data,index)=>(
                        <li key={index}>{data}</li>
                ))
            }</ol>
            </div>
        </>
    )
}

export default ToDolist