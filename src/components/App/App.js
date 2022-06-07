import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Entrance from '../entrance/entrance';
import Homepage from '../homepage/homepage';
import Page404 from '../page404/404';
import Registration from '../registration/registration';
import Login from '../login/login';




import './app.scss';

const App = () => {

  const [isLoggedIn, setLogin] = useState(true);

  const toggleLogin = () => {
    setLogin(isLoggedIn => !isLoggedIn);
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/homepage/*' element={isLoggedIn ? <Homepage toggleLogin={toggleLogin}/> : <Navigate to="/"/>}/>

          <Route path='/' element={isLoggedIn ? <Navigate to="/homepage" /> : <Entrance toggleLogin={toggleLogin}/>}> 
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/" element={<Login toggleLogin={toggleLogin}/>}/>
          </Route>

          <Route path="*" element={<Page404/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
