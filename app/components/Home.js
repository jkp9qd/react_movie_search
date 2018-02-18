import React, {Component} from 'react';

import omdb_api from './../api/omdb_api';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: undefined
		};
	}
	searchMovies(e) {
		e.preventDefalut();
		omdb_api(this.refs.movieSearch.value).then((res) =>{
			console.log(res)
			this.setState({
				results: res.data
			})
		})
	}
	render(){
		console.log(this.state.results)
		const displayMovie = () =>{
			if(this.state.results){
				return (
					<div>
					<h5>Movie Results</h5>
					{
						this.state.results.map((res, index) => {
							return (
							<div>
							<img src={res.images.fixed_height.url}/>
							</div>
							)
						})
					}
					</div>
					)
			}
		}

		return (
			<div style={{width: '15%'}}>
			<form onSubmit={this.searchMovies.bind(this)}>
			<label>Movies</label>
			<input type="text" ref="movieSearch"/>
			<input type="submit"/>
			</form>
			<br></br>
			{displayMovie()}
			</div>
			);
	}
};