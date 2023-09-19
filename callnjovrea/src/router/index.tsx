import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import {
  CartPage,
  LandingPage,
  OurProducts,
  ProductDetailPage,
} from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="our-products" element={<Outlet />}>
        <Route index element={<OurProducts />} />
        <Route path=":id" element={<ProductDetailPage />} />
      </Route>
      <Route path="/cart" element={<CartPage />} />
    </Route>
  )
);

export default router;
