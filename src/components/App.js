import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'

const KEY = 'AIzaSyAZgiO6VC97T7IEe4M-mj83S7qurqHjc8U';
class App extends React.Component {
  
  onTermsSubmit = term => {
    youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermsSubmit}/>
      </div>
    );
  }
}

export default App;
