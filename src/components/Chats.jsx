import React, { useState } from "react";

function Chats() {
  const [chats, setChats] = useState([
    {
      name: "Sujal Nimje",
      lastChat: "I am the frontent developer",
    },
  ]);
  return (
    <div className="w-full flex flex-col justify-center gap-2">
      {chats.map((chat) => (
        <div
          key={chat.name}
          className="flex flex-col gap-3 justify-center items-start p-3 hover:opacity-65"
        >
          <span className="text-lg font-bold text-white whitespace-nowrap text-ellipsis overflow-hidden w-full">title </span>
          <p className=" text-gray-400 text-sm whitespace-nowrap text-ellipsis overflow-hidden w-full">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            perspiciatis, aliquam dolorem asperiores neque aliquid ipsa iusto
            consequuntur deserunt ea porro perferendis placeat. Eaque at quae
            ipsum consequuntur fugit omnis?
          </p>
        </div>
      ))}
    </div>
  );
}

export default Chats;
