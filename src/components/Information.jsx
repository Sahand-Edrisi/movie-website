import "./information.css";
function Information({ data }) {
  return (
    <div className="information">
      <div className="year">
        <div className="text">{data.year}</div>
      </div>
      <div className="ageLimit">
        <div className="text">{data.ageLimit}</div>
      </div>
      <div className="length">
        <div className="text">{data.length}</div>
      </div>
      <div className="category">
        <div className="text">{data.category}</div>
      </div>
    </div>
  );
}

export default Information;
