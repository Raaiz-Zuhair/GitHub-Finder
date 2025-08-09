import React, { useState } from "react";
import Card from "./Card";
import { useFetch } from "../context/fetchContext";

const Form = () => {

  const {fetchUser} = useFetch()

  const [input , setInput] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault()
    fetchUser(input);
    setInput("")
  }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
        <div className="w-full mx-auto">
              <h1 className=" text-center text-4xl pb-2 font-medium">
              GitHub Finder
              </h1>
          <label className="text-xl font-medium " htmlFor="input">
          Search for the users
          </label>
          <div className="flex gap-3 mt-2 pb-2">
          <input
            type="text"
            className="w-full outline-0 border-2 border-gray-500 rounded-lg p-2"
            placeholder="Github username here..."
            id="input"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button className="bg-blue-500 px-6 py-2 rounded-md text-white font-medium">
            Find 
          </button>
          </div>
          </div>
        </form>
    </Card>
  );
};

export default Form;
