import { useSelector } from "react-redux";
import Auth from "../components/auth/Auth";
import Dashboard from "../components/dashboard/Dashboard";

export default function Home() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return isAuth ? <Dashboard /> : <Auth />;
}
