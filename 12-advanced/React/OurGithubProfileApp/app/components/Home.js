import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {};
    //Make sure everytime pickRandomStudent

    this.pickRandomStudent = this.pickRandomStudent.bind(this);
  }

  pickRandomStudent() {
    const wdi21 = [
      "PhilG112",
      "fimac",
      "katiepetersonn",
      "lukemico",
      "matt2c",
      "jamesnugent00",
      "johnstonchristo",
      "Xtian03",
      "lynly",
      "Bijay-Panthi",
      "SimoTr84"
    ];
    const randomIndex = Math.floor(Math.random() * wdi21.length);
    const chosenOne = wdi21[randomIndex];
    const url = `/details/${chosenOne}`;
    this.props.history.push(url);
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
