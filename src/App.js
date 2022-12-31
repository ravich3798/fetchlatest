import axios from "axios";
import './App.css'
import { useEffect, useState } from "react";

function App() {
  const [newName,setnewName]=useState()
  const [newEmail,setnewEmail]=useState()
  useEffect(()=>{
    fetch();
    setnewEmail(null)
    setnewName(null)
  },[])
  async function fetch() {
    const response=await axios.get("https://randomuser.me/api");
    if(response){
      const data=response;
      const title=data.data.results[0].name.title
      const firstName=data.data.results[0].name.first
      const lastname=data.data.results[0].name.last
      var name=title + ". " + firstName +" " + lastname
      var email=data.data.results[0].email
      localStorage.setItem("name",name);
      localStorage.setItem("email",email);
      setnewName(name)
      setnewEmail(email)
    }
  }
  
    return (
      <div><div className="App-header">FullName: {localStorage.getItem("name")} <br/>Email: {localStorage.getItem("email")}
        </div>
        <br/>
        <div className="App"><button onClick={fetch}>Refresh</button></div>
      </div>
    );
}

export default App;
