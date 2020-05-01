import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import axios from 'axios';  

import apiKey from '../config';

// App components 
import SearchForm from '../components/SearchForm';
import Nav from '../components/Nav';
import PhotoContainer from '../components/PhotoContainer';

class App extends Component {

    state = {
        photos: [],
        loading: true 
    };

    componentDidMount () {
        this.performSearch (); 

    } 

    performSearch = (query) => { 
        // Axios automatically returns the response in JSON format   
        axios.get (`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            // A callback function that updates the gif state 
            .then (response => {
                // Axios returns the response from server as `data` 
                this.setState ({
                    photos: response.data.photos.photo,
                    loading: false  
                })
            })
            .catch (error => {
                console.log ('Error fetching and parsing data', error); 
            });
    }; 

    render () {
        
        return (
            /* Root router listens to URL-changes and provides other components info about current URL and which component to render. */
            <BrowserRouter>
                <div className="container">
                    <SearchForm onSearch={this.performSearch} />
                    <Nav />
                    <Route path="/search" render={() => <PhotoContainer data={this.state.photos} />} />
                </div>
            </BrowserRouter>
        );
    }
}; 

export default App;
