import { ChangeEvent, useState } from "react"

function App() {
  const [value, setValue] = useState(0)
  const [text, setText] = useState('')

  function incrementValue() {
    setValue(value + 1)
  }

  function decrementValue() {
    setValue((prevState) => prevState - 1)
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  return (
    <div>
      <button onClick={incrementValue}>Incrementar +</button>
      <button onClick={decrementValue}>Decrementar -</button>
      <p>{value}</p>

      <div>
        {/* <input type="text" value={text} onChange={e => setText(e.target.value)} /> */}
        <input type="text" value={text} onChange={handleChange} />
        <p>Texto digitado: {text}</p>
      </div>
    </div>
  )
}

export default App
