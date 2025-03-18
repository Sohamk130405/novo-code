import {
  SignedIn,
  SignedOut,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <div>
      <SignedOut>
        <SignUpButton>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            SignUp
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton/>
        <SignOutButton>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            SignOut
          </button>
        </SignOutButton>
      </SignedIn>
    </div>
  );
};

export default Home;
