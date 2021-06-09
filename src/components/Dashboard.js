import { useEffect, useState } from 'react';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../components/Header.css'

function Dashboard(prop) {
    const [f1, updateFirstInput] = useState(0);
    const [f2, updateSecondInput] = useState(0);
    function firstInput(event) {
        updateFirstInput(event.target.value);
    }
    function secondInput(event) {
        updateSecondInput(event.target.value);
    }
    function doReady(){
        prop.getNumbers(f1, f2);
        
    }
    useEffect(() => {
        if(prop.z == 0){
            updateFirstInput(0);
            updateSecondInput(0);
        }
    });
    
    
    return (
        <center>
            <div className="dashboard">
                <br></br><br></br>
                <p>
                    <label>Enter 1st No: </label>
                    <input type="text" value={f1} onChange={firstInput}/>
                </p>
                <p>
                    <label>Enter 2nd No: </label>
                    <input type="text" value={f2} onChange={secondInput} onBlur={doReady}/>
                </p>
            </div>
        </center>
    );
}
export default Dashboard;