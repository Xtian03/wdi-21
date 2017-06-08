import React from "react";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
    //Make sure everytime

    this.pickRandomStudnet = this.pickRandomStudent.bind(this);
  }

  pickRandomStudent() {
    this.setState({
      numClicks: this.state.numClicks + 1
    });
  }
  render() {
    return (
      <div className="home">
        <h2>Welcome to our Github App</h2>
        <p>This will display a profile page for a given user</p>
        <h4>Number of Clicks: {this.state.numClicks}</h4>
        <hr />
        <button className="button-primary">
          Search
        </button>
        &nbsp;
        <button
          className="button-primary"
          onClick={this.pickRandomStudent.bind(this)}
        >
          Pick a random WDi21 student
        </button>
      </div>
    );
  }
}

export default Home;