import { useState, useEffect } from "react";

export default function Home() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    async function getData() {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      console.log(data);
      
      setUserName(data.results[0].name.first);
  }
  getData();
  }, []);
  
  return (
    <div>
      <p>{userName}</p>
    </div>
  );
}