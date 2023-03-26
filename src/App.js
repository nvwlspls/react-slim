import { useState } from 'react';
import Papa from 'papaparse';

function App() {

  const [data, setData] = useState({});
  const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0ZopKDj4iCxxsYv1Y-JKSUSRCgpBlOXHOMHwoFuUx21fjOSWYGKEXZSDEz3tqptVKzCbU0zphwG0E/pub?output=csv"
  Papa.parse(url, {
    download: true,
    complete: function(results) {
      setData(results);
      console.log(data);
    }
  })

  return (
    <div className="App">
    <table>
  <thead>
  
    <tr>
      {data.data[0].map((x) => <th>{x}</th>)}
    </tr>
  </thead>
  <tbody>
    {data.data.slice(1).map((x) => <tr>{
      x.map((y) => <td>{y}</td>)
    }</tr>)} 
    </tbody>
</table>
    </div>
  );
}

export default App;
