import React from 'react'
import headImg from '../assets/icons_assets/restauranfood.jpg'

function Header() {
  return (
    <header className='header'>
      <section>
        <div className='banner'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In elementum vulputate consequat. Sed metus arcu, aliquam
            in viverra at, tincidunt rhoncus orci. Proin rhoncus nulla
            lectus, a feugiat purus auctor quis. Praesent ac libero vel
            ligula suscipit mattis. Curabitur posuere ut est ultrices bibendum.
          </p>
         <button aria-label='On Click'>Reserve a Table</button>
        </div>

        {/* image */}
        <div className='head-image'>
          <img src={headImg} alt="headImg" />
        </div>
      </section>
    </header>
  )
}

export default Header