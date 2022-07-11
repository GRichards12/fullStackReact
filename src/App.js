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
  },[user]);

  return (
    <div className="App">
      <SignIn signedIn={signedIn} setSignedIn={setSignedIn} />
      {photos.map((item, index) => {
        return (
          <div>
            {signedIn?
            <div>look it's images
            <h2>{item.author}</h2>
            <img alt= "best image you've ever seen" src={item.download_url} /></div>
            :<span>please sign in</span>}
          </div>
        );
      })}
      </div>
  )}
export default App;
