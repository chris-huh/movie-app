import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ title, summary, poster, rating, year, genres }) {
	const [expanded, toggle] = useState(false);

	const paragraph =
		summary.length < 180 ? summary : expanded ? summary : summary.slice(0, 180) + '...';

	return (
		<div className='movie'>
			<img src={poster} alt={title} title={title} />
			<div className='movie-data'>
				<h3 className='movie-title'>{title}</h3>
				<h5 className='movie-year'>{year}</h5>
				<ul className='movie-genres'>
					{genres.map((g, index) => (
						<li className='genre' key={index}>
							{g}
						</li>
					))}
				</ul>
				<h5 className='movie-rating'>{rating} / 10</h5>
				<p className='movie-summary'>
					{paragraph}
					{summary.length >= 180 ? (
						<button className='expand-button' onClick={() => toggle(!expanded)}>
							{expanded ? 'less' : 'more'}
						</button>
					) : (
						''
					)}
				</p>
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
