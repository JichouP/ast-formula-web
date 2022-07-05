import { useEffect, useState } from 'react';
import init, { calculate } from '../wasm/pkg';

function App() {
  const [value, setValue] = useState('1+2');
  const [answer, setAnswer] = useState('3');
  const [initDone, setInitDone] = useState(false);

  useEffect(() => {
    init().then(() => setInitDone(true));
  }, []);

  useEffect(() => {
    if (initDone) {
      try {
        const result = `${calculate(value)}`;
        setAnswer(result);
      } catch (e) {
        setAnswer(e as string);
      }
    }
  }, [value]);

  return (
    <div className="flex h-screen justify-center">
      <div className="flex flex-col items-center">
        <div className="m-16 text-center text-4xl">WASM Calculator</div>
        <input
          type="text"
          placeholder="Type expression here"
          className="input input-bordered m-8 w-80 text-2xl"
          value={value}
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
        ></input>
        <div>
          <span className="text-2xl">{answer}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
