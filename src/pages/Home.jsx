import React, { useEffect } from "react";
import { Chat, SideBar } from "../components";

function Home() {
  return (
    <div className="h-screen flex">
       <SideBar className="md:block hidden w-3/12" />

      <Chat className=" flex-grow h-screen" />
    </div>
  );
}

export default Home;
