import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Slide from '@material-ui/core/Slide';
import Profile from './pages/home/Profile';
import Update from './pages/home/Update';
import { Reports, Progress } from './pages/reports/Reports';
import Chart from './pages/reports/Chart';
import Todos from './pages/todos/Todos';
import Contact from './pages/team/Contact';
import Auth from './auth/Auth';
import { AuthProvider } from './contexts/AuthContext';
import PrivetRoute from './PrivetRoute';
import 'neomorphism/dist/neomorphism.min.css';
import 'neomorphism/dist/neomorphism.css';
import { SnackbarProvider } from 'notistack';


function App() {
  
  return (
    <SnackbarProvider  anchorOrigin={{vertical: 'top', horizontal: 'right',}} TransitionComponent={Slide} maxSnack={3}>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivetRoute exact path="/" component={Profile} />
            <PrivetRoute exact path="/update" component={Update} />
            <PrivetRoute path="/reports" component={Reports} />
            <PrivetRoute path="/chart" component={Chart} />
            <PrivetRoute path="/todos" component={Todos} />
            <PrivetRoute path="/progress" component={Progress} />
            <PrivetRoute path="/contact" component={Contact} />
            <Route exact path="/auth" component={Auth} />
            <Redirect to="/" />
          </Switch>
        </AuthProvider>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
