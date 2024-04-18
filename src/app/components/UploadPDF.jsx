import React from "react";
import { useState } from "react";
import { Button, Input } from '@nextui-org/react';
export default function UploadPDF(){

  return(
  <>
  <form action="">
  <div className="text-center justify-center mt-10 w-3/5 lg:w-2/5 mx-auto">
  <Input type='text' label='Name of the Notes' className="m-4"/>
  <Input type='number' label='Your strength in this Notes out of 5' className="m-4"/>
  <p className="text-red-200" id="numWarn"></p>

  <input type="file" class=" text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    " accept=".pdf"/>
    <br />
    <Button color="primary" className="mt-5" id="sumbit">Submit</Button>
  
  </div>
  
  
  </form>
  
  </>
  )
}