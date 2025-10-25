import Information from "./Information";
import "./movieInformation.css";
import BtnBook from "./BtnBook";
import BtnMyList from "./BtnMyList";
function MovieInformation({ data }) {
  return (
    <div className="movieInformation">
      <div className="container">
        <div className="titleImg">
          <img src={data.titleImg} alt="" />
        </div>
        <Information data={data} />
        <div className="description">{data.description}</div>
        <div className="btns">
          <BtnBook />
          <BtnMyList />
        </div>
      </div>
    </div>
  );
}

export default MovieInformation;
