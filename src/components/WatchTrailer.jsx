import React from "react";
import "./watchTrailer.css";
function WatchTrailer({ trailer }) {
  return (
    <div className="watchTrailer">
      <div className="icon">
        <ion-icon name="play-outline" onClick={showMovieTrailer}></ion-icon>
        <div id="video" onClick={closeWindow}>
          <iframe id="iframe" src={trailer} title="myFrame" />
        </div>
      </div>
      Watch Trailer
    </div>
  );
  function showMovieTrailer() {
    let video = document.getElementById("video");
    setTimeout(() => {
      video.style.visibility = "visible";
    }, 10);
  }
  function closeWindow() {
    let video = document.getElementById("video");
    let iframe = document.getElementById("iframe");
    video.style.visibility = "hidden";
    let iframeSrc = iframe.src;
    iframe.src = iframeSrc;
  }
}

export default WatchTrailer;
