import React, {useState}from "react";
import Sidebar from '../sidesbar/sidesbar';
import './top.css';

const Top = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
    

    const pHSearch = "Buscar";
    return(
        <div className="Top">
            <div id="row">
                <button id="sbutton" onClick={toggleMenu}>Sidesbar</button>
                <div id="search">
                    <div>
                        <input id="sinputs" placeholder={pHSearch}></input>
                        <button id="sbuttons" >Buscar</button>
                    </div>
                </div>
            </div>
            {menuOpen && <Sidebar ></Sidebar>}
            
        </div>
    );
}

export default Top;