import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
// import "codemirror/keymap/sublime"
// import "codemirror/theme/dracula.css"
import CodeMirror, {useCodeMirror} from '@uiw/react-codemirror'

import './App.css'

import { javascript } from '@codemirror/lang-javascript';

function App() {
  const [code,setCode] = useState('')
  const handleSubmit = () => {
    console.log(code)
  }
  const onChange = useCallback((value: string, viewUpdate: any) => {
    setCode(value)
    console.log('value:', value);
  }, []);
  return (
    <div>
    <CodeMirror
      value={code}
      height="200px"
      extensions={[javascript()]}
      onChange={onChange}
      theme={'dark'}
      key='sublime'
    />
    <div onClick={handleSubmit} className="border-2 bg-blue-600">Submit</div>
    </div>
  );
}

export default App
