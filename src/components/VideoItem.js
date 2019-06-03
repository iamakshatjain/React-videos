import React from 'react';

import './VideoItem.css';

class VideoItem extends React.Component{
	render(){
		const {video,onVideoSelect} = this.props;
		return(

			<div className="video-item item" onClick={() => onVideoSelect(video)}>
				<img src={video.snippet.thumbnails.medium.url} 
						alt={video.snippet.description} 
						className="ui image"/>
				<div className="content">
					<div className="header">
						{video.snippet.title}
					</div>
				</div>
			</div>
			);
	}
}

export default VideoItem;