/**
 * App component that contains the routes, navbar and footer for the entire application
 *
 * @returns {JSX.Element} - The App component with all the routes, navbar, and footer defined
 */

import { Suspense } from 'react'
import { lazily } from 'react-lazily'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Footer, Navbar, Splash } from './components'
import Popup from './components/popup'
import { getToken } from './service/auth-service'
import ScrollToTop from './components/navigation/ScrollToTop'

const {
  Home,
  Blog,
  Programs,
  Nominate,
  AdminLogin,
  AdminRegistration,
  BlogCreation,
} = lazily(() => import('./pages'))

function App() {
  const token = getToken()

  return (
    <Suspense fallback={<Splash />}>
      <Navbar />
      <Popup />
      <ScrollToTop>
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Home />} index />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/:program" element={<Programs />} />
          <Route path="/nominate" element={<Nominate />} />

          {/* Admin Routes */}
          <Route path="/umfanaglobals/admin">
            <Route
              path="register"
              element={PrivateRoute({
                token: !token,
                component: <AdminRegistration />,
                path: 'create-blog',
              })}
            />
            <Route
              index
              element={PrivateRoute({
                token: !token,
                component: <AdminLogin />,
                path: 'create-blog',
              })}
            />
            <Route path="create-blog" element={<BlogCreation />} />
          </Route>
        </Routes>
      </ScrollToTop>
      <Footer />
    </Suspense>
  )
}

type PrivateRouteProps = {
  token: boolean
  component: JSX.Element
  path: string
}

const PrivateRoute = ({ token, component, path }: PrivateRouteProps) => {
  return token ? component : <Navigate to={path} />
}

export default App
