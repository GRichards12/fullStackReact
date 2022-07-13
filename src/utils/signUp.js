export const signUp = async (username, email, password, setUser) => {
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
      setUser(data.user.username);
    } catch (error) {
      console.log(error);
    }
  };