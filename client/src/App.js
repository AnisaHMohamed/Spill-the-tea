import {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'

function App() {
  const [tweets, setTweets] = useState([]);

useEffect(() =>{
  axios.get(`/tweets`).then((res) => {
    console.log(res)
        setTweets(res.data);
      })
},[])


  return (
    <div className="App">
      <header className="App-header">
      <p>
     {tweets}
        </p>
     
      </header>
    </div>
  );
}

export default App;
