import React,{useState} from "react";
import firebase from "./firebase";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";



import { Fragment } from "react/cjs/react.production.min";
import './App.css';
// import Navbar from "./components/Naving/Navbar";

import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Assignments";
import Adminpage from "./components/Adminpage";
import Navbar from "./components/Navbar";
// import Navbar from "./components/Navbar";
// import Signup from "./components/Navbar/Signup";
// import { Button } from "./components/Naving/Button";
//import Home from "./components/Login/Home";
//import Assignments from "./components/Navbar/Assignments";

  function App() {
    return (
      
      <div className="App">
        <BrowserRouter>
          <div>
            <div className="header">
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
              <NavLink activeClassName="active" to="/login">Login</NavLink>
              <NavLink activeClassName="active" to="/Assignments">Assignments</NavLink>
              <NavLink activeClassName="active" to="/Adminpage">Adminpage</NavLink>
            </div>
            <div className="content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/Assignments" component={Dashboard} />
                <Route path="/Adminpage" component={Adminpage} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
  
  // const [login,setlogin] = useState([]);
  // const [loading,setloading] = useState(false);

  // const ref = firebase.firestore().collection("login");
  // console.log(ref);

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

//   return (

    
//     <Fragment>
//       <Navbar/>
//       <div className="App">
    
//       <BrowserRouter>
//           <Switch>
//             <Route path="/signup" component={Signup} />
//             <Route path="/Login" component={Login} />
            
//           </Switch>
//         </BrowserRouter>
//       </div>
//     </Fragment>
    
//   )
// }



export default App;

