import { useState } from "react";
import { signUp } from "../utils/signUp";

export const SignIn = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitSign = async (event) => {
    event.preventDefault();
    await signUp(username, email, password, setUser);
  };

  return (
    <form onSubmit={submitSign}>
      <input onChange={(event) => setUsername(event.target.value)} />
      <input onChange={(event) => setEmail(event.target.value)} />
      <input onChange={(event) => setPassword(event.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

