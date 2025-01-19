import React from "react";
import Information from "./Information";
import "./movieInformation.css";
import BtnBook from "./BtnBook";
import BtnMyList from "./BtnMyList";
function MovieInformation({ data }) {
  console.log(data);
  return (
    <div className="movieInformation">
      <div className="container">
        <div className="titleImg">
          <img src={data.titleImg} alt="" />
        </div>
        <div className="information">
          <Information data={data} />
        </div>
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
