import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import NotFound from './pages/NotFound'
import Layout from './components/layout/default'
import GlobalStyle from './config/global.style'
import AdminDashboard from './pages/Dashboard/AdminDashboard'
import InvoiceList from './pages/InvoiceList/InvoiceList'
import Login from './pages/Login/Login'
import SignIn from './pages/SignIn/SignIn'
import Calendar from './pages/Calendar/Calendar'
import NewInvoice from './pages/InvoiceList/NewInvoice/NewInvoice'

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/dashboard',
          element: <AdminDashboard />
        },
        {
          path: '/invoice',
          element: <InvoiceList />
        },
        {
          path: '/new-invoice',
          element: <NewInvoice />
        },
        {
          path: '/calendar',
          element: <Calendar />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    },
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/sign-in',
      element: <SignIn />
    }
  ])

  return (
    <ThemeProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
      {/*
            below code should not be part of App.tsx file
            for this boilerplate I've put all this code in this file.
            this file should have only route provide. theme provider
            and global features only.

            When you start working on project move/remove below code
            and related code to different file.
            */}
    </ThemeProvider>
  )
}

export default App
