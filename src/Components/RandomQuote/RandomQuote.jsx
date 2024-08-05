import React, { useEffect, useState } from 'react'
import './RandomQuote.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import reload_icon from '../Assets/reload-icon.png'
import twitter_icon from '../Assets/twitter-icon.png'

export const RandomQuote = () => {
  const [quotes, setQuotes] = useState([]); // State to store quotes
  const [quote, setQuote] = useState({
    text: 'Difficulties increase the nearer we get to the goal.',
    author: 'Johann Wolfgang von Goethe'
  });

  // Function to fetch quotes
  async function loadQuotes() {
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();
    setQuotes(data); // Update state with fetched quotes
  }

  // Function to set a random quote
  const getRandomQuote = () => {
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }
  }

  // Fetch quotes once when component mounts
  useEffect(() => {
    loadQuotes();
  }, []);

  return (
    <div className='container'>
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">- {quote.author.split(',')[0]}</div>
          <div className="icons">
            <img 
              onClick={getRandomQuote} 
              src={reload_icon} 
              alt="Reload" 
              style={{ cursor: 'pointer' }} 
            />
            <a 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={twitter_icon} 
                alt="Tweet" 
                style={{ cursor: 'pointer' }} 
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
