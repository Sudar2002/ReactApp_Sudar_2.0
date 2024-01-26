
import './App.css';
import Backend from './Components/Home/FullWeb/Backend';
import CloudServer from './Components/Home/FullWeb/CloudServer';
import Database from './Components/Home/FullWeb/Database';
import Frontend from './Components/Home/FullWeb/Frontend';
import HomePage from './Components/Home/HomePage';
import {BrowserRouter,Route,Link, Routes} from 'react-router-dom';
import Login from './Components/S_L_F/Login';
import SignUp from './Components/S_L_F/SignUp';
import Forgot from './Components/S_L_F/Forgot';
import NavBar from './Components/Home/NavBar';
import Admin from './Components/Admin/Admin';


function App() {
  return (

    <>
     
    <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Frontend' element={<Frontend/>}/>
      <Route path='/Backend' element={<Backend/>}/>
      <Route path='/Database' element={<Database/>}/>
      <Route path='/Cloud-server' element={<CloudServer/>}/>
      <Route path='/log_in' element={<Login/>}/>
      <Route path='/sign_up' element={<SignUp/>}/>
      <Route path='/forgot' element={<Forgot/>}>
        <Route path='pass_update/:id'/>
      </Route>
     <Route path='/admin' element={<Admin/>}/>
    </Routes>
    
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
