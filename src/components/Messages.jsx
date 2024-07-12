import React from "react";
import Message from "./Message";

function Messages({ className, ...props }) {
  return (
    <div
      className={`p-1 bg-transparent overflow-y-scroll scroll-smooth ${className}`}
      {...props}
    >
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default Messages;
