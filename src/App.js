import { useState, useEffect } from "react";
import { SignIn } from "./components/signIn";
import "./App.css";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState({username:"Signed out",password:"undefined", email:"undefined"});

  const fetchImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setPhotos(data);
  };

  useEffect(() => {
    fetchImages();
  },[]);

  return (
    <div className="App">
      <SignIn setUser={setUser}/>
      <p>username:{user.username}</p>
      <button onClick={()=>setSignedIn(!signedIn)}>{!signedIn?<span>Sign in</span>:<span>Sign out</span>}</button>
      {signedIn?
      photos.map((item, index) => {
        return (
          <div>
            <img alt= "best image you've ever seen" src={item.download_url} key={index}/>
            <h2>{item.author}</h2>
          </div>
        );
      }) :<span>please sign in</span>}
      </div>
  )}
export default App;
