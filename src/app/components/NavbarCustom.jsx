import React from "react";
import Image from "next/image";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
export default function NavbarCustom(){
  return(
    <Navbar>
      <NavbarBrand>
        <Image
        className='w-120 mx-2'
        src='/logo.svg'
        width={40}
        height={40}
        />
        <p className="font-bold text-inherit">UrWay</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/upload" color='foreground' aria-current="page">
            Upload PDF
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/notes" color='foreground' aria-current="page">
            Notes
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}