import React from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import "./App.css";

class App extends React.Component {
  state = {
    user: [],
    followers: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/Jrive204")
      .then(res => {
        console.log(res, `data`);
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));
    axios
      .get("https://api.github.com/users/Jrive204/followers")
      .then(res => {
        console.log(res.data, `followers`);
        this.setState({
          followers: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.user, `user`);
    return (
      <div className='App'>
        <h1
          style={{
            width: "100%",
            background: `#24292e`,
            color: "white"
          }}>
          API DATA
        </h1>
        <UserCard user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
