
import "./comingSoon.css"
import MoviesComingSoon from '../components/MoviesComingSoon'
export default function ComingSoon({data}) {
  return (
    <div className="comingSoon" id='trend'>
      <div className="title">
        <div className="text">Coming Soon</div>
        <div className="line"></div>
      </div>
      <div className="movies">
        <MoviesComingSoon data={data}/>
      </div>
      </div>
  )
}
