import React from 'react';
class Message extends React.Component{
    constructor(){
        super()
        this.state={
            message:'welcome to my channel',
            new :'what do you want'
        }
    }

    changeHandler(){
        this.setState({
            message:'Thank you for subscibing',
            new:'how are you'
        })
    }

    render(){
        return(
            <>
            <h4 style={{color:this.state.message==='welcome to my channel'?'pink':'greenyellow'}}>
                Hello!!! {this.state.new} <br/>{this.state.message}</h4>
                <br/>
                <button type='submit' onClick={()=>this.changeHandler()}>subscribe</button>
            </>
        )
    }
}

export default Message