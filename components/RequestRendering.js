import React, { Component } from "react";

const labelStyle = { fg: "blueBright", bold: true };

class RequestRendering extends Component {
  render() {
    return (
      <box top={0} height="100%-2" left={0} width="100%-2" style={labelStyle}>
        Rendering here
      </box>
    );
  }
}

export default RequestRendering;