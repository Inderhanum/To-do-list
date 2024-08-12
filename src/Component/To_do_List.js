import React ,{useState,useEffect} from "react";
import '../App.css';
import {Form,Button} from 'react-bootstrap';
import {FaTrash} from 'react-icons/fa';
import { FaEdit } from "react-icons/fa";
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const To_do_List = ()=>{
    const[newItem,setNewItem]=useState('')
    const[displayItem,setDisplayItem]=useState([])
    const[isEditing,setIsEditing]=useState(false)
    const[currentIndex,setCurrentIndex]=useState('')

    useEffect(()=>{
        let todoFormLocalStorage=JSON.parse(localStorage.getItem('todos'))
        if (todoFormLocalStorage){
            setDisplayItem(todoFormLocalStorage)
        }else{
            setDisplayItem([])
        }
    },[])
    // console.log('newItem,displayItem',newItem,displayItem)

    const submitHandler =(e)=>{e.preventDefault() 
        if(newItem===''){
            toast.error('please enter the values')
        }else if(displayItem.includes(newItem)){
            toast.error("item already existed")
            setNewItem('')
        }else{
            // setDisplayItem([...displayItem,newItem])
            setNewItem('')
            setDisplayItem((prevState)=>{
                let updatedTodos=[...prevState,newItem]
                localStorage.setItem('todos',JSON.stringify(updatedTodos))
            return updatedTodos
            })
            toast.success('item added successfully')
        }
        
    }
    const deleteHandler =(id)=>{
        alert('Do you want to delete item?')
        let temp = displayItem.filter((data,index)=> id !== index);
        localStorage.setItem('todos',JSON.stringify(temp))
        setDisplayItem(temp)

    }
    const editHandler=(items,id)=>{
        setIsEditing(true)
        console.log(items,id)
        setNewItem(items)
        setCurrentIndex(id)
    }
    const saveHandler=(e)=>{
        e.preventDefault()
        let updatedTodos=displayItem.map((d,i)=>{
            if(i === currentIndex){
                d= newItem
            }
            return d
        })
        setDisplayItem(updatedTodos)
        localStorage.setItem('todos',JSON.stringify(updatedTodos))
        toast.success('Item updated successfully')
        setNewItem('')
        setIsEditing(false)

    }
    return(
        <><container>
            <div class='main1'>
                <h1>TO-DO-LIST</h1>
            </div>
            <ToastContainer/>
            <div className="parent1">
                <div className="child1">
                    <div className="div-style">
                        {
                        !isEditing?(<Form className="form-style" onSubmit={submitHandler}>
                        <Form.Control type='text' placeholder="enter your item" value={newItem} onChange={(e)=>setNewItem(e.target.value)}/>
                        <Button className="btn-style" type='submit'>Add</Button></Form>):
                        
                        (<Form className="form-style" onSubmit={saveHandler}>
                            <Form.Control
                            type='text' placeholder="enter your items" value={newItem} onChange={(e)=>setNewItem(e.target.value)}/>
                            <Button className="btn-style" type='submit'>Save</Button>
                            <Button className="btn-style" type='submit'>cancel</Button>
                        </Form>)}
                        
                    </div>
                    
                    <ul>
                        {
                        displayItem.map((data,index)=>(
                            <li className="li-style" key={index}>{data}<FaTrash style={{marginTop:'5px',fontSize:'3rem !important'}}onClick={()=>deleteHandler(index)}/>
                            <FaEdit style={{marginTop:'5px'}}onClick={()=>editHandler(data,index)}/>
                            </li>
                            ))
                        }
                    </ul>
                </div>
            </div></container>
        </>
    )
}

export default To_do_List