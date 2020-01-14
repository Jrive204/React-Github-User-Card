import React from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import "./App.css";

class App extends React.Component {
  state = {
    user: []
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
  }

  render() {
    console.log(this.state.user, `user`);
    return (
      <div className='App'>
        <h1>API DATA</h1>
        <h4>balling</h4>
        <UserCard user={this.state.user} />
      </div>
    );
  }
}

export default App;
