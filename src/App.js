import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import New from './component/New';

class App extends Component {
  render() {
    console.log(this.props.editStatus);
    return (
      <div className="App">
          {/* {this.props.gear.map((value,index) =>{
            return <New/>
          })} */}
          <p>{this.props.gear}</p>
        <New/>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    gear: state.gear,
    editStatus : state.editStatus
  }
}

export default connect(mapStateToProps)(App);
