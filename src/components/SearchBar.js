import React from 'react';

class SearchBar extends React.Component{

	state = {term:''};

	onInputChange = (event) => {
		this.setState({term:event.target.value});
	}

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);//in app.js
	}

	render(){
		return(
			<div className="ui segment search-bar" style={{margin:'10px'}}>
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label htmlFor="video-searh">Video Search</label>
						<input type="text"
						 id="video-searh" 
						 value={this.state.term}
						 onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
			)
	}
}

export default SearchBar;