import { useState, useEffect } from "react";
import "./App.css";
import SignIn from "./SignIn";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [signedIn, setSignedIn] = useState(false);

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
      <button onClick={()=>setSignedIn(!signedIn)}>{!signedIn?<span>Sign in</span>:<span>Sign out</span>}</button>
      {signedIn?
      photos.map((item, index) => {
        return (
          <div>
            
            <div>look it's images
            <h2>{item.author}</h2>
            <img alt= "best image you've ever seen" src={item.download_url} /></div>
           
          </div>
        );
      }) :<span>please sign in</span>}
      </div>
  )}
export default App;
