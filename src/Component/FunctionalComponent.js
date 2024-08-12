import React from 'react'

function FunctionalComponent({name,subject}){
    return(
        <>
            <h1>hello i am FunctionalComponent</h1>
            <h3>hi i am <span style={{color:'white',backgroundColor:'blue',padding:'10px'}}>{name}</span> welcome to <span className='style1'>{subject}</span>  class</h3>
        </>
    )
}
export default FunctionalComponent;