import React from 'react'
import recipes from '../recipes'

const Main = () => {
  const handleOrder = (id)=>{
    console.log(id)
  }
  return (
    <main className='main'>
      <div>
        <div className='menu-header'>
          <h2>Specials</h2>
          <button>Online Menu</button>
        </div>
        {/* menu cards */}
      <div className='cards'>
        {
          recipes.map(recipe => <div key={recipe.id} className='menu-items'>
            <img src={recipe.image} alt='our-recipees'/>
            <div className='menu-content'>
              <div className='heading'>
                <h5>{recipe.title}</h5>
                <p>{recipe.price}</p>
              </div>
             <p>{recipe.description}</p>
             <button className='orderbtn' onClick={()=>handleOrder(recipe.id)}>Order Now</button>
            </div>
          </div>)
        }
      </div>

      </div>
    </main>
  )
}

export default Main