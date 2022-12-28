import Vote from './vote';
import './App.css'; 
import memes from "./memes.json"

function App() {
  return (
    <div className="App">
      <div className='memes'> 
     {memes.data.memes.map((obj,index)=>(
      <Vote data={obj} key={index}/> 

     ))} 

</div>

    </div>
  )
}

export default App; 


