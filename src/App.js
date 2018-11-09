import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"100%", width:"100%"}}>
        <div className="Card" style={{ backgroundColor:"#cccccc", height:300, width:400, borderRadius:"25px", borderWidth:"1px" }}>
          Note card
        </div>
      </div>
    );
  }
}

export default App;
