import { useEffect, useState } from 'react';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Footer(pro) {
    function doReset(event){
        event.preventDefault();
        pro.reset(1);
    }
    useEffect(()=>{
        pro.reset(0);
    });
    return (
        <center>
            <div className="footer">
            <div className="d-grid gap-3 col-4 mx-auto">
                <button className="btn btn-outline-info btn-rel" type="button" onClick={doReset}>Reset</button>
            </div>
            <p>
                {pro.result}
            </p>
            </div>
        </center>
    );
}
export default Footer;