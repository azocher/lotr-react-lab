// import react and the component class
import React, { Component } from 'react';
import MovieTitle from './MovieTitle';

// declare a movie component
class Movie extends Component {
    render() {
        return (
            <div>
                <MovieTitle title={this.props.title} />
                <p>{this.props.hours}hr {this.props.minutes}min</p>
            </div>
        )
    }
}

// export my component
export default Movie;