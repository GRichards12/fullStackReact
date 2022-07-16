import { useState, useEffect } from "react";
import { SignUp } from "./components/signUp";
import "./App.css";
import { SignIn } from "./components/SignIn";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState({username:"Signed out", email:"undefined", password:"undefined" });

  const fetchImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list?limit=10");
    const data = await response.json();
    setPhotos(data);
  };

  useEffect(() => {
    fetchImages();
  },[]);

  return (
    <div className="App">
      <SignUp setUser={setUser} setSignedIn={setSignedIn}/>
      <SignIn setUser={setUser} setSignedIn={setSignedIn}/>
      <p>Username:{user.username}</p>
      {/* <button onClick={()=>setSignedIn(!signedIn)}>{!signedIn?<span>Sign in</span>:<span>Sign out</span>}</button> */}
      {signedIn?
      photos.map((item) => {
        return (
          <div key={item.id}>
            <img alt= "best thing you've ever seen" src={item.download_url} key={item.id}/>
            <h2>{item.author}</h2>
          </div>
        );
      }) :<span>Please sign in to view your feed!</span>}
      {signedIn===true&&<button onClick={()=>window.location.reload()}>Sign out</button>}
      </div>
  )}
export default App;
