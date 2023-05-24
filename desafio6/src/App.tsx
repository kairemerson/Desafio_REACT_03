import './App.css';
import { apiPokemon } from './apiPokemon/apiPokemon';
import { useState } from 'react';

interface Pokemon {
  name: string,
  sprites: {front_default: string}
}

function App() {
  const [pokemon,setPokemon] = useState<Pokemon>()
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = async()=>{
    try {
      const fetchPokemon = await apiPokemon.getPokemon(inputValue)
      if(fetchPokemon && inputValue){
        setPokemon(fetchPokemon.data)
      }
      setInputValue("")    
      
    } catch (error) {
      console.log(error);
      
    }
    
  }
  
  return (
    <div className="App">
      <h1 className='textInfo'>Escreva o nome do pokemon e clique em buscar!</h1>
      <div>
        <input className='inputText' type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button className='buttonSubmit' onClick={handleSubmit}>Buscar</button>
      </div>
      
      {pokemon &&
       <div className='card'>
          <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
          <h2>{pokemon?.name}</h2>
       </div>
      }   
    </div>
  );
}

export default App;
