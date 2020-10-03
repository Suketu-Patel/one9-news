import React, { useEffect, useState } from 'react';
import api from './api'
import './App.css';

const App = () => {
  const [newsData, setNewsData] = useState({});
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
    </div>
  );
}

export default App;
