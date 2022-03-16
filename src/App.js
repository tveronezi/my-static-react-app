import {useState} from "react";
import {Layout} from "./Layout";

function App() {
    const [count, setCount] = useState(0);
  return (
      <Layout>
          <div className="grid place-content-center text-center bg-gray-700 h-full space-y-16">
              <span>index!</span>
              <button className="p-4 bg-black text-white text-2xl w-32 rounded-lg" onClick={() => setCount(count + 1)}
              >{count}</button
              >
          </div>
      </Layout>
  );
}

export default App;
