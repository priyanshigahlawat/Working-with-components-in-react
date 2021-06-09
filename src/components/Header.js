import { useState } from 'react';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../components/Header.css'

function Header(prop) {
    const[funct,getOperation] = useState(0);
    function doSum(event){
        event.preventDefault();
        getOperation(1);
    }
    function doMultiply(event){
        event.preventDefault();
        getOperation(2);
    }
    function doSubtract(event){
        event.preventDefault();
        getOperation(3);
    }
    prop.getFunction(funct);
    return (
        <center>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" onClick={doSum}/>
                <label className="btn btn-outline-info" htmlFor="btnradio1">ADD</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" onClick={doMultiply}/>
                <label className="btn btn-outline-light" htmlFor="btnradio2">MULTIPLY</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" onClick={doSubtract}/>
                <label className="btn btn-outline-warning" htmlFor="btnradio3">SUBTRACT</label>
            </div>
        </center>
    );
}

export default Header;