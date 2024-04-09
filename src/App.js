import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Registration from './Components/Registration';
import Login from './Components/Login';
import Admin from './Components/Admin';
import Account from './Components/Account';
function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route element={<Admin/>} path={'/'}/>
        <Route element={<Registration />} path={'/registration'} />
        <Route element={<Login/>} path={'/login'} />
        <Route element={<Account />} path={'/account'} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
