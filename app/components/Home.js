import React, {Component} from 'react';

import omdb_api from './../api/omdb_api';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: undefinded
		};
	}
	searchMovie(e) {
		e.preventDefault();

		omdb_api(this.movieSearch.value).then((res) =>{
			console.log(res)
			this.setState({
				results: res.data
			})
		});
	}
}