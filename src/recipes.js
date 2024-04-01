import greekSaladImage from './assets/icons_assets/greeksalad.jpg';
import bruschettaImage from './assets/icons_assets/bruchetta.svg';
import lemonDessertImage from './assets/icons_assets/lemondessert.jpg';

const recipes = [
  {
    id:1,
    title: "Greek Salad",
    price: 12.99,
    image: greekSaladImage,
    description:`The famous greek salad of crispy
            lettuce, peppers, olives and our Chicago
            style feta cheese, garnished with crunchy
            garlic and rosemary croutons.`
  },

  {
    id:2,
    title:"Bruchetta",
    price:5.99,
    image:bruschettaImage,
    description:`Our Bruschetta is made from grilled bread
        that has been smeared with garlic and seasoned with salt and olive oil. `
  },

  {
    id: 3,
    title: "Lemon Dessert",
    price: 5.00,
    image: lemonDessertImage,
    description: `This comes straight from grandma’s
          recipe book, every last ingredient has been sourced
          and is as authentic as can be imagined.`
  },

]

export default recipes