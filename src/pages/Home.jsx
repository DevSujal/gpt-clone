import React, { useEffect } from "react";
import { Chat, SideBar } from "../components";

function Home() {
  return (
    <div className="h-full flex">
       <SideBar className="md:block hidden w-3/12" />

      <Chat className=" flex-grow h-full" />
    </div>
  );
}

export default Home;
