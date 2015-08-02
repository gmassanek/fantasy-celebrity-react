import React, { findDOMNode } from 'react';
import { Router, Route, Link } from 'react-router';
var history = require('react-router/lib/BrowserHistory').history;

var App = React.createClass({
  render () {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/hello">About</Link></li>
          <li><Link to="/world">Inbox</Link></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
});

var Hello = React.createClass({
  render() {
    console.log("hello");
    return <h2>Hello</h2>;
  }
});

var World = React.createClass({
  render() {
    console.log("world");
    return <h2>World</h2>;
  }
});

var NotFound = React.createClass({
  render() {
    console.log("woooo");
    return <h2>Not found</h2>;
  }
});

React.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="hello" component={Hello}/>
      <Route path="world" component={World}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
), document.getElementById('application'));
