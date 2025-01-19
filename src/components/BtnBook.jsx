import React from 'react'
import "./btnBook.css"
function BtnBook() {
  return (
    <button className="book">
        <ion-icon name="bookmark-outline"></ion-icon>
        <div className='text'>Book</div>
    </button>
  )
}

export default BtnBook