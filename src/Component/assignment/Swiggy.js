import React from "react";
function Swiggy({item1,item2,item3,p1,p2,p3,t1,t2,t3}){
    return(
        <>
        <h1 style={{textAlign:'center',color:'purple',backgroundColor:'orange'}}>Swiggy!</h1>
        <h2>Craving Something?</h2>
        <hr/>
        <div style={{textAlign:'center'}}>
        <h3>Welcome to swiggy</h3>
            <img src=''/>
            <center><table><thead>
                <tr>
                    <th>
                        Food Item 
                    </th>
                    <th>
                        price
                    </th>
                    <th>
                        Available timmings
                    </th>
                </tr></thead>
                <tbody>
                    <tr>
                        <td>Dosa</td>
                        <td>₹40</td>
                        <td>8:30AM</td>
                    </tr>
                    <tr>
                        <td>Chicken Biryani</td>
                        <td>₹250</td>
                        <td>11:30 AM</td>
                    </tr>
                    <tr>
                        <td>Panner Butter Masala</td>
                        <td>₹215</td>
                        <td>7:30pm</td>
                    </tr>
                </tbody>
            </table>
            </center>
            
        </div>
        
        </>
    )

}

export default Swiggy;