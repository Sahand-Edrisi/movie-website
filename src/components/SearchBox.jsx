import "./searchBox.css";

function SearchBox() {
  return (
    <div className="container">
      <ion-icon name="search-outline"></ion-icon>
      {"|"}
      <input type="text" placeholder="search" />
    </div>
  );
}

export default SearchBox;
