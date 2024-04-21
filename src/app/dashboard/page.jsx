"use client";

import React from "react";
import { useAuth } from "../components/auth/AuthProvider";
import { redirect } from "next/navigation";
import {
	Listbox,
	ListboxItem,
	ListboxSection,
	Spinner,
} from "@nextui-org/react";
import { Card } from "@nextui-org/card";

export default function Dashbaord() {
	const { user, loading, error, signOut } = useAuth();
	if (loading) {
		return (
			<main className="grid place-items-center min-h-screen min-w-screen">
				<Spinner />
			</main>
		);
	}

	if (!user || error) {
		redirect("/login");
	}

	return (
		<main className="min-h-screen min-w-screen grid grid-cols-5">
			<aside className="col-span-1 h-full bg-zinc-900 p-4">
				<nav>
					<div>
						<h2 className="text-2xl font-semibold border-b-1 border-b-zinc-500 pb-4">
							Learn UrWay
						</h2>
						<Listbox onAction={(key) => {}}>
							<ListboxSection>
								<ListboxItem key="1">Dashboard</ListboxItem>
								<ListboxItem key="2">Profile</ListboxItem>
								<ListboxItem key="3">Settings</ListboxItem>
							</ListboxSection>
							<ListboxSection>
								<ListboxItem
									key="4"
									onClick={signOut}
									color="warning"
								>
									Logout
								</ListboxItem>
							</ListboxSection>
						</Listbox>
					</div>
				</nav>
			</aside>
			<section className="col-span-2 p-8">
				<h1 className="text-5xl font-bold">Dashboard</h1>
				<p className="text-xl">
					Welcome <strong>{user.displayName}</strong>
				</p>
			</section>
			<Card>
				<Card.Header>Card Header</Card.Header>
				<Card.Body>Card Body</Card.Body>
				<Card.Footer>Card Footer</Card.Footer>
			</Card>
		</main>
	);
}
