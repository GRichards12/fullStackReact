export const signUp = async (username, email, password, setUser,setSignedIn) => {
    try {
      const response = await fetch("http://localhost:5001/user", {
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({
          username,
          email,
          password,
        }), 
      });
      const data = await response.json();
      await setUser({username:data.User.username,email:data.User.email,password:data.User.password});
      await setSignedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  export const signIn = async (username, password, setUser,setSignedIn) => {
    try {
      const response = await fetch("http://localhost:5001/login", {
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({
          username,
          password,
        }), 
      });
      const data = await response.json();
      await setUser({username:data.user.username,password:data.user.password});
      await setSignedIn(true);
    } catch (error) {
      console.log(error);
    }
  };