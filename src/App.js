import logo from './logo.svg';
import store from "./store";
import {Provider} from 'react-redux'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Body from "./Components/Body";
import BookView from "./Components/BookView";
function App() {
  return (
      <Provider store={store}>
    <div className="App">
      <Router>
        <div className="App">
          <Switch>
            <Route exact path={'/'} component={Body}/>
            <Route path={'/books/:bookId'} component={BookView}/>
            {/*
            <Route component={NoMatch}/>*/}
          </Switch>

        </div>
      </Router>
    </div>
      </Provider>
  );
}

export default App;
