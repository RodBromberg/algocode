import React, { useState } from 'react'
import { useSandpack } from "@codesandbox/sandpack-react";
import { Sandpack } from "@codesandbox/sandpack-react";

export const CodeView = () => {
      const { sandpack } = useSandpack();
      const { files, activeFile } = sandpack;

      const [file,setFile] = useState(sandpack.files)
      console.log({ file })
      console.log({ files })
      console.log({ activeFile })
    
      const [code,setCode] = useState(files[activeFile].code)
      const filesProps = Object.entries(files).map(([key, value]) => {
          return {[key]:value.code}
      });
    
      return(
      <Sandpack 
      template='react'
    //   files={{'/New.js': `export default function Test() {
    //   return <div>TEST</div>
    //   }`,...Object.assign({},...filesProps)}}
    files={Object.assign({},...filesProps)}
      />
      )
    };
