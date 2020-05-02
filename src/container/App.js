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
import NotFound from '../components/NotFound';

class App extends Component {

    state = {
        initialData: [],
        photos: [],
        mountains: [],
        lake: [],
        forest: [],
        loading: true
    };

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

    componentDidMount () {

        // Get initial data for the `/` route 
        axios.get (`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=mountains,lake,forest&per_page=24&format=json&nojsoncallback=1`)
            .then (response => {
                this.setState ({
                    initialData: response.data.photos.photo
                })
            })
            .catch (error => {
                console.log ('Error fetching and parsing data', error)
            }); 

        // Get data for the `/mountains` route 
        axios.get (`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=mountains&per_page=24&format=json&nojsoncallback=1`)
            .then (response => {
                this.setState ({
                    mountains: response.data.photos.photo 
                })
            })
            .catch (error => {
                console.log ('Error fetching and parsing data', error)
            }); 
        
        // Get data for the `/lake` route 
        axios.get (`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=lake&per_page=24&format=json&nojsoncallback=1`)
            .then (response => {
                this.setState ({
                    lake: response.data.photos.photo
                })
            })
            .catch (error => {
                console.log ('Error fetching and parsing data', error)
            });

        // Get data for the `/forest` route 
        axios.get (`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=forest&per_page=24&format=json&nojsoncallback=1`)
            .then (response => {
                this.setState ({
                    forest: response.data.photos.photo
                })
            })
            .catch (error => {
                console.log ('Error fetching and parsing data', error)
            });
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
                        <Route exact path="/" render={() => <PhotoContainer data={this.state.initialData} />} />
                        <Route path="/mountains" render={() => <PhotoContainer data={this.state.mountains} />} />
                        <Route path="/lake" render={() => <PhotoContainer data={this.state.lake} />} />
                        <Route path="/forest" render={() => <PhotoContainer data={this.state.forest} />} /> 
                        <Route path="/search" render={() => 
                            (this.state.loading) ?
                                <h3>Loading...</h3> :
                                <PhotoContainer data={this.state.photos} />} 
                            />
                        <Route component={NotFound} />
                    </Switch> 
                </div>
            </BrowserRouter>
        );
    }
}; 

export default App;
