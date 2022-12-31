import axios from "axios";
import './App.css'
import { useEffect, useState } from "react";

function App() {
  const [newName,setnewName]=useState(null)
  const [newEmail,setnewEmail]=useState(null)
  // useEffect(()=>{
  //   fetch();
  // },[])
  async function fetch() {
    setnewName(null)
    setnewEmail(null)
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
      <div>{newName && newEmail?<div className="App-header">FullName: newName<br/>Email: newEmail</div>:""}
        <br/>
        <div className="App"><button onClick={fetch}>Refresh</button></div>
        {localStorage.clear()}
      </div>
    );
}

export default App;
