import Login from './pages/login';
import Signup from './pages/register/signup';
import{BrowserRouter,Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
