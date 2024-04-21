"use client";

import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
	Spinner,
} from "@nextui-org/react";
import UserNamePassword from "../components/auth/signup/UserNamePassword";
import GoogleSignIn from "../components/auth/GoogleSignIn";
import Link from "next/link";
import { useAuth } from "../components/auth/AuthProvider";

export default function SignUp() {
	const { user, loading, error, signOut, reset } = useAuth();
	return (
		<main className="grid place-items-center min-h-screen">
			<Card className="max-w-[400px] w-full">
				<CardHeader className="p-8 justify-center">
					<h1 className="text-3xl font-medium text-slate-400">
						Sign Up
					</h1>
				</CardHeader>
				<Divider />
				<CardBody className="gap-4 p-12">
					{error ? (
						<>
							<p>Error: {error.message}</p>
							<Button
								onClick={async () => await reset()}
								color="default"
								variant="ghost"
							>
								Retry
							</Button>
						</>
					) : loading ? (
						<>
							<Spinner />
						</>
					) : user ? (
						<>
							<p>Logged in as {user.displayName} </p>
							<Link
								className="text-blue-500 hover:text-blue-600"
								href="/dashboard"
							>
								Go to Dashboard
							</Link>
						</>
					) : (
						<>
							<h2>Social Sign Up</h2>
							<GoogleSignIn />

							<Divider />

							<h2>Sign Up with Email</h2>

							<UserNamePassword />
						</>
					)}
				</CardBody>
				<Divider />
				<CardFooter className="justify-evenly">
					<p className="text-center text-sm text-slate-400">
						Already have an account?{" "}
						<Link
							className="text-blue-500 underline underline-offset-2 hover:text-blue-700"
							href="/login"
						>
							Login
						</Link>
					</p>
					{user && (
						<Button
							variant="ghost"
							className="text-center text-sm text-slate-400"
							onClick={async () => await signOut()}
						>
							Sign Out
						</Button>
					)}
				</CardFooter>
			</Card>
		</main>
	);
}
