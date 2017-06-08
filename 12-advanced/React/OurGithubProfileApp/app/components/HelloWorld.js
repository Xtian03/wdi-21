import React from "react";

class HelloWorld extends React.Component {
  render() {
    console.log(this.props.name);
    return <h1>Hello {this.props.name}</h1>;
  }
}

export default HelloWorlds;
