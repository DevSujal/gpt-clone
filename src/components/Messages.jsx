import React, { useEffect, useRef } from "react";
import Message from "./Message";

function Messages({ className, ...props }) {
  const chatsRef = useRef(null);

  useEffect(() => {
    chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
  }, []);
  return (
    <div
    ref = {chatsRef}
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
