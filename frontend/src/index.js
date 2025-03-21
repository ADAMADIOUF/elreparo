import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import HomePage from './components/HomePage';
import MenuPage from './pages/MenuPage';
import AboutUsPage from './pages/AboutUsPage';
import ChefPages from './pages/ChefPages';
import ContactPage from './pages/ContactPage';
import ReservationPage from './pages/ReservationPage';
import BreafastPage from './pages/BreafastPage';
import AppetizersPage from './pages/AppetizersPage';
import DrinkPage from './pages/DrinkPage';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomePage />} />
      <Route path='/menus' element={<MenuPage />} />
      <Route path='/about-us' element={<AboutUsPage />} />
      <Route path='/chefs' element={<ChefPages />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/reservation' element={<ReservationPage />} />
      <Route path='/breakfast-menu' element={<BreafastPage />} />
      <Route path='/appetizers-menu' element={<AppetizersPage />} />
      <Route path='/drinks-menu' element={<DrinkPage />} />
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)


