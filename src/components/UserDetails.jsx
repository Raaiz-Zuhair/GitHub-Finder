import React from "react";
import Card from "./Card";
import { useFetch } from "../context/fetchContext";

const UserDetails = () => {
  const { user, loading } = useFetch();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-24 mt-10">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (user?.message === "Not Found") {
    return (
      <div className="text-xl font-medium text-red-500 mt-10">
        User Not Found
      </div>
    );
  }

  return (
    <>
      {user && (
        <Card>
          <div className="flex flex-col md:flex-row justify-around items-center gap-8 p-4 md:p-8">
            <div className="flex flex-col items-center gap-4 w-full md:w-auto">
              <img
                src={user?.avatar_url}
                alt={user?.login || "User avatar"}
                className="rounded-full w-40 h-40 md:w-64 md:h-64 border-4 border-blue-500 shadow-md"
              />
              <a
                href={user?.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 px-6 rounded-full shadow-md"
              >
                Visit Profile
              </a>
            </div>

            <div className="max-w-full md:max-w-md text-center md:text-left px-2 md:px-0">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 break-words">
                {user.name || user.login}
              </h1>
              <div className="space-y-2 text-gray-700 text-base md:text-lg">
                <p>
                  <span className="font-semibold">Company: </span>
                  {user.company || "N/A"}
                </p>
                <p>
                  <span className="font-semibold">Email: </span>
                  {user.email || "N/A"}
                </p>
                <p>
                  <span className="font-semibold">Location: </span>
                  {user.location || "N/A"}
                </p>
                {user.user_view_type && (
                  <p>
                    <span className="font-semibold">User View Type: </span>
                    {user.user_view_type}
                  </p>
                )}
              </div>

              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4 text-white text-sm font-medium">
                <a
                  href={`https://github.com/${user.login}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 px-4 py-2 rounded-full shadow-md whitespace-nowrap"
                >
                  Repos: {user.public_repos}
                </a>
                <span className="bg-blue-500 px-4 py-2 rounded-full shadow-md whitespace-nowrap">
                  Following: {user.following}
                </span>
                <span className="bg-green-500 px-4 py-2 rounded-full shadow-md whitespace-nowrap">
                  Followers: {user.followers}
                </span>
              </div>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default UserDetails;
