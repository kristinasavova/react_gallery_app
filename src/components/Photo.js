import React from 'react'; 
import PropTypes from 'prop-types';

const Photo = props => {
    return (
        <li>
            <img 
                src={props.src} 
                alt={props.alt} 
                onClick={() => window.open (props.src, '_blank')} 
            />
        </li>
    );
};

Photo.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

export default Photo; 