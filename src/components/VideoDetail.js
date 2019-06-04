import React from 'react';

class VideoDetail extends React.Component{
	render(){
		const {video} = this.props;
		if(!video)
			return(<div className="ui segment">Loading ... </div>);
		const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
		return (
				<div>
					<div className="ui embed">
						<iframe
							title="video-player"
							src={videoSrc} 
							frameBorder="0" 
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
						</iframe>
					</div>
					<div className="ui segment">
						<h4 className="ui header">{video.snippet.title}</h4>
						<p>{video.snippet.description}</p>
					</div>
				</div>
				);
	}
}

export default VideoDetail;
