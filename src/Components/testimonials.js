import React from 'react';
import review from '../review';
import StarRating from '../StarRating.js'

const Testimonials = () => {
  return (
    <div>
      <section className='testi'>
        <h2>Testimonials</h2>
        <div className='testi-cards'>
          {
            review.map(rev => <div key={rev.id}>
              <img src={rev.image} alt={`Testimonial by ${rev.title}`} />
              <StarRating rating={rev.rating} class="starrating" />
              <div className='custom-review'>
                <h5>{rev.title}</h5>
                <p>{rev.description}</p>
              </div>
            </div>)
          }
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
