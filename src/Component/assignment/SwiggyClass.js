import React from 'react';
class SwiggyClass extends React.Component{
    constructor(){
        super()
        this.state={
            message:(<p>welcome to swiggy<br/> ' select the food item'<br/>click to order  </p>)
        }
    }

    changeHandler(){
        this.setState({
            message:'Thank you for ordering'
        })
    }

    render(){
        return(
            <>
            <div class='order'><center>
            <h4 style={{color:this.state.message==="welcome to swiggy <br/>'select the food item'<br/> click to order" ?'red':'purple'}}>
               {this.state.message} </h4>
                <br/>
                <button type='submit' onClick={()=>this.changeHandler()}>oder Food</button></center></div>
            </>
        )
    }
}

export default SwiggyClass