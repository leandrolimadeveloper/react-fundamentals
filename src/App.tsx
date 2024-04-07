import { ChangeEvent, FormEvent, useReducer, useState } from "react";

import { UserProfile } from "./components/UserProfile";
import { TaskList } from "./components/TaskList";
import { MovieList } from "./components/MovieList";

import { GameList } from "./components/Game/GameList";
import { games } from "./data/games";
import Contexts from "./Contexts";

function reducer(state, action) {
  switch (action.type) {
    case 'Increment': 
      return { ...state, count: state.count + 1}
    
    case 'CarSelected':
      return {...state, showCar: !state.showCar}
    
    case 'IncrementValueAndShowCar':
      return {...state, count: state.count + 1, showCar: !state.showCar}

    case 'ResetValue':
      return { count: 0, showCar: false}

    default: 
      return state
  }
}

function App() {
  // Reducer
  const [state, dispatch] = useReducer(reducer, {
    count: 0,  
    showCar: false
  })
  
  const [textCar, setTextCar] = useState<string>("")
  // const [showCar, setShowCar] = useState<boolean>(false)
  
  const [value, setValue] = useState(0);
  const [text, setText] = useState("");

  const [nome, setNome] = useState<string>("");
  const [sobrenome, setSobrenome] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");
  const [idade, setIdade] = useState<number>(0);

  const tasks: string[] = ['Estudar React', 'Comprar sorvete']

  // Movies
  const movies = [
    {title: 'Inception', genre: 'Sci-Fi', releaseYear: 2010},
    {title: 'The Shawshank Redepmtion', genre: 'Drama', releaseYear: 1994},
    {title: 'The Dark Knight', genre: 'Action', releaseYear: 2008}
  ]

  function incrementValue() {
    setValue(value + 1);
  }

  function decrementValue() {
    setValue((prevState) => prevState - 1);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleSobrenome(event: ChangeEvent<HTMLInputElement>) {
    setSobrenome(event.target.value);
  }

  function handleCidade(event: ChangeEvent<HTMLInputElement>) {
    setCidade(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`Nome: ${nome} ${sobrenome}, Idade: ${idade}, ${cidade}`);
  }

  function handleCount() {
    dispatch({type: 'Increment'})
  }

  function handleCarSelection() {
    const car = prompt("Insira o modelo e marca do carro: ")
    
    // if (car !== null) {
    //   setTextCar(car)
    // }

    car !== null ? setTextCar(car) : setTextCar("")

    // setShowCar(!showCar)

    dispatch({type: 'CarSelected'})
  }

  function handleClick() {
    const car = prompt("Insira o modelo e marca do carro: ")

    car !== null ? setTextCar(car) : setTextCar("")

    dispatch({type: 'IncrementValueAndShowCar'})
  }

  return (
    <div>
      <h1>UseState</h1>
      
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
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setNome(event.target.value)
            }
          />
        </label>

        <label htmlFor="idade">
          Idade:
          <input
            type="number"
            id="idade"
            value={idade}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setIdade(Number(event.target.value))
            }
          />
        </label>

        <label htmlFor="sobrenome">
          Sobrenome:
          <input
            type="text"
            id="nome"
            value={sobrenome}
            onChange={handleSobrenome}
          />
        </label>

        <label htmlFor="cidade">
          Cidade:
          <input
            type="text"
            id="cidade"
            value={cidade}
            onChange={handleCidade}
          />
        </label>

        <button type="submit">Enviar</button>
      </form>

      <br /><br />

      <hr />
      <hr />

      <h1>Componentes e Propriedades</h1>
      <UserProfile name="Leandro" age={31} location="Tucuruí"/>

      <h3>TaskList</h3>
      <TaskList tasks={['Comprar pão', 'Limpar a casa']}/>
      
      <TaskList tasks={tasks} />

      {/* Componente Lista de Filmes */}
      <MovieList movies={movies}/>

      {/* Componente Lista dos melhores games */}
      <GameList games={games}/>
      <div>
        <h2>Contextos</h2>
        <Contexts />
      </div>

      <h2>useReducer</h2>
      <button onClick={handleCount}>Count: {state.count}</button><br /><br />
      
      <p style={{display: 'inline', border: '2px solid red'}}>Que carro você deseja?</p>

      <button onClick={handleCarSelection}>Responder</button>
      {state.showCar && <p>O carro desejado é: {textCar}</p>}

      <br /><br />

      <button onClick={handleClick}>Mostrar carro desejado e aumentar contador</button>
      {state.showCar && <p>O carro desejado é: {textCar}</p>}
      <p>Contador: {state.count}</p>

      <button onClick={() => dispatch({ type: 'ResetValue'})}>Resetar valores</button>
    </div>
  );
}

export default App;
