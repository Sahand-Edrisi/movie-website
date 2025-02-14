import React from "react";
import "./footerColTwo.css";
import FooterUsefulLinksNames from "../data/FooterUsefulLinksNames";
import FooterOurCinemasNames from "../data/FooterOurCinemasNames";

function FooterColTwo() {
  return (
    <div className="col2">
      <div className="col">
        <div className="title">Useful Links</div>
        {FooterUsefulLinksNames.map((names, index) => (
          <div className="item" key={index}>
            {" "}
            <ion-icon name="chevron-forward-outline"></ion-icon>
            {names.name}
          </div>
        ))}
      </div>
      <div className="col">
        <div className="title">Our Cinemas</div>
        {FooterOurCinemasNames.map((names, index) => (
          <div className="item" key={index}>
            {" "}
            <ion-icon name="chevron-forward-outline"></ion-icon>
            {names.name}
          </div>
        ))}
      </div>
      <div className="col">
        <div className="title">Contact us</div>
        <div>Street Name</div>
        <div>City Name, State 123456</div>
        <div>Australia</div>
        <div>Phone : +1 2314 56 9878</div>
        <div>Email : info@example.com</div>
      </div>
    </div>
  );
}

export default FooterColTwo;
