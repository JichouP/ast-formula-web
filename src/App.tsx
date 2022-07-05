import { useEffect } from 'react';
import init, { calculate } from '../wasm/pkg';

function App() {
  useEffect(() => {
    init();
  }, []);
  return <div></div>;
}

export default App;
