import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';

import logoFooter from './assets/logo_dung.png';
import HomePage from './pages/HomePage';
import { ReactComponent as Logo } from './assets/Logo.svg';
import { ReactComponent as Backet } from './assets/basket.svg';
import { ReactComponent as Hamberger } from './assets/hamburger_menu.svg';
import BookingPage from './pages/BookingPage';


function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="h-20">
        <div className="h-full w-full lg:w-[870px] flex justify-between items-center mx-auto md:max-lg:px-5">
          <div className='flex justify-between items-center md:block w-full md:w-fit px-5 md:px-0'>
            <Hamberger className='md:hidden curser-pointer' onClick={() => setToggle(!toggle)} />
            <Logo className='curser-pointer' />
            <Backet className='md:hidden curser-pointer' />
          </div>
          <nav className={`w-2/3 absolute md:static top-20 bg-grey md:bg-white z-20 pl-5 pt-5 md:pl-0 md:pt-0 transition-all duration-500 ease-in md:opacity-100 ${toggle ? 'left-0 opacity-100' : 'left-[-520px] opacity-0'}`}>
            <ul className="block md:flex justify-between font-semibold">
              <li className='pb-5 md:pb-0'><Link to="/" onClick={() => setToggle(!toggle)}>Home</Link></li>
              <li className='pb-5 md:pb-0'><Link to="/about">About</Link></li>
              <li className='pb-5 md:pb-0'><Link to="/menu">Menu</Link></li>
              <li className='pb-5 md:pb-0'><Link to="/booking" onClick={() => setToggle(!toggle)}>Reservations</Link></li>
              <li className='pb-5 md:pb-0'><Link to="/order">Order Online</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path='/booking' element={<BookingPage />}></Route>
      </Routes>
      <footer className='bg-green mt-16 hidden md:block'>
        <div className='w-full lg:w-[870px] mx-auto py-16 flex justify-betweeen px-5 lg:px-0'>
          <div className='w-1/4'>
            <img className='object-cover h-full w-40 rounded-lg' src={logoFooter} alt="logo footer" />
          </div> 
           <div className='w-3/4 flex justify-between'>
            <div>
              <ul>
                <li className='font-semibold text-grey pb-2'>Navigation</li>
                <li className='text-grey'>Home</li>
                <li className='text-grey'>About</li>
                <li className='text-grey'>Menu</li>
                <li className='text-grey'>Reservations</li>
                <li className='text-grey'>Order Online</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className='font-semibold text-grey pb-2'>Contact</li>
                <li className='text-grey'>Adress</li>
                <li className='text-grey'>Phone number</li>
                <li className='text-grey'>Email</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className='font-semibold text-grey pb-2'>Social Media</li>
                <li className='text-grey'>Facebook</li>
                <li className='text-grey'>Instagram</li>
                <li className='text-grey'>Tiktok</li>
              </ul>
            </div>
           </div>
           
        </div>
      </footer>
    </>
  );
}

export default App;
