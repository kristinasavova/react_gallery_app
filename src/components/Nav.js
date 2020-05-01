import React from 'react'; 
import { 
    NavLink, 
    Route
} from 'react-router-dom'; 
import PhotoContainer from './PhotoContainer';

const Nav = ({ match }, props) => {
    
    return (
        <nav className="main-nav">
            <ul> 
                <li><NavLink to={`/mountains`}>Mountains</NavLink></li>
                <li><NavLink to={`/bears}`}>Bears</NavLink></li>
                <li><NavLink to={`/forest}`}>Forest</NavLink></li> 
            </ul>
            {/* <Route path={`/mountains`} render={() => } />  */}
        </nav>     
    );
 };

export default Nav; 