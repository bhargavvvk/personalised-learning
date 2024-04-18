'use client'
import 'flowbite';
import React from "react";
import { BsFilePdfFill } from "react-icons/bs";
import NavbarCustom from "../components/NavbarCustom";
import UploadPDF from "../components/UploadPDF";

export default function Page() {
  return(
  <>
  <NavbarCustom/>
    <div className="text-center">
      <h1 className="text-2xl mt-60">Upload your <BsFilePdfFill className="inline"/>  PDF file and let's <span className="text-green-600">summarize</span> it first</h1>
    </div>
    <UploadPDF/>


    
  </>
  );
}