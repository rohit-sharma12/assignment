import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/app-layout'
import Landing from './pages/landing'
import Auth from './pages/auth'
import CreateAccount from './pages/create-account'
import Setting from './pages/setting'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/auth',
        element: <Auth />,
      },
      {
        path: '/create-account',
        element: <CreateAccount />,
      },
      {
        path: '/setting',
        element: <Setting />,
      },
    ],
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
