import React from "react";
import ProfileLink from "./ProfileLink";
import ProfileName from "./ProfileName";
import ProfilePic from "./ProfilePic";

class Avatar extends React.Component {
  render() {
    if (this.props.user) {
      console.log(this.props.user);
    }
    return (
      <div className="avatar">
        <ProfilePic imageURL={this.props.user.imageURL} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    );
  } else {
    return <Loading />;
  }
}
}
export default Avatar;
