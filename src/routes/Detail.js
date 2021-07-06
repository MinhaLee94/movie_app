import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location: {
      state: {
        title,
        year,
        poster,
        summary,
        genres
      }
    }, location } = this.props;
    if (location.state) {
      console.log(location);
      return <div className="container">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <div className="movie__upperdata">
            <span className="movie__title">{title}</span>
            <span className="movie__year">{year}</span>
          </div>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary}...</p>
        </div> 
      </div>;
    } else {
      return null;
    }
  }
}
export default Detail;