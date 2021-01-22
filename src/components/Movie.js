import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ title, summary, poster, rating, year, genres }) {
	return (
		<div className='movie'>
			<img src={poster} alt={title} title={title} />
			<div className='movie-data'>
				<h3 className='movie-title'>{title}</h3>
				<ul className='movie-genres'>
					{genres.map((g, index) => (
						<li className='genre' key={index}>
							{g}
						</li>
					))}
				</ul>
				<h5 className='movie-year'>{year}</h5>
				<h5 className='movie-rating'>{rating}</h5>
				<p className='movie-summary'>{summary}</p>
			</div>
		</div>
	);
}

Movie.propTypes = {
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	year: PropTypes.number.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
