import { Button } from "@nextui-org/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "./AuthProvider";

export default function GoogleSignIn() {
	const { signInWithGoogle, user, loading, error } = useAuth();

	if (user) {
		return <p>Logged in as {JSON.stringify(user)}</p>;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	return (
		<Button
			startContent={<FcGoogle />}
			onClick={async () => {
				await signInWithGoogle();
			}}
			className="bg-white text-black w-full justify-center gap-2"
			disabled={loading}
			color={error ? "danger" : loading ? "warning" : "default"}
		>
			Sign In with Google
		</Button>
	);
}
