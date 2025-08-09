import React from "react";
import Form from "./components/Form"
import Header from "./components/Header";
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
   <>
  <Header>
    GitHub Finder
  </Header>
    <div className="flex flex-col items-center min-h-screen w-full">
      <Form />
      <div className="mt-10">
      <UserDetails/>
      </div>
    </div>
   </>
  )

};

export default App;
