import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js';
import { Database } from './types/supabase';

  // TODO: Is there someplace to keep config variables like this?
  // TODO: If this is something that lives in the file should it be inside the component?
  const SUPABASE_KEY: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6dXBveGt3ZnBrZXdib3NrcWlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk4OTI3MjMsImV4cCI6MTk5NTQ2ODcyM30.h_1cuTN7l4ocNRk1bMDnk3h5a0HHRSDxC4yq3B7nmIU';
  const SUPABAE_URL: string = 'https://dzupoxkwfpkewboskqif.supabase.co'
  const supabase = createClient<Database>(SUPABAE_URL, SUPABASE_KEY);

function App() {
  const [bands, setBands] = useState([]);

  useEffect(() => {
    getBands();
  }, []);

  async function getBands() {
    const { data } = await supabase.from('bands').select('*');
    setBands(data);
  }


  // setBands1(data);
  return (

    <div className="App">
    <table>
  <thead>
    <tr>
      { bands.map((band) => (
        <th>{band.name}</th>
      ))}
    </tr>
    </thead>

  <tbody>
    </tbody>
</table>
    </div>
  );
}

export default App;
