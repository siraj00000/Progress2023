import { Suspense } from 'react'
import { lazily } from 'react-lazily'
import { Routes, Route, Outlet } from 'react-router-dom'
import Loader from './components/others/loader'
import Header from './components/header'

const {
  Home,
  Contact,
  Profile,

  // Browser
  Browser,
  BrowserProduct,
  MakeOffer,
  SeeOffers,

  // Listings
  MyListings,
  ListingProduct,
  ViewReceivedOffer,
  AddNewListings,
  EditNewListings,

  MyDeal,
  SignUp,
  Login,
} = lazily(() => import('./pages'))

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />

        {/* Listing pages */}
        <Route path="/listings" element={<Outlet />}>
          <Route index element={<MyListings />} />
          <Route path="product" element={<Outlet />}>
            <Route index element={<ListingProduct />} />
            <Route path="received-offer/:id" element={<ViewReceivedOffer />} />
          </Route>
          <Route path="add-listings" element={<AddNewListings />} />
          <Route path="edit-listings" element={<EditNewListings />} />
        </Route>

        {/* Browser Pages */}
        <Route path="/browser" element={<Outlet />}>
          <Route index element={<Browser />} />
          <Route path="product" element={<Outlet />}>
            <Route index element={<BrowserProduct />} />
            <Route path="make-offer/:id" element={<MakeOffer />} />
            <Route path="see-offer/:id" element={<SeeOffers />} />
          </Route>
        </Route>

        <Route path="/my-deal" element={<MyDeal />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Suspense>
  )
}

export default App
