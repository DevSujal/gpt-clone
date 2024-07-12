import React, { useState } from "react";
import logo from "../../public/logo.png";
function Message({ className }) {
  const img =
    "data:image/jpeg;base64,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";
  const [chat, setChat] = useState({
    img,
    time: "just now",
    message: "i want to know something",
    responce : "i don't know what you want to know",
  });
  return (
    <div>

    <div
      className={`flex flex-row-reverse w-full p-2 gap-5 ${className}`}
      >
      <div>
        <img
          src={logo}
          alt="profile img"
          className="object-cover rounded-full"
          width={40}
          />
        <span className="text-sm text-gray-600 ">{chat.time}</span>
      </div>
      <div className="flex justify-end items-center space-y-3 w-8/12 ">
        <p className=" text-sm p-2 max-w-max text-white bg-gray-500/10 rounded-s-lg rounded-ee-lg font-semibold">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae possimus incidunt excepturi quos earum. Amet consequuntur voluptatem provident expedita eius neque modi reprehenderit veniam dolorum dolores, commodi libero saepe?  
        </p>
      </div>
    </div>
    <div
      className={`flex flex-row p-2 gap-5 ${className}`}
    >
      <div>
        <img
          src={chat.img}
          alt="profile img"
          className="object-cover rounded-full"
          width={40}
          />
        <span className="text-sm text-gray-600 ">{chat.time}</span>
      </div>
      <div className="flex items-center space-y-3 w-8/12 ">
        <p className=" text-sm p-2 max-w-max text-white bg-gray-500/10 rounded-es-lg rounded-e-lg font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim deleniti unde, cupiditate tempore molestiae ullam illum fugiat, amet numquam saepe, nemo magni soluta adipisci quo aliquam in id nulla! Totam!
        </p>
      </div>
    </div>
          </div>
  );
}

export default Message;
