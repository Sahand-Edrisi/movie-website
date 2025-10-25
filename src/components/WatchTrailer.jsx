import "./watchTrailer.css";
function WatchTrailer({ trailer }) {
  return (
    <div className="watchTrailer">
      <div className="icon">
        <ion-icon className="play" name="play-outline" onClick={showMovieTrailer}></ion-icon>
        <div id="video" >
          <div className="bacIframe" >
          <ion-icon id="close"onClick={closeWindow}  name="close-outline"></ion-icon>
          </div>
          <iframe id="iframe" src={trailer} title="myFrame" />
        </div>
      </div>
      Watch Trailer
    </div>
  );
  function showMovieTrailer() {
    let close = document.getElementById("close");
    let video = document.getElementById("video");
    setTimeout(() => {
      video.style.visibility = "visible";
      close.style.visibility = "visible";
    }, 10);
  }
  function closeWindow() {
    let video = document.getElementById("video");
    let iframe = document.getElementById("iframe");
    let close = document.getElementById("close");
    video.style.visibility = "hidden";
    close.style.visibility = "hidden";
    let iframeSrc = iframe.src;
    iframe.src = iframeSrc;
  }
}

export default WatchTrailer;
