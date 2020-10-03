import React, { useEffect, useState } from 'react';
import api from './api'
import './App.css';

const App = () => {
  const [result, setResult] = useState({});
  useEffect(() => {
    fetchResult();
  }, [])

  const fetchResult = async () => {
    const result = await api.get("q=ipl")
    setResult(result.articles)
  }

  return (
    <div className="App">
      {
        result && <pre><code>{JSON.stringify(result, null, 4)}</code></pre>
      }
    </div>
  );
}

export default App;
