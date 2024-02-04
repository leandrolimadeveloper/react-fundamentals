import { ChangeEvent, FormEvent, useState } from "react"

function App() {
  const [value, setValue] = useState(0)
  const [text, setText] = useState('')

  const [nome, setNome] = useState<string>('')
  const [sobrenome, setSobrenome] = useState<string>('')
  const [cidade, setCidade] = useState<string>('')
  const [idade, setIdade] = useState<number>(0)

  function incrementValue() {
    setValue(value + 1)
  }

  function decrementValue() {
    setValue((prevState) => prevState - 1)
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  function handleSobrenome(event: ChangeEvent<HTMLInputElement>) {
    setSobrenome(event.target.value)
  }

  function handleCidade(event: ChangeEvent<HTMLInputElement>) {
    setCidade(event.target.value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    alert(`Nome: ${nome} ${sobrenome}, Idade: ${idade}, ${cidade}`)
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
      
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input type="text" id="nome" value={nome} onChange={(event: ChangeEvent<HTMLInputElement>) => setNome(event.target.value)} />
        </label>

        <label htmlFor="idade">
          Idade:
          <input type="number" id="idade" value={idade} onChange={(event: ChangeEvent<HTMLInputElement>) => setIdade(Number(event.target.value))} />
        </label>

        <label htmlFor="sobrenome">
          Sobrenome:
          <input type="text" id="nome" value={sobrenome} onChange={handleSobrenome}/>
        </label>

        <label htmlFor="cidade">
          Cidade:
          <input type="text" id="cidade" value={cidade} onChange={handleCidade} />
        </label>


        <button type="submit">Enviar</button>
      </form>

    </div>

  )
}

export default App
