import React from "react";
import { UserContext, ChannelContex } from "./ComponentA";

const ComponentB = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContex.Consumer>
              {(channel) => {
                return <div>User Context value {user} <br/>channel Employee {channel.name} and Cahnnel Employee Age:{channel.age}</div>;
              }}
            </ChannelContex.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ComponentB;
