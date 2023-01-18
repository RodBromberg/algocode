import { useState, useCallback } from 'react'
// import "codemirror/keymap/sublime"
// import "codemirror/theme/dracula.css"
import CodeMirror, { useCodeMirror } from '@uiw/react-codemirror'
import axios from 'axios'
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';


function PY() {
  const [code,setCode] = useState( 'def add(a,b): \n')
  const [testCaseResults,setTestCaseResults] = useState([])
  const handleSubmit = () => {
      axios
        .post('http://localhost:8080/problem', { code })
        .then(({ data }) => {
          setTestCaseResults(data.testCaseResults);
        })
        .catch((err) => console.log(err));
    };
    const onChange = useCallback((value: string, viewUpdate: any) => {
      setCode(value);
  }, []);
  return (
    <div>
      <h2>Write A Function That Returns The Sum Of Two Input Parameters</h2>
    <CodeMirror
      value={code}
      height="200px"
      extensions={[python()]}
      onChange={onChange}
      theme={'dark'}
      key='sublime'
    />
    <div 
    onClick={handleSubmit} 
    className="border-2 bg-blue-600">Submit</div>
    </div>
  );
}

export default PY
