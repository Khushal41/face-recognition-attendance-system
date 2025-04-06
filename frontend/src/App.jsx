import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Recognize from './pages/Recognize';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/recognize" component={Recognize} />
        <Route path="/" exact>
          <h1 className="text-center text-2xl font-bold">Welcome to the Face Recognition Attendance System</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;