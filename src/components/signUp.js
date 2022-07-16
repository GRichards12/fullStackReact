import { useState } from "react";
import { signUp } from "../utils";

export const SignUp = ({ setUser, setSignedIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitSignUp = async (event) => {
    event.preventDefault();
    // setUser(username,email,password);
    await signUp(username, email, password, setUser, setSignedIn);
  };

  return (
    <form onSubmit={submitSignUp}>
      <h1>Sign up:</h1>
      <p>Username:</p>
      <input onChange={(event) => setUsername(event.target.value)} />
      <p>Email:</p>
      <input onChange={(event) => setEmail(event.target.value)} />
      <p>Password:</p>
      <input onChange={(event) => setPassword(event.target.value)} />
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
};

