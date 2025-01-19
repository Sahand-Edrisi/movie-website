import React from 'react'
import "./btnMyList.css"
function BtnMyList() {
  return (
    <button className="myList">
        <ion-icon name="add-outline"></ion-icon>
        <div className='text'>My List</div>
    </button>
)
}

export default BtnMyList