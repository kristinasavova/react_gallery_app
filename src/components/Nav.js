import React from 'react'; 
// import { 
//     Route,
//     NavLink
// } from 'react-router-dom'; 
// import PhotoContainer from './PhotoContainer';

const Nav = ({ match }) => {

    return (
        <nav className="main-nav">
            {/* <ul> */}
                {/* <li><NavLink to={`${match.url}/mountains}`}>Mountains</NavLink></li>
                <li><NavLink to={`${match.url}/coconuts}`}>Coconuts</NavLink></li>
                <li><NavLink to={`${match.url}/forest}`}>Forest</NavLink></li> 
            </ul>
            <Route path={`${match.path}/mountains`} render={() => <PhotoContainer data={''} />} />
            <Route path={`${match.path}/travelling`} render={() => <PhotoContainer data={''} />} />
            <Route path={`${match.path}/winter`} render={() => <PhotoContainer data={''} />} /> */}
        </nav>
    );
};

export default Nav; 