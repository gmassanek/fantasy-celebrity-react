import React, { findDOMNode } from 'react';
import { Router, Route, Link } from 'react-router';
var history = require('react-router/lib/BrowserHistory').history;

// Components
import League from './components/League';
import Leagues from './components/Leagues';
import Scoring from './components/Scoring';

var App = React.createClass({
  render () {
    return (
      <div>
        <div id="wrapper">
          <header className="navbar" role="banner">
            <div className="container">
              <div className="navbar-header">
                <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <i className="fa fa-cog"></i>
                </button>

                <a href="./" className="navbar-brand navbar-brand-img">
                  FantasyCeleb
                </a>
              </div>

              <nav className="collapse navbar-collapse" role="navigation">
                <ul className="nav navbar-nav navbar-right">

                  <li>
                    <a href="javascript:;">About</a>
                  </li>

                  <li className="dropdown navbar-profile">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="javascript:;">
                      <img src="https://avatars1.githubusercontent.com/u/343891?v=3&s=40" className="navbar-profile-avatar" alt=""/>
                      <span className="visible-xs-inline">@peterlandt &nbsp;</span>
                      <i className="fa fa-caret-down"></i>
                    </a>

                    <ul className="dropdown-menu" role="menu">

                      <li>
                        <a href="./page-profile.html">
                          <i className="fa fa-user"></i>
                          &nbsp;&nbsp;My Profile
                        </a>
                      </li>

                      <li>
                        <a href="./page-settings.html">
                          <i className="fa fa-cogs"></i>
                          &nbsp;&nbsp;Settings
                        </a>
                      </li>

                      <li className="divider"></li>

                      <li>
                        <a href="./account-login.html">
                          <i className="fa fa-sign-out"></i>
                          &nbsp;&nbsp;Logout
                        </a>
                      </li>

                      <li className="divider"></li>

                      <li>
                        <a href="/leagues/1">
                          <i className="fa fa-bars dropdown-icon "></i>
                          League 1
                        </a>
                      </li>
                      <li>
                        <a href="/leagues/2">
                          <i className="fa fa-bars dropdown-icon "></i>
                          League 2
                        </a>
                      </li>
                      <li>
                        <a href="/leagues/3">
                          <i className="fa fa-bars dropdown-icon "></i>
                          League 3
                        </a>
                      </li>

                    </ul>

                  </li>

                </ul>
              </nav>
            </div>
          </header>
          <div className="mainnav">
            <div className="container">
              <a className="mainnav-toggle" data-toggle="collapse" data-target=".mainnav-collapse">
                <span className="sr-only">Toggle navigation</span>
                <i className="fa fa-bars"></i>
              </a>

              <nav className="collapse mainnav-collapse" role="navigation">
                <ul className="mainnav-menu">
                  <li className="dropdown is-open">
                    <a href="/leagues/{{ model.id }}" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
                      League
                      <i className="mainnav-caret"></i>
                    </a>

                    <ul className="dropdown-menu" role="menu">
                      <li>
                        <a href="/leagues/{{ model.id }}">
                          <i className="fa fa-dashboard dropdown-icon "></i>
                          Dashboard
                        </a>
                      </li>

                      <li>
                        <a href="/leagues/{{ model.id }}/positions">
                          <i className="fa fa-dashboard dropdown-icon "></i>
                          Positions
                        </a>
                      </li>

                      <li>
                        <a href="/leagues/{{ model.id }}/scoring">
                          <i className="fa fa-dashboard dropdown-icon "></i>
                          Scoring
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="/leagues/{{ model.id }}/teams/2"> My Team </a>
                  </li>

                  <li>
                    <a href="leagues/{{ model.id }}/players">
                      Players
                    </a>
                  </li>

                  <li>
                    <a href="leagues/{{ model.id }}/points">
                      Points
                    </a>
                  </li>

                  <li>
                    <a href="leagues/{{ model.id }}/standings">
                      Standings
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="content">
            <div className="container">
              {this.props.children}
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <p className="pull-left">Copyright &copy; Geoff.</p>
          </div>
        </footer>
      </div>
    )
  }
});

var NotFound = React.createClass({
  render() {
    return <h2>Not found</h2>;
  }
});

React.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="leagues" component={Leagues}/>
      <Route path="leagues/:id/scoring" component={Scoring}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
), document.getElementById('application'));
