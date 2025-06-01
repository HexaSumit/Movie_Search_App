import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
import Main from './components/Main';
import HeroPage from './components/HeroPage';
import TvSeries from './components/TvSeries';
import MovieProvider from './context/Moviecontext';
import MovieDetails from './components/MovieDetails';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <>
        <Main />
        <Navbar />
      </>
    },
    {
      path: '/movies',
      element: <>
        <Navbar />
        <HeroPage />
      </>
    },
    {
      path: '/series',
      element: <>
        <Navbar />
        <TvSeries />
      </>
    },
    {
      path: '/movies/details/:id',
      element: <>
        <Navbar />
        <MovieDetails />
      </>
    },
  ]
)
function App() {

  return (
    <>
      <MovieProvider>
        <div>
          <RouterProvider router={router} />
        </div>
      </MovieProvider>
    </>
  )
}

export default App
