import React from 'react'; 
import PropTypes from 'prop-types'; 
import Photo from './Photo'; 
import NotFound from './NotFound';

const PhotoContainer = props => {

    const results = props.data;
    let photos; 
    if (results.length > 0) {
        photos = results.map (photo => 
            <Photo 
                src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`} 
                key={photo.id} 
                alt={photo.title} /> );
    } else {
        photos = <NotFound />
    }

    
    return (
        <div className="photo-container">
            <h2>{ results.length > 0 ? 'Results' : null }</h2>
            <ul>
                { photos }
            </ul>
        </div>
    );
    
};

PhotoContainer.propTypes = {
    data: PropTypes.array.isRequired
}

export default PhotoContainer; 