'use client'
import React from "react";
import NavbarCustom from "../components/NavbarCustom";

export default function Page(){
  return(
    <>
      <NavbarCustom />
      <div>
        <h1 className="m-5 text-4xl">My Notes</h1>
      </div>
    </>
  );
}