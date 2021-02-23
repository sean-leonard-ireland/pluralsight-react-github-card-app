import "./styles/style.css";
import React from "react";

// Card
class Card extends React.Component {
  render() {
    return (
      <div className="github-profile">
        <img src="https://placehold.it/75" />
        <div className="info">
          <div className="name">Name here...</div>
          <div className="company">Company here...</div>
        </div>
      </div>
    );
  }
}
// List of Cards

class App extends React.Component {
  render() {
    return (
      <div className="Header">
        {this.props.title}
        <Card />
      </div>
    );
  }
}

//function App({ title }) {
//  return (
//    <div className="App">
//      <h1>{title}</h1>
//    </div>
//  );
// }

export default App;
