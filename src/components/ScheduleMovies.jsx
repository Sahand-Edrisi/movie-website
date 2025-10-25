
import "./scheduleMovies.css";
function ScheduleMovies({ movies }) {

  return (
    <div className="ScheduleMovies">
      {movies.map((movie,index) => (
        <div className="container" key={index}>
          <div className="hover">
            <div className="hoverBackground"></div>
            <div className="name">
              {movie.title}
              <div className="line"></div>
              <div className="icons">
                <ion-icon name="add-outline"></ion-icon>
                <ion-icon name="play-outline"></ion-icon>
              </div>
            </div>
          </div>
          <img src={movie.bgImg} alt="" />
          <div className="information">
            <div className="length">{movie.length}</div>
            <div className="categoryText">{movie.category}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ScheduleMovies;
