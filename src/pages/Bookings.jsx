import React from 'react'
import BookingForm from '../components/BookingForm';

const Bookings = () => {
  return (
    <>
      <main className='bg-green h-[100px] md:h-[140px]'>
        <div className="w-full lg:w-[870px] mx-auto py-9 px-5 lg:px-0">
          <h3 className="text-xl md:text-3xl text-white text-center py-2 md:py-3">Reverve a Table</h3>
        </div>
      </main>
      <section className='mt-8 md:mt-10'>
        <div className='w-full lg:w-[870px] mx-auto px-5 lg:px-0'>
          <BookingForm />
        </div>
      </section>
    </>
  )
}

export default Bookings