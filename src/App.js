
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { fetchUSer } from './features/user/usersilice';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import DashboardPage from './pages/Dashboard/Dashboard';
import { BrowserRouter, Redirect } from 'react-router-dom';
import AuthLayout from './pages/Login/AuthLayout';
import PrivateRoute from './components/PrivateRoute';
import HomeLayout from './pages/Dashboard/HomeLayout';
import FirstDetail from './pages/firstDetail/FirstDetail';
import PlantPage from './pages/Plant/PlantPage';
import InverterDetailPage from './pages/InverterDetail/InverterDetailPage';
import StringDetailPage from './pages/StringDetail/StringDetailPage'
import PanelDetailPage from './pages/PanelDetail/PanelDetailPage';
import ListPage from './pages/Lists/ListPage';
import WeatherPage from './pages/Weather/WeatherPage';
import AlertsPage from './pages/Alerts/AlertsPage';

function App() {

  const userGet = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const userInfo = userGet && userGet?.data?.results[0]

  return (
    <>
      <Routes>

        <Route path='/auth' element={<AuthLayout />} >
          <Route path='login' element={<LoginPage />} />

        </Route>
        <Route path='/' element={<PrivateRoute> <HomeLayout /></PrivateRoute>} >
          <Route path='dashboard' element={<DashboardPage />} />
          <Route path='listPage' element={<ListPage />} />
          <Route path='plant/:id' element={<PlantPage />} />
          <Route path='inverterDetail/:id' element={<InverterDetailPage />} />
          <Route path='stringDetail/:id' element={<StringDetailPage />} />
          <Route path='panelDetail' element={<PanelDetailPage />} />
          <Route path='ilkDetaySayfa' element={<FirstDetail />} />
          <Route path='weather' element={<WeatherPage />} />
          <Route path='alerts' element={<AlertsPage />} />
        </Route>

        {/* <Route path='/login' element={<LoginPage />} >

        </Route>
        <Route path='/dashboard' element={<DashboardPage />} >

        </Route> */}

      </Routes>

    </>

  );
}

export default App;
