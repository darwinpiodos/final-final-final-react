import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import List from './pages/List';
// import EditProfile from './EditProfile';
 

function App() {
  return (
    <div className="App">
         <BrowserRouter>
         
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route  path="/login" component={LoginPage}></Route>
            <Route  path="/register" component={RegisterPage}></Route>
            <Route  path="/profile" component={ProfilePage}></Route>
            <Route  path="/list" component={List}></Route>
            {/* <Route  path="/editprofile/:id" component={EditProfile}></Route> */}
            
          </Switch>
         </BrowserRouter>
    </div>
  );
}

export default App;

