import React ,{useState} from "react";
import '../App.css';
import {Form,Button} from 'react-bootstrap';
import {FaTrash} from 'react-icons/fa';

const Sample=()=>{
    const[newItem,setNewItem]=useState('')
    const[displayItem,setDisplayItem]=useState([])
    console.log('newItem,displayItem',newItem,displayItem)

    const submitHandler =(e)=>{e.preventDefault()
        setDisplayItem([...displayItem,newItem])
        setNewItem('')
    }
    const deleteHandler =(id)=>{
        let temp = displayItem.filter((data,index)=> id !== index);setDisplayItem(temp)

    }
    return(
        <>
            <div class='main1'>
                <h1>TO-DO LIST</h1>
            </div>
            <div className="parent1">
                <div className="child1">
                    <div className="div-style">
                        <Form className="form-style" onSubmit={submitHandler}>
                            <Form.Control
                            type='text' placeholder="enter your items" value={newItem} onChange={(e)=>setNewItem(e.target.value)}/>
                        
                            <Button className="btn-style" type='submit'>Add</Button>
                        </Form>
                        
                    </div>
                    
                    <ul>
                        {
                            displayItem.map((data,index)=>(
                            <li className="li-style" key={index}>{data}<FaTrash style={{marginTop:'5px'}} onClick={()=>deleteHandler(index)}/></li>))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sample