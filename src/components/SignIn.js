import { useState } from "react";
import { signIn } from "../utils";

export const SignIn = ({ setUser, setSignedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitSignIn = async (event) => {
    event.preventDefault();
    // setUser(username,email,password);
    await signIn(username, password, setUser, setSignedIn);
  };

  return (
    <form onSubmit={submitSignIn}>
        <h1>Login:</h1>
        <p>Username:</p>
      <input onChange={(event) => setUsername(event.target.value)} />
        <p>Password:</p>
      <input onChange={(event) => setPassword(event.target.value)} />
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
};
