

import { useState, createContext, useContext } from "react";
// // create context, you must import createContext and initialize it
const UserContext = createContext<string>("");

// Combined React Context Component
// This component initializes the state and provides the context to child components
const createContext2: React.FC = () => {
  // State defined in the top-level component
  const [user, setUser] = useState("Jesse Hall");

  return (
     // Use the context provider to wrap the tree of components that need the state context
//     // Wrap child components in the context provider and supply the state value
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2/>
    </UserContext.Provider>
  );
};



// All components in this tree will have access to the user Context
// Use the useContext hook
// In order to use the context in a child component, we need to access it using the useContext Hook
// Second-level component
const Component2: React.FC = () => {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
};

// Third-level component
const Component3: React.FC = () => {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
};

// Fourth-level component
const Component4: React.FC = () => {
  return (
    <>
      <h1>Component 4</h1>
      <Component5  />
    </>
  );
};

// Fifth-level component
const Component5: React.FC = () => {
     // Use the useContext hook to consume the context value
    const user = useContext(UserContext);
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
};

export default createContext2;
