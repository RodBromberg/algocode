import { useState, useCallback } from 'react'
import { Sandpack } from "@codesandbox/sandpack-react";
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
// import "codemirror/keymap/sublime"
// import "codemirror/theme/dracula.css"
import CodeMirror, { useCodeMirror } from '@uiw/react-codemirror'
import axios from 'axios'
import './App.css'
import { javascript } from '@codemirror/lang-javascript';
import Temp from './Temp';

function App() {
  const [code,setCode] = useState('function App(){ \n return (\n <div>Hello World </div> \n )} \nexport default App')
  const handleSubmit = () => {
    axios.post('http://localhost:8080/problem')
    console.log(code)
  }
  const onChange = useCallback((value: string, viewUpdate: any) => {
    setCode(value)
    console.log('value:', value);
  }, []);

  return (
    <Temp />
  )

//   return (
//     <div>
//     <CodeMirror
//       value={code}
//       height="200px"
//       extensions={[javascript({ jsx: true })]}
//       onChange={onChange}
//       theme={'dark'}
//       key='sublime'
//     />
//     {/* <LiveProvider code={code}>
//         <LiveError />
//         <LivePreview />
//     </LiveProvider> */}
//     <Sandpack
//     files={{
//     "/App.js": code,
//     // "/button.js": {
//     //   code: buttonCode,
//     //   active: true,
//     // },
//     // "/link.js": {
//     //   code: linkCode,
//     //   hidden: true,
//     // },
//   }}
//   template="react"
// />

//     <div 
//     onClick={handleSubmit} 
//     className="border-2 bg-blue-600">Submit</div>
//     </div>
//   );
}

export default App
