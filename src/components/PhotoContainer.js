import React, { Component } from 'react'; 
import { withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types'; 
import Photo from './Photo'; 
import NotFound from './NotFound';

class PhotoContainer extends Component {

    static propTypes = {
        match: PropTypes.object,
        data: PropTypes.array.isRequired,
        isLoading: PropTypes.bool.isRequired,
        performSearch: PropTypes.func.isRequired
    };

    componentDidUpdate (prevProps) {
        if (this.props.match.params.query !== prevProps.match.params.query) {
            this.props.performSearch (this.props.match.params.query);
        }
    };
    
    render () {

        const results = this.props.data;
        let photos;
        // Render photos if search has results and if data has already got fetched  
        if (results.length > 0 && !this.props.isLoading) {
        photos = results.map (photo => 
            <Photo 
                src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`} 
                key={photo.id} 
                alt={photo.title} /> );
        } else if (results.length === 0 && !this.props.isLoading) {
            photos = <NotFound />
        } 

        return (
            <div className="photo-container">
                <h2>{ results.length > 0 ? 'Results' : null }</h2>
                { this.props.isLoading ? 
                <div><Loader type="TailSpin" color="#438bbd" height="80" width="80" /></div> :
                <ul>{ photos }</ul> }
            </div>
        );  
    };
};

export default withRouter (PhotoContainer); 