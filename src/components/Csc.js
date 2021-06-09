import { useState } from "react";
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Csc(prop){
    const [f1,firstInput] = useState(0);
    const [f2,secondInput] = useState(0);
    const [rel,getRel] = useState("");
    function setFirstInput(event){
        firstInput(event.target.value);
    }
    function setSecondInput(event){
        secondInput(event.target.value);
    }
    function getResult(event){
        event.preventDefault();
        let sum = parseInt(f1) + parseInt(f2); 
        getRel(sum);
        prop.getChildData(sum);
    }
    
    
    function reset(event){
        event.preventDefault();
        getRel("");
        firstInput("");
        secondInput("");
    }
    return(
        <form>
            <p>1 st No: <input value={f1} onChange = {setFirstInput} type="text"/></p>
            <p>2 st No: <input value={f2} onChange = {setSecondInput} type="text"/></p>
            <p><input type="button" onClick = {getResult} className="btn btn-secondary" value="GET RESULT"/></p>
            <p><input type="button" onClick = {reset} className="btn btn-primary" value="RESET"/></p>
            <p>Result: {rel}</p>
        </form>
    );
}
export default Csc;