import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import Home from './views/Home';
import {Header} from './components/Header';
import {WatchList} from './views/WatchList';

class App extends Component {
    state = {
      requestKey : '',
    }
  
  setRequestKey = (requestToken) => this.setState({requestKey: requestToken})

  render() {
    return (
        <Router>
          <div className="container">
          <Header />
          </div>
                <div className="router">
                    <Switch>
                        <Route exact path="/" render={props => <Home {...props} requestKey={this.state.requestKey} setRequestKey={this.setRequestKey}/>}/>
                        <Route
                            path="/watchList"
                            render={props => <WatchList {...props}/>} />
                        <Route path="/OranJacob-react-test" render={(props) => <h1>not found please go to home page</h1>} />
                    </Switch>
                </div>
            </Router>
    );
  }
}

export default App;
