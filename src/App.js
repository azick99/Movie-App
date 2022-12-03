import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Download from './routes/download/Download'
import ErrorPage from './routes/home/ErrorPage'
import Navigation from './routes/navigation/Navigation'
import New from './routes/new/New'
import All from './routes/home/home-navigation/all/All'
import Movies from './routes/home/home-navigation/movies/Movies'
import Serials from './routes/home/home-navigation/serials/Serials'
import Cartoon from './routes/home/home-navigation/cartoon/Cartoon'
import HomeNovigation from './routes/home/home-navigation/HomeNovigation'
import { MovieProvider } from './context/moviesCard.context'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomeNovigation />,
        children: [
          {
            path: '/',
            element: <All />,
          },
          {
            path: '/movies',
            element: <Movies />,
          },
          {
            path: '/serials',
            element: <Serials />,
          },
          {
            path: '/cartoon',
            element: <Cartoon />,
          },
        ],
      },
      {
        path: '/new',
        element: <New />,
      },
      {
        path: '/download',
        element: <Download />,
      },
    ],
  },
])
function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
