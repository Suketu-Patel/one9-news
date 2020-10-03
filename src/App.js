import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card.js';
import api from './api'
import './App.css';

const App = () => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    fetchResult();
  }, [])

  const fetchResult = async () => {
    const newsData = await api.get("q=ipl")
    setNewsData(newsData.articles)
  }

  return (
    <div className="App">
      {
        newsData && <pre><code>{JSON.stringify(newsData, null, 4)}</code></pre>
      }
    <div>
        {
          newsData.map(singleNews => {
            return <div className="single-card"><Card news = {singleNews} /></div>
          })
        }
    </div>
    </div>
  );
}

export default App;
