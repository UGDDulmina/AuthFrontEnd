import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';
import { Route, Router ,Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>  
      <Route path="components/Signup" element={<Signup />} />
      <Route path="components/Login" element={<Login />} />
    </Routes>
    
  );
}

export default App;
