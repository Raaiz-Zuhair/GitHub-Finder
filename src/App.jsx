import React from "react";
import Form from "./components/Form"
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
   <>
    <div className="flex flex-col items-center min-h-screen w-full">
      <Form />
      <UserDetails/>
    </div>
   </>
  )

};

export default App;
