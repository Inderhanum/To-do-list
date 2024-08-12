import React from "react";
function FunctionalComponents({name1,name2,name3,subject1,subject2,subject3,batchtiminings1,batchtiminings2,batchtiminings3}){
    return(
        <>
        <h1 style={{textAlign:'center',color:'purple',backgroundColor:'pink'}}>Welcome to Besant technology</h1>
        <hr/>
        <div style={{textAlign:'center'}}>
        <h3>Hello Student Thank you fot visiting!!!</h3>

            <center><table><thead>
                <tr>
                    <th>
                        Student name 
                    </th>
                    <th>
                        Subject
                    </th>
                    <th>
                        Batch timmings
                    </th>
                </tr></thead>
                <tbody>
                    <tr>
                        <td>Inder</td>
                        <td>React</td>
                        <td>8:30</td>
                    </tr>
                    <tr>
                        <td>Sachin</td>
                        <td>python</td>
                        <td>10:30</td>
                    </tr>
                    <tr>
                        <td>sharan</td>
                        <td>react</td>
                        <td>8:30</td>
                    </tr>
                </tbody>
            </table>
            </center>
            <p>this by using props </p>
            <h2>studens info</h2>
            <div class='main'>
               <div class='parent'>
                    <h3>Student Name</h3>
                    <h5>{name1}</h5><h5>{name2}</h5><h5>{name3}</h5>
                </div>
                    <div class='child1'>
                        <h3>Subjects</h3>
                        <h5>{subject1}</h5><h5>{subject2}</h5><h5>{subject3}</h5>
                    </div>
                    <div class='child2'>
                        <h3>batch Timinings</h3>
                        <h5>{batchtiminings1}</h5><h5>{batchtiminings2}</h5><h5>{batchtiminings3}</h5>
                    </div>
                
            
            </div>
        </div>
        
        </>
    )

}

export default FunctionalComponents;