
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Switch, BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './component/Login'
import UserList from './component/UserList'
import PrivateRoute from "./Routes/PrivateRoute"

function App() {
  return (
    <div className="container">

      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>

          <PrivateRoute component={UserList} path="/home" exact />
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>

    </div>
  )
}

export default App
