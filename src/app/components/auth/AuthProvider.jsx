import React from "react";

import {
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	signOut as _signOut,
} from "firebase/auth";
import { auth } from "@/utils/firebase";

export const AuthContext = React.createContext();

export const useAuth = () => {
	return React.useContext(AuthContext);
};

export default function AuthProvider({ children }) {
	const [user, setUser] = React.useState(null);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(null);

	React.useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const signIn = async (email, password) => {
		try {
			setLoading(true);
			await signInWithEmailAndPassword(auth, email, password);
		} catch (error) {
			setError(error);
			setLoading(false);
		}
	};

	const signInWithGoogle = async () => {
		try {
			setLoading(true);
			const provider = new GoogleAuthProvider();
			await signInWithPopup(auth, provider);
		} catch (error) {
			setError(error);
			setLoading(false);
		}
	};

	const signOut = async () => {
		try {
			setLoading(true);
			await _signOut(auth);
		} catch (error) {
			setError(error);
			setLoading(false);
		}
	};

	const signUp = async (email, password) => {
		try {
			setLoading(true);
			await createUserWithEmailAndPassword(auth, email, password);
		} catch (error) {
			setError(error);
			setLoading(false);
		}
	};

	const reset = () => {
		setError(null);
		setLoading(false);
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				loading,
				error,
				signIn,
				signOut,
				signInWithGoogle,
				signUp,
				reset,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
