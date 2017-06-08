import React from "react";

// Stateless Functional Component
// this.props === props
// You can;t have state
// No component life cycle
// aDding event handlers is much harder
// But, it is mch faster to urun, and write

const ProfilePic = props => {
  return <img src={props.imageURL} width="200" />;
};

// class ProfilePic extends React.Component {
//   render() {
//     return <img width="200" src={this.props.imageURL} />;
//   }
// }

export default ProfilePic;
