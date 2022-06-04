import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,  Navigate } from 'react-router-dom';
import Entrance from '../entrance/entrance';
import Homepage from '../homepage/homepage';

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
          <Route path='*' element={isLoggedIn ? <Navigate to="/homepage" /> : <Entrance toggleLogin={toggleLogin}/>}/>
          <Route path='homepage/*' element={isLoggedIn ? <Homepage toggleLogin={toggleLogin}/> : <Navigate to="/"/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
