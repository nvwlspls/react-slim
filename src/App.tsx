import { useState } from 'react';
import * as papaparse from 'papaparse';

type AppProps = {

};

function App(): JSX.Element {

  const [data, setData] = useState({});
  const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0ZopKDj4iCxxsYv1Y-JKSUSRCgpBlOXHOMHwoFuUx21fjOSWYGKEXZSDEz3tqptVKzCbU0zphwG0E/pub?output=csv"

  papaparse.parse(url, {
    download: true,
    complete: function(results) {
      setData(results);
      console.log("now")
    }
  });

  return (
    <div className="App">
    <table>
  <thead>
    <tr>

    </tr>
    </thead>

  <tbody>
    </tbody>
</table>
    </div>
  );
}

export default App;
