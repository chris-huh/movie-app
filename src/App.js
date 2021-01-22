import React from 'react';
import axios from 'axios';
import Movie from './components/Movie';

class App extends React.Component {
	state = {
		isLoading: true,
		movies: [],
	};

	getMovies = async () => {
		const {
			data: {
				data: { movies },
			},
		} = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating');
		console.log(movies);
		this.setState({ movies, isLoading: false });
	};

	componentDidMount() {
		this.getMovies();
	}

	render() {
		const { isLoading } = this.state;
		return (
			<div>
				{isLoading
					? 'Loading...'
					: this.state.movies.map(m => (
							<Movie
								key={m.id}
								title={m.title}
								summary={m.summary}
								poster={m.medium_cover_image}
								rating={m.rating}
								year={m.year}
							/>
					  ))}
			</div>
		);
	}
}

export default App;
