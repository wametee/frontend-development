import { useState } from "react";
const introToUsetate = () => {
    // using useState to keep track of the application state
  // useState hook can be used to keep track of strings, numbers, booleans,arrays, objects, and only combinations of them
  const [name, setName] = useState("Melvin");
  const [phone, setPhone] = useState("0705049364");
  const [email, setEmail] = useState("wamiti8711@gmail.com");
  const [userName, setUserName] = useState("jowamu");

  //create one state and include an object instead
  const [form, setForm] = useState({
    name: "Jowamu",
    phone: "0705049364",
    email: "wamiti8711@gmail.com",
    userName: "Wamiti"
  })

  const handleOnclick = () => {
    setName("Mugo");
    console.log(name);
  }

  // Because we need the current value of state, we pass a function into our setCar function
  // This function receives the previous value
  // We then return an object , spreading the previousState and overwriting only the color
  const updateEmail = () => {
    setForm(previousState => {
      return { ...previousState, email: "josephmugo8711@gmail.com" }
    });
  }

  return (
    <div>
       <p>My name is {name} my number is {phone} my email is {email} my username is {userName}</p>
      <p>My name is {form.name} my number is {form.phone} my email is {form.email} my username is {form.userName}</p>
      <button onClick={handleOnclick}>Change name</button>
    </div>
  )
}

export default introToUsetate;
