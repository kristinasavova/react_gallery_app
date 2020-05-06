import React from 'react'; 
import PropTypes from 'prop-types';
import { 
    NavLink,
    withRouter
} from 'react-router-dom'; 

const Nav = withRouter ((props) => { 

    return (
        <nav className="main-nav">
            <ul> 
                <li><NavLink to="/mountains" onClick={ () => { 
                    props.performSearch ('mountains')
                }}>Mountains</NavLink></li>
                <li><NavLink to="/lake" onClick={() => {
                    props.performSearch ('lake')
                }}>Lake</NavLink></li>
                <li><NavLink to="/forest" onClick={() => {    
                    props.performSearch ('forest')
                }}>Forest</NavLink></li> 
            </ul>
        </nav>     
    );
 });

 Nav.propTypes = {
     performSearch: PropTypes.func.isRequired
 };

export default Nav; 