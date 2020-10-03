import React, { useEffect, useState } from 'react';
import './App.css';

const URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
const App = () => {
  const [result, setResult] = useState({});
  useEffect(() => {
    fetchResult();
  }, [])

  const fetchResult = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setResult(data)
  }

  return (
    <div className="App">
      {
        result && <pre><code>{JSON.stringify(result, null, 4)}</code></pre>
      }
      {console.log(result)}
    </div>
  );
}

export default App;
