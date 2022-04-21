function Movie(props) {
  if (!props.Title) {
    return <p>Movie not found</p>;
  }
  const { Title, Year, Runtime, Genre, Actors, Plot, Poster } = props;
  const text = Title.replace(/^a-z0-9 /i, "").replace(/\s/, "+");

  return (
    <div className="movieCard">
      <div>
        <h1 className="title">{Title}</h1>
      </div>
      <div>
        {Poster !== "N/A" ? (
          <img className="responsive-img" src={Poster} alt="" />
        ) : (
          <img
            className="responsive-img"
            src={`https://via.placeholder.com/300x430.png?text=${text}`}
            alt=""
          />
        )}
      </div>
      
      <div>
        <ul className="ul">
          <li>
            <strong>Year:</strong> {Year}
          </li>
          <li>
            <strong>Runtime:</strong> {Runtime}
          </li>
          <li>
            <strong>Genre: </strong>
            {Genre}
          </li>
          <li>
            <strong>Actors: </strong>
            {Actors}
          </li>
        </ul>
        <p>{Plot}</p>
      </div>
    </div>
  );
};

export default Movie;
