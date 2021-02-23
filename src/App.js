import "./styles/style.css";
import React from "react";

// test data
const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  },
];

// List of Cards
const CardList = (props) => (
  <div>
    {testData.map((profile) => (
      <Card {...profile} />
    ))}
  </div>
);

// Card
class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="Header">
        {this.props.title}
        <CardList />
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
