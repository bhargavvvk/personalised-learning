import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Learn UrWay",
	description: "AI Powered Learning Assistant",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="dark" suppressHydrationWarning>
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
