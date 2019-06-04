import React from 'react';

import SearchBar from './SearchBar';
import YouTube from '../Api/YouTube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

	state = {videos : [],selectedVideo:null}; 

	componentDidMount = () => {
		this.onSearch("hello");
	}

	onSearch = async (term) => {//whenever there is a search for a term
		// console.log(term);
		const response = await YouTube.get('/search',{
			params:{
				q : term,
				part:'snippet',
				key : 'AIzaSyCpetNMf9Bj4VzdsVcx0LtYLyy5vU3RPCA'
			}
		});
		this.setState({
			videos : response.data.items,
			selectedVideo : response.data.items[0]
		});
		console.log(this.state.videos);
	}

	onVideoSelect = (video) => {
		// console.log("From the app.js",video.snippet);
		this.setState({selectedVideo : video})
	}

	render(){
		return(
			<div className="ui container">
				<SearchBar onSubmit={this.onSearch}/>
				<div className = "ui grid">
					<div className = "row">
					<div className = "eleven wide column">
						<VideoDetail video={this.state.selectedVideo}/>
					</div>
					<div className="five wide column">
						<VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
					</div>
					</div>
				</div>
			</div>
			);
	}
}

export default App;