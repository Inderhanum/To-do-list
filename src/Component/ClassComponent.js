import React from "react";

class ClassComponent extends React.Component{
    render(){
        return(
            <>
                <h1> i am ClassComponent</h1>
                <h3>Product details</h3>
                <div className="o1">
                <p>productName:{this.props.productName1}</p>
                <p>productType:{this.props.productType}</p>
                <p>price:{this.props.price1}</p>
                <p>discount:{this.props.discount}</p></div>
                <div className="o2">
                <p>productName:{this.props.productName2}</p>
                <p>productType:{this.props.productType}</p>
                <p>price:{this.props.price2}</p>
                <p>discount:{this.props.discount}</p></div>
                <div className="o3">
                <p>productName:{this.props.productName3}</p>
                <p>productType:{this.props.productType}</p>
                <p>price:{this.props.price3}</p>
                <p>discount:{this.props.discount}</p></div>
                <div className="o4">
                <p>productName:{this.props.productName4}</p>
                <p>productype:{this.props.productType}</p>
                <p>price:{this.props.price4}</p>
                <p>discount:{this.props.discount}</p></div>
                <div className="o5">
                <p>productName:{this.props.productName5}</p>
                <p>productType:{this.props.productType}</p>
                <p>price:{this.props.price5}</p>
                <p>discount:{this.props.discount}</p>
                </div>
            </>
        )
    }
}
export default ClassComponent;