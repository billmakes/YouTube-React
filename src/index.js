import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyCLJCm5J-L2t2Sm9mOrrF9ZldXBNukAcVo';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
	console.log(data);
});

class App extends Component {
	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}


// Take this component's generated HTML and put it on the DOM

ReactDOM.render(<App />, document.querySelector('.container'));