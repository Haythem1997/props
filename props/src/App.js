import "./App.css";
import Profile from "./profile/component/Profile";
function App() {
  const handleName = (fullName) => alert(fullName);
  const fullname = "haythem achour";
  const bio = "hacker";
  const profession = "felaga";
  const myStyle = { 
    textAlign: "center",
    color: "black",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between"
     };

  return (
    <div className="App-header" style={myStyle}>
      <h1>My Profile</h1>
      <Profile 
      fullname={fullname} 
      bio={bio} 
      profession={profession}
      handleName={handleName} >
         <img src="./haythem achour.jpg" style={{ width: 200, height: 200 }} alt="welcome"/>
      </Profile>
    </div>
  );
}

export default App;