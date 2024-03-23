import grapesjs from "grapesjs";
import { useState , useEffect } from "react";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import "./styles/main.scss";


function App() {
  const[editor,seteditor]= useState(null);
  useEffect (() =>{
    const editor = grapesjs.init({
      container : "#editor",
      plugins : [gjsPresetWebpage],
      pluginsOpts : {
        gjsPresetWebpage: {}
      }
    });
    seteditor(editor);
  },[]);
  return (
    <div className='app'>
      <div id="editor"></div>
    </div>

  );
}

export default App;
