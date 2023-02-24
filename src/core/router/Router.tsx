import { Route, Routes } from 'react-router-dom';
import Challenge from '../../views/challenge/Challenge';
import Home from '../../views/home/Home';
import Login from '../../views/login/Login';
import { ROUTER_MAP } from './router.constant';
import LoginAuth from '../../views/loginAuth/LoginAuth';

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTER_MAP.login.path} element={<Login />} />
      <Route path={ROUTER_MAP.home.path} element={<Home />} />
      <Route path={ROUTER_MAP.challenge.path} element={<Challenge />} />
      <Route path={ROUTER_MAP.auth.path} element={<LoginAuth />} />
    </Routes>
  );
}
