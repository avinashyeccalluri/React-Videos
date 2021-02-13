import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetails'
import youtube from '../apis/youtube'

const KEY = 'AIzaSyAZgiO6VC97T7IEe4M-mj83S7qurqHjc8U';
class App extends React.Component {
   state = { videos: [] , selectedVideo : null};

   componentDidMount(){
    this.onTermsSubmit('temple'); 
   }
  onTermsSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 10,
        key: KEY
      }
    });
    this.setState({
       videos : response.data.items,
       selectedVideo : response.data.items[0]
      });
      
  };

  onVideoSelect = video => {
    this.setState({selectedVideo: video})
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermsSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList  onVideoSelect = {this.onVideoSelect} videos = {this.state.videos}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
