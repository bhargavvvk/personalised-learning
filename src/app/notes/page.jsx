'use client'
import React, { useState } from "react";
import NavbarCustom from "../components/NavbarCustom";
import NotesCard from "../components/NotesCard";
import { Divider } from "@nextui-org/react";
export default function Page(){
  const [notesList, setNotesList] = useState(['Notes1','Notes2', 'Notes3', 'Notes4'])
  return(
    <>
      <NavbarCustom />
        <p className="m-5 text-4xl " >My Notes</p>
        <Divider/>
        <div className="flex flex-wrap w-100  bg-transparent">
        {notesList.map((season) => <NotesCard notes={season}/>)}
        
        </div>
    </>
  );
}