import React from 'react';

import SearchBar from './SearchBar';
import YouTube from '../Api/YouTube';
import VideoList from './VideoList';

class App extends React.Component{

	state = {videos : []}; 

	onSearch = async (term) => {//whenever there is a search for a term
		// console.log(term);
		const response = await YouTube.get('/search',{
			params:{
				q : term,
				part:'snippet',
				key : 'AIzaSyCpetNMf9Bj4VzdsVcx0LtYLyy5vU3RPCA'
			}
		});
		this.setState({videos : response.data.items});
		console.log(this.state.videos);
	}

	onVideoSelect = (video) => {
		console.log("From the app.js",video.snippet);
	}

	render(){
		return(
			<div className="ui container">
				<SearchBar onSubmit={this.onSearch}/>
				<VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
			</div>
			);
	}
}

export default App;