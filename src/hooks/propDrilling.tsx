import { useState,  } from "react";

// Combined Prop Drilling Component
// This component initializes the state and starts the prop drilling process
const PropDrilling: React.FC = () => {
  // State defined in the top-level component
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      {/* Passing the state down to the child component as a prop */}
      <Component2 user={user} />
    </>
  );
};

// Even though components 2-4 did not need the state, they had to pass the state along so that it could reach component 5.

// Define the type for the props
interface UserProps {
  user: string;
}

// Second-level component
const Component2: React.FC<UserProps> = ({ user }) => {
  return (
    <>
      <h1>Component 2</h1>
      {/* Passing the prop further down to the next child component */}
      <Component3 user={user} />
    </>
  );
};

// Third-level component
const Component3: React.FC<UserProps> = ({ user }) => {
  return (
    <>
      <h1>Component 3</h1>
      {/* Passing the prop further down to the next child component */}
      <Component4 user={user} />
    </>
  );
};

// Fourth-level component
const Component4: React.FC<UserProps> = ({ user }) => {
  return (
    <>
      <h1>Component 4</h1>
      {/* Passing the prop further down to the next child component */}
      <Component5 user={user} />
    </>
  );
};

// Fifth-level component
const Component5: React.FC<UserProps> = ({ user }) => {
  return (
    <>
      <h1>Component 5</h1>
      {/* Displaying the received prop */}
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
};

export default PropDrilling;


// The Problem
// State should be held by the highest parent component in the stack that requires access to the state.

// To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.

// To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".


