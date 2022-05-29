import { useState } from 'react';
import Entrance from '../entrance/entrance';
import Homepage from '../homepage/homepage';

import './app.scss';

const App = () => {

  const [isLoggedIn, setLogin] = useState(true);

  const toggleLogin = () => {
    setLogin(isLoggedIn => !isLoggedIn);
  }

  return (
    <div className="App">
      {isLoggedIn ? <Homepage toggleLogin={toggleLogin}/> : <Entrance/>}
    </div>
  );
}

export default App;
