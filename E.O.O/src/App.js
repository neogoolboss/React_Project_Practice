import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/screen1/Home';
import MainMenu from './pages/screen2/MainMenu';
import AdditionalMenu from './pages/screen3/AdditionalMenu' ;
import Payment from './pages/screen4/Payment';
import Settlement from './pages/screen5/Settlement';
import Finish from './pages/screen6/Finish';
import Layout from './layouts/Layout';
import style from './App.module.css';
import EmployeeCall from './pages/screen7/EmployeeCall';

function App() {

  return (
    <div className={style.App}>
      <div className={style.kiosk}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/' element={<Layout/>}>
              <Route path='home' element={<Home/>}/>
              <Route path='menu' element={<MainMenu/>}/>
              <Route path='additional' element={<AdditionalMenu/>}/>
              <Route path='payment' element={<Payment/>}/>
              <Route path='settlement' element={<Settlement/>}/>
              <Route path='empolyeecall' element={<EmployeeCall/>}/>
            <Route path='goodbye' element={<Finish/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
