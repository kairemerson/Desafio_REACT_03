import { apiWeather } from './apsWeather/apsWeather';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [state, setState] = useState([])

  useEffect(()=>{
    const fetchData = async ()=> {
      const data = await apiWeather.getData()
      //console.log("data",data.data.results);
      setState(data.data.results)
    }
    fetchData()
    
    
  }, [])

  console.log(state);
  
  return (
    <div className="App">
      
      {state?.map((item: {name:""}) => <p>{item?.name}</p>)}
    </div>
  );
}

export default App;
