import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
  render (){
    return (
      <div className="row">
          <h4>Nav Bar</h4>
          <Link to="/page1" className="btn btn-primary pull-xs-right" >Page1</Link>
          <Link to="/page2" className="btn btn-warning pull-xs-right" >Page2</Link>
      </div>
    );
  };
};

export default NavBar;
