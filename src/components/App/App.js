import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { setLoggedIn } from '../login/LoginSlice';
import { useDispatch } from 'react-redux';
import Entrance from '../entrance/Entrance';
import Homepage from '../homepage/Homepage';
import Page404 from '../page404/404';
import Registration from '../registration/Registration';
import Login from '../login/Login';


import './app.scss';

const App = () => {
  const {isLoggedIn} = useSelector(state => state.auth);
  const {keepLogIn} = localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')) : false;
  const dispatch = useDispatch();

  useEffect(() => {
    if (keepLogIn) {
      dispatch(setLoggedIn(true));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/homepage/*' element={isLoggedIn ? <Homepage /> : <Navigate to="/"/>}/>
          <Route path='/' element={isLoggedIn ? <Navigate to="/homepage" /> : <Entrance />}> 
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/" element={<Login />}/>
          </Route>
          <Route path="*" element={<Page404/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
