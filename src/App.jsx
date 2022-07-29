import { useCallback, useRef } from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const inputrf=useRef()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {inputrf.current=data;
        setUser(inputrf.current)
      });
      

  },[]);
  
  function filterHandler() {
    const data=inputrf.current.filter((val) => val.title.includes(search))
    
    setUser(data);
   
  }
  function Handler(e) {
    setSearch(e.target.value);
  }
  return (
    <div className="App">
      <input
        type="text"
        placeholder="filter the title"
        value={search}
        onChange={Handler}
      />
      <button onClick={filterHandler}>filter</button>
      {user?.map((data) => (<p key={data.id}>
            
            {data.id}. {data.title}{" "}
          </p>
        ))}
    </div>
  );
}

export default App;

// import { useCallback } from 'react';
// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [counter,setCounter]=useState(0)
//   const increase=function (){

//     setCounter(counter+1)

//   }
//  const memo= useCallback(()=>{
//     console.log("callbackes")
//     increase()

//   },[counter])

//   const reset=()=>{
//     setCounter(0)
//   }

//   return (

//     <div className="App">

//       <h1> {counter}  </h1>
//       <button onClick={memo}>Increments</button>
//       {/* <button onClick={}>decrements</button> */}
//       <button onClick={reset}>Reset</button>

//     </div>
//   );
// }

// export default App;
