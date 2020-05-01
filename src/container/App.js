import React, { Component } from 'react';
import axios from 'axios';  
import {
    BrowserRouter, 
    NavLink,
    Route,
    Switch
} from 'react-router-dom'; 

import apiKey from '../config';

// App components 
import SearchForm from '../components/SearchForm';
import Nav from '../components/Nav';
import PhotoContainer from '../components/PhotoContainer';
import NotFound from '../components/NotFound';

class App extends Component {

    state = {
        photos: [],
        tag: this.query, 
        loading: true 
    };

    componentDidMount () {
        this.performSearch (); 
    } 

    performSearch = (query = 'mountains') => { // provide a default value for the query parameter
        // Axios automatically returns the response in JSON format   
        axios.get (`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            // A callback function that updates the gif state 
            .then (response => {
                // Axios returns the response from server as `data` 
                this.setState ({
                    photos: response.data.photos.photo,
                    tag: query,
                    loading: false  
                })
            })
            .catch (error => {
                console.log ('Error fetching and parsing data', error); 
            });
    };
     
    render () {
        console.log (this.state.photos); 
        console.log (this.state.tag);
        return (
            /* Root router listens to URL-changes and provides other components info about current URL and which component to render. */
            <BrowserRouter>
                <div className="container">
                    <NavLink to={`/${this.state.tag}`}><SearchForm onSearch={this.performSearch} /></NavLink>
                    <Nav />
                    {
                        this.state.loading ? 
                        <p>Loading... </p> :
                        <PhotoContainer data={this.state.photos} />
                    }
                </div>
                <Switch>
                    <Route path={`/${this.state.tag}`} render={ () => <PhotoContainer data={this.state.photos} />}/>
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}; 

export default App;
