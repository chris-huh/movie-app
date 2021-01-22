import React from 'react';
import PropTypes from 'prop-types';

function Movie({ title, summary, poster, rating, year }) {
	return <h4>{title}</h4>;
}

Movie.propTypes = {
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	year: PropTypes.number.isRequired,
};

export default Movie;
