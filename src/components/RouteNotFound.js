import React from 'react'; 
import { Link } from 'react-router-dom'; 

const RouteNotFound = () => {
    return (
        <div className="photo-container">
            <h2>WHOOPS!</h2>
            <p className="page-not-found">WE COULD'T FIND THE PAGE YOU'RE LOOKING FOR</p>
            <nav className="main-nav">
                <ul>
                    <li><Link to={'/'}>Go Home</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default RouteNotFound; 