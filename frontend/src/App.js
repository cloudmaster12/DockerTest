import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return (
    <div>
      <h1>React + Flask + PostgreSQL</h1>
      {data ? <p>Server Time: {data.server_time}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;

