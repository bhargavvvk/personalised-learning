import React from "react";
import { useState } from "react";
import { Button, Input } from '@nextui-org/react';
export default function UploadPDF(){
  let [strength, setStrength] = useState(3);
  return(
  <>
  <form action="">
  <div className="text-center justify-center mt-10 w-3/5 lg:w-2/5 mx-auto">
  <Input type='text' label='Name of the Notes' className="m-4" name="noteName"/>
  <div className="flex">
  <Input type='range' label='Your strength in this Notes out of 5' id="strength" className="m-4" min={0} max={5} name="strength" onChange={(e) => setStrength(e.target.value)}/>
  <span className="text-red-200 mt-7" id="numWarn">{strength}</span>
  </div>
  

  <input type="file" class=" text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    " accept=".pdf" name="pdfFile"/>
    <br />
    <Button color="primary" className="mt-5" id="sumbit">Submit</Button>
  
  </div>
  
  
  </form>
  
  </>
  )
}