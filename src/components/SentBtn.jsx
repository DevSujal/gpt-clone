import React from "react";
import Input from "./Input";

function SentBtn({ className, ...props }) {
  return (
      <Input
        className={`w-full rounded py-3 ${className}`}
        placeholder="Enter your response"
        {...props}
      />
  );
}

export default SentBtn;
