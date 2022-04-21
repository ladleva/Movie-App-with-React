function Card(props) {
  const { Title, Year, imdbID, Type, Poster } = props;
  const text = Title.replace(/^a-z0-9 /i, "").replace(/\s/, "+");

  return (
    <div id={"movie-" + imdbID} className="card">
      <div className="card-image">
        {Poster !== "N/A" ? (
          <img src={Poster} alt="" />
        ) : (
          <img
            src={`https://via.placeholder.com/300x430.png?text=${text}`}
            alt=""
          />
        )}
      </div>
      
      <div className="card-content">
        <span>{Title}</span>
        <p>
          <span>
            {Year}, {Type}
          </span>
          <br />
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              props.readMoreHandler(imdbID);
            }}
          >
            Read more
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
