import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
 const[qoute,setQuote]=useState("");
 const[author,setAuthor]=useState("");
 useEffect(()=>{
  fetch("http://api.quotable.io/random")
  .then(res=>res.json())
  .then(
    (quote)=>{
      setQuote(quote.content);
      setAuthor(quote.author);
     // console.log(quote);
    }
  )
 },[]);
let fetchNewQuote=()=>{
  fetch("http://api.quotable.io/random")
  .then(res=>res.json())
  .then(
    (quote)=>{
      setQuote(quote.content);
      setAuthor(quote.author);
    }
  )
}

  return (
    <div className="App">
      <h2>Quote Generator</h2>
     <div className='quote'>
      <h2>{qoute}</h2>
      <small>-{author}-</small>
     </div>
     <button className='btn 'onClick={fetchNewQuote}> New Quote</button>
    </div>
  );
}

export default App;
