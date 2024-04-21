import { Button, Input, Spinner } from "@nextui-org/react";
import { useState } from "react";
import { useAuth } from "../AuthProvider";

export default function UserNamePassword({ action = "signUp" }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { user, loading, error, signUp, signIn } = useAuth();

	if (user && !loading && !error) {
		return <p>Logged In User: {JSON.stringify(user)}</p>;
	}

	return (
		<>
			{error && <p>Error: {JSON.stringify(error, null, 2)}</p>}
			<form className="flex flex-col gap-4">
				<Input
					type="email"
					label="Email"
					value={email}
					onChange={(e) => setEmail(e.currentTarget.value)}
					disabled={loading}
					isInvalid={error && error.name.includes("email")}
					errorMessage={error}
					isRequired
					autocomplete="no"
				/>
				<Input
					type="password"
					label="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					disabled={loading}
					errorMessage={
						error &&
						error.name === "auth/weak-password" &&
						"Weak password"
					}
					isRequired
					autocomplete="no"
				/>
				<Button
					onClick={async () => {
						if (action === "signIn") await signIn(email, password);
						else await signUp(email, password);
					}}
					color="default"
					disabled={loading}
					startContent={loading && <Spinner />}
				>
					{
						{
							signUp: "Sign Up",
							signIn: "Sign In",
						}[action]
					}
				</Button>
			</form>
		</>
	);
}
