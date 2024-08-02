import React, { useState } from 'react'
import './RandomQuote.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import reload_icon from '../Assets/reload-icon.png'
import twitter_icon from '../Assets/twitter-icon.png'


export const RandomQuote = () => {

  let quotes = [];

  async function loadQuotes(){
    const response = await fetch('https://type.fit/api/quotes');
    quotes = await response.json();
    console.log(quotes);
  }

  const[quote,setQuote] = useState({
    text: 'Difficulties increase the nearer we get to the goal.',
    author: 'Johann Wolfgang von Goethe'
  })


  loadQuotes();

  return (
    <div className='container'>
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">{quote.author}</div>
          <div className="icons">
            <img src={reload_icon} alt="" />
            <img src={twitter_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
