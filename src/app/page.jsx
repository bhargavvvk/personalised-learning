"use client";
import { Button } from "@nextui-org/react";
import NavbarCustom from "./components/NavbarCustom";
import Link from "next/link";
export default function Home() {

	return (
		<>
			<NavbarCustom />
			<div className="mt-60  mx-auto  rounded-md">
				<div className="align-middle justify-center text-center w-50 mx-auto my-10">
					<h1 className="my-10 text-5xl">Hello Learner!</h1>
					<p className="text-blue-600">
						Get Started with the most amazing tool with which you
						can make your learnier wayyyyy faster and wayyyy easier.
					</p>
					<button />
				</div>

				<div className="text-center">
					<Link href="/signup">
						<Button
							color="primary"
							className="hover:bg-blue-400 mx-5"
						>
							Get Started
						</Button>
					</Link>
					<Link href="/notes">
						<Button>Go to notes</Button>
					</Link>
				</div>
			</div>
		</>
	);
}
