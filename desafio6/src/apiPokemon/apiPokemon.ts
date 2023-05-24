import axios from "axios"



class ApiPokemon{
    
    getData(): any{
        const data = axios.get("https://pokeapi.co/api/v2/pokemon")
        return data
    }
    getPokemon(pokemonName: string){
        const data = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        return data
    }
    
}

export const apiPokemon = new ApiPokemon() 