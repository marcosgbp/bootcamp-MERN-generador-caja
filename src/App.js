import { useState } from "react";
import BoxForm from "./Components/BoxForm";
import BoxList from "./Components/BoxList";

function App() {
  const [listaColor, setListaColor] = useState([]);
  const addColor = (data) => {
    data.id = Date.now();
     setListaColor([
      ...listaColor,
      data
    ]) 
  }
  const deleteBox = (id)=>{
    let newData = listaColor.filter(el=>el.id!==id);
    setListaColor(newData);
  }
  
  return (
    <div className="App container">
      <BoxForm addColor={addColor}/>
      <BoxList listaColor={listaColor} deleteBox={deleteBox}/>
    </div>
  );
}

export default App;
