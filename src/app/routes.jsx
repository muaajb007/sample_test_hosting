import { createBrowserRouter } from "react-router";
import GetStartedPage from "./pages/GetStarted/GetStartedPage";
import LoginPage from "./pages/Auth/LoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import PainterList from "./pages/Painters/PainterList";
import QRList from "./pages/QRcodes/QRList";
import PointsTransactions from "./pages/Points/PointsTransactions";
import RewardsList from "./pages/Rewards/RewardsList";
import RewardClaims from "./pages/Claims/RewardClaims";
import SettingsPage from "./pages/Settings/SettingsPage";
import ShopProfile from "./pages/Profile/ShopProfile";
import AdminLayout from "./layouts/AdminLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GetStartedPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "painters", element: <PainterList /> },
      { path: "qrcodes", element: <QRList /> },
      { path: "transactions", element: <PointsTransactions /> },
      { path: "rewards", element: <RewardsList /> },
      { path: "claims", element: <RewardClaims /> },
      { path: "profile", element: <ShopProfile /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
]);
