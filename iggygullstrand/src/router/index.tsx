import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { UserPanelLayout } from "../layout";
import {
  APIPage,
  APIStatsPage,
  APIV2Page,
  AccountSettingsPage,
  BillingPage,
  BillingV2Page,
  ConnectionsPage,
  Dashboard,
  IndexesCSVDataPage,
  IndexesPage,
  LoginPage,
  LoginPageAction,
  ModulesPage,
  PasswordRecoveryPage,
  PasswordRecoveryPageAction,
  PlaygroundPage,
  SignupPage,
  SignupPageAction,
  SupportPage,
  UserManagementPage,
} from "../pages";
import { PrivateRoutesTypes } from "../types/index.types";

let authToken = sessionStorage.getItem("triformtoken");
let token = Boolean(authToken);

const PrivateRoute = ({ token, component, path }: PrivateRoutesTypes) => {
  return token ? component : <Navigate to={path} />;
};

// Configure nested routes with JSX
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      {/* Auth Pages */}
      <Route
        path="/login"
        element={PrivateRoute({
          token: !token,
          component: <LoginPage />,
          path: "/",
        })}
        action={LoginPageAction}
      />
      <Route
        path="/sign-up"
        element={PrivateRoute({
          token: !token,
          component: <SignupPage />,
          path: "/",
        })}
        action={SignupPageAction}
      />
      <Route
        path="/forgot-password"
        element={PrivateRoute({
          token: !token,
          component: <PasswordRecoveryPage />,
          path: "/",
        })}
        action={PasswordRecoveryPageAction}
      />

      {/* UserPanel Pages */}
      <Route
        path="/"
        element={PrivateRoute({
          token: token,
          component: <UserPanelLayout />,
          path: "/login",
        })}
      >
        <Route index element={<Dashboard />} />
        <Route path="/playground" element={<PlaygroundPage />} />
        <Route path="/modules" element={<ModulesPage />} />
        <Route path="/user" element={<UserManagementPage />} />
        <Route path="/connections" element={<ConnectionsPage />} />
        <Route path="/indexes" element={<IndexesPage />} />
        <Route path="/indexes/csv-data" element={<IndexesCSVDataPage />} />
        <Route path="/api" element={<APIPage />} />
        <Route path="/api/V2" element={<APIV2Page />} />
        <Route path="/api/stats" element={<APIStatsPage />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/billing/V2" element={<BillingV2Page />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/account-settings" element={<AccountSettingsPage />} />
      </Route>
    </Route>
  )
);

const AppRouter = () => <RouterProvider router={router} />;
export default AppRouter;
