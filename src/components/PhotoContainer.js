import React from 'react'; 
import PropTypes from 'prop-types'; 
import Photo from './Photo'; 
import NotFound from './NotFound';

const PhotoContainer = props => {

/* I have troubles with this conditional statement: sometimes NotFound component is 
displayed while the data is loading, despite using !props.Loading as a condition. */
    
    const results = props.data;
    let photos; 
    // Render photos if search has results and the results are loaded  
    if (results.length > 0 && !props.isLoading) {
        photos = results.map (photo => 
            <Photo 
                src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`} 
                key={photo.id} 
                alt={photo.title} /> );
    // Render NotFound if search has no results and loading is over
    } else if (results.length === 0 && !props.isLoading) { 
        photos = <NotFound />;
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
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default PhotoContainer; 