import axios from "axios"



class ApiWeather{
    
    getData(): any{
        const data = axios.get("https://pokeapi.co/api/v2/pokemon")
        return data
    }
    
}

export const apiWeather = new ApiWeather() 