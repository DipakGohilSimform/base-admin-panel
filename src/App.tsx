import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Button } from './components/ant'
import { ThemeProvider } from './context/ThemeContext'
import viteLogo from '/vite.svg'
import reactLogo from './assets/images/react.svg'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Layout from './components/layout/default'
import { increment, decrement } from './store/counterSlice'
import { useAppSelector, useAppDispatch } from './store'
import { getUser, User } from './store/userSlice'
import GlobalStyle from './config/global.style'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const user = useAppSelector((state) => state.user.users)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          index: true,
          element: <Home />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ])

  /*
  Below code is for ErrorBoundary. 
  if count is 5 it will through error hence it wil show error content.
  this is just for demo. you can remove it.
  */
  if (count === 5) {
    // Simulate an error!
    throw new Error('Simulated error.')
  }
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
      <div style={{ display: 'flex' }}>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img
            style={{ width: 100, height: 100 }}
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            style={{ width: 100, height: 100 }}
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <p style={{ fontWeight: 500, letterSpacing: '1px' }}>
        Vite + Ant Design + Styled Components + Redux Toolkit (RTK)
      </p>
      <div className="card">
        <Button
          type="primary"
          htmlType="button"
          onClick={() => dispatch(increment())}
        >
          Increment count
        </Button>
      </div>
      <div className="card">
        <Button
          type="primary"
          htmlType="button"
          onClick={() => dispatch(decrement())}
        >
          Decrement count
        </Button>
      </div>
      <div className="card">
        <Button type="primary" htmlType="button">
          {count}
        </Button>
      </div>
      <div className="d-flex flex-wrap jc-center ai-center g-8">
        {user?.map((user: User) => {
          return (
            <Button type="dashed" key={user.id}>
              {user.name}
            </Button>
          )
        })}
      </div>
    </ThemeProvider>
  )
}

export default App
