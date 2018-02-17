import axios from 'axios';

module.exports = (search) => {
	let api_key = 'ef74689a'
	let api_url = `http://omdbapi.com/?apikey=${api_key}&t=${search}`
	return axios.get(api_url, {
		headers: {
			'content-type': 'application/json',
			'accept': 'application/json'
		}
	}).then((results) => {
		return results
	});
}

