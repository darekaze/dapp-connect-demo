import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="p-2">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
