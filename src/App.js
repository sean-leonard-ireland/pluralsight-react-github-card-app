// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn, sean-leonard-sap

import "./styles/style.css";
import React from "react";
import axios from "axios";

// test data
//const testData = [
//  {
//    name: "Dan Abramov",
//    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
//    company: "@facebook",
//  },
//  {
//    name: "Sophie Alpert",
//    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
//    company: "Humu",
//  },
//  {
//    name: "Sebastian Markbåge",
//    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
//    company: "Facebook",
//  },
//];

//Form
class Form extends React.Component {
  state = { userName: "" };
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(resp.data);
    this.setState({ userName: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder="GitHub username"
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}

// List of Cards
const CardList = (props) => (
  <div>
    {props.profiles.map((profile) => (
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
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <div className="Header">
        {this.props.title}
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
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
