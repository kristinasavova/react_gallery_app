import React from 'react'; 
import { 
    NavLink
} from 'react-router-dom'; 

const Nav = () => {
    
    return (
        <nav className="main-nav">
            <ul> 
                <li><NavLink to={'/mountains'}>Mountains</NavLink></li>
                <li><NavLink to={'/lake'}>Lake</NavLink></li>
                <li><NavLink to={'/forest'}>Forest</NavLink></li> 
            </ul>
        </nav>     
    );
 };

export default Nav; 