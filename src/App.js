import "./styles/style.css";
import React from "react";

// Card
class Card extends React.Component {
  render() {
    return <div className="github-profile">One github profile</div>;
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
