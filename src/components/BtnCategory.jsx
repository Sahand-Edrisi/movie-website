
import "./btnCategory.css";

function BtnCategory({ ShowCategory, data }) {
  return (
    <div className="btnCategory">
      {data.map((category, index) => (
        <div
          key={index}
          id={category._id}
          className={`btn ${category.active ? "active" : ""}`}
          onClick={() => ShowCategory(category.title)}
        >
          {category.title}
        </div>
      ))}
    </div>
  );
}

export default BtnCategory;
