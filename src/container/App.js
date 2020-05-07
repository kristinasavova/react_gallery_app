import React, { Component } from 'react';
import { 
    BrowserRouter, 
    Route, 
    Switch 
} from 'react-router-dom'; 
import axios from 'axios';  

import apiKey from '../config';

// App components 
import SearchForm from '../components/SearchForm';
import Nav from '../components/Nav';
import PhotoContainer from '../components/PhotoContainer';
import RouteNotFound from '../components/RouteNotFound';

class App extends Component {

    state = {
        photos: [],
        loading: true
    };

    performSearch = (query = 'nature') => { 
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
        this.setState ({
            loading: true 
        });
    }; 

    componentDidMount () {
        this.performSearch ();
    }; 

    render () {
        
        return (
            /* Root router listens to URL-changes and provides other components info about current URL and which component to render. */
            <BrowserRouter>
                <div className="container">
                    <SearchForm onSearch={this.performSearch} />
                    <Nav />
                    {/* Switch only renders the first Route that matches the URL */}
                    <Switch>
                        {/* Render PhotoContainer for each route passing a correspoding data from state as props. */}
                        <Route exact path="/" render={() => <PhotoContainer 
                            data={this.state.photos}
                            isLoading={this.state.loading}
                            performSearch={this.performSearch} />} 
                        />
                        <Route path="/:query" render={({ match }) => <PhotoContainer
                            match={match}
                            data={this.state.photos} 
                            isLoading={this.state.loading}
                            performSearch={this.performSearch} />} 
                        />
                        <Route path="/search" render={() => <PhotoContainer 
                            data={this.state.photos}
                            isLoading={this.state.loading}
                            performSearch={this.performSearch} />}
                        />
                        <Route component={RouteNotFound} />
                    </Switch> 
                </div>
            </BrowserRouter>
        );
    }
}; 

export default App;
