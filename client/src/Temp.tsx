import { useState, useCallback } from 'react'
import { Sandpack } from "@codesandbox/sandpack-react";
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import { SandpackProvider, SandpackPreview, SandpackLayout, SandpackCodeEditor } from "@codesandbox/sandpack-react";

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
import { useSandpack } from "@codesandbox/sandpack-react";
import { CodeView } from './components/CodeView/CodeView';

function Temp() {
  // const [code,setCode] = useState('function App(){ \n return (\n <div>Hello World </div> \n )} \n export default App')
  // const handleSubmit = () => {
  //   axios.post('http://localhost:8080/problem')
  //   console.log(code)
  // }
  // const onChange = useCallback((value: string, viewUpdate: any) => {
  //   setCode(value)
  //   console.log('value:', value);
  // }, []);

return ( 
<SandpackProvider template="react">
  <SandpackLayout>
  {/* <Sandpack 
    template='react'
    files={{'/New.js': `export default function Test() {
    return <div>TEST</div>
    }`,...Object.assign({},...filesProps)}}
 
    /> */}
    {/* <SandpackCodeEditor
      showRunButton={true}
      extensions={[autocompletion()]}
        // extensionsKeymap={[completionKeymap]}       
      showTabs={true}
      showLineNumbers={true}
      showInlineErrors
      wrapContent
      closableTabs 
      /> */}
    
    <CodeView />
  </SandpackLayout>
</SandpackProvider>)
}

export default Temp
