import React from 'react';
import Button from '../components/Button';
import DishCard from '../components/DishCard';
import restauranfood from '../assets/restauranfood.jpg';

import greek_salad from '../assets/greek_salad.jpg';
import bruchetta from '../assets/bruchetta.jpg';
import lemon_dessert from '../assets/lemon_dessert.jpg'
import MarioAndAdrianA from '../assets/Mario_and_Adrian_A.jpg';
import MarioAndAdrianB from '../assets/Mario_and_Adrian_B.jpg';
import RestaurantChefB from '../assets/restaurant_chef_B.jpg';

const productList = [
  {
    no: 1,
    name: 'Greek salad',
    price: 12.99,
    desc: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: greek_salad
  },
  {
    no: 2,
    name: 'Bruchetta',
    price: 10.99,
    desc: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
    image: bruchetta
  },
  {
    no: 3,
    name: 'Lemon Dessert',
    price: 8.99,
    desc: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    image: lemon_dessert
  }
]


const HomePage = () => {
  return (
    <>
      
      <main className="bg-green h-[300px] md:h-[340px]">
        <div className="w-full lg:w-[870px] flex justify-between mx-auto py-9 px-5 lg:px-0">
          <div className="w-2/4">
            <h1 className="text-3xl md:text-5xl text-yellow font-semibold font-serif">Little Lemon</h1>
            <h3 className="text-xl md:text-3xl text-white py-2 md:py-3">Chicago</h3>
            <p className="text-sm md:text-lg text-white w-full md:w-3/4">
              Little Lemon is a charmig nerghborhood bistro the serves simple food and classic cocktails in a lively but casual environment.
            </p>
            <div className="mt-5">
              <Button>Reserve a Table</Button>
            </div>
          </div>
          <div className="relative w-2/4">
            <img
              className="absolute right-0 rounded-lg object-cover w-[250px] h-[240px] md:w-[335px] md:h-[340px]"
              src={restauranfood}
              alt="restauranfood"
            />
          </div>
        </div>
      </main>

      <aside className="mt-8 md:mt-20">
        <div className="w-full lg:w-[870px] mx-auto px-5 lg:px-0">
          <div className=" flex justify-between items-center">
            <div>
              <h1 className="text-2xl md:text-4xl font-semibold">This week specials</h1>
            </div>
            <div className='hidden md:block'>
              <Button>Online Menu</Button>
            </div>
          </div>

          <div className="mt-5 md:mt-10 md:flex justify-between">
            {productList.map((item) => {
              const { no, name, desc, image, price } = item;
              return (
                <DishCard
                  name={name}
                  desc={desc}
                  image={image}
                  price={price}
                  key={no}
                />
              );
            })}
          </div>
        </div>
      </aside>

      <section className="bg-green mt-16 hidden md:block">
        <div className="w-full lg:w-[870px] mx-auto py-16 flex justify-betweeen px-5 lg:px-0">
          <div className='w-1/3 relative'>
            <img className='absolute object-cover object-right-bottom h-80 rounded-lg' src={MarioAndAdrianB} alt='Mario And Adrian B' />
          </div>
          <div className='w-2/3 pl-10'>
            <h1 className="text-yellow text-3xl font-semibold text-center">
              Testimonials
            </h1>
            <blockquote className='text-white py-4'>
              " Love the food, very friendly staff and I love that the owner is always there his wife is a cook there too. Best place to eat."
            </blockquote>
            <p className='text-white'>-Mario</p>
          </div>
         
        </div>
      </section>

      <section className='hidden md:block'>
        <div className="w-full lg:w-[870px] mx-auto my-16 flex justify-between items-center px-5 lg:px-0">
          <div className='w-2/4'>
            <h1 className="text-5xl font-semibold font-serif">Little Lemon</h1>
            <h3 className="text-3xl py-3">Chicago</h3>
            <p className="text-lg w-3/4">
              The restaurant features a locally-sourced menu with dauly specials.
            </p>
          </div>
          <div className="relative w-2/4 h-[400px]">
            <div className="absolute top-0 right-0 h-80 w-3/5">
              <img className='object-cover h-full w-full rounded-lg' src={MarioAndAdrianA} alt="Mario And Adrian" />
            </div>
            <div className="absolute bottom-0 left-0 h-80 w-3/5">
              <img className='object-cover h-full w-full rounded-lg' src={RestaurantChefB} alt="Restaurant Chef B" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage