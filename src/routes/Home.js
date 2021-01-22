import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
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
		const { isLoading, movies } = this.state;
		return (
			<section className='container'>
				{isLoading ? (
					<div className='loader'>
						<span className='loader-text'>Loading...</span>
						<div className='spinner'>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				) : (
					<div className='movies'>
						{movies.map(m => (
							<Movie
								key={m.id}
								title={m.title}
								summary={m.summary}
								poster={m.medium_cover_image}
								rating={m.rating}
								year={m.year}
								genres={m.genres}
							/>
						))}
					</div>
				)}
			</section>
		);
	}
}

export default Home;
