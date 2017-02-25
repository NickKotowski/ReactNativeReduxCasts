import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  //gets called when AlbumList is created
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  //axios is told to fetch data from the link, .then is called when it happened
  //a function is called that sets the array of albums equal to the data that was
  // fetched 

  //helper method. retruns AlbumDetail (imported above) with keys of the album
  //above the state is an empty array, here the state is changed by the function
  //, the information (album) is injected into it with the key of album. title
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }
  //function (album) { return <AlbumDetail key={album.title} album={album} /> }

  render() {
    console.log(this.state);
    //a class must have a render function
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
