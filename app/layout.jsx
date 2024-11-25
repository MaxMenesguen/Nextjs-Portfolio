import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
	title: "Maximilien Menesguen | Portfolio",
	description:
		"My name is Maximilien Menesguen, a creative technologist passionate about innovative solutions. I hold a double master's degree in Creative Technology and Science.",
	author: "Maximilien Menesguen",
	siteUrl: "https://www.maximilien-menesguen.com",
	applicationName: "Maximilien Portfolio",
	keywords: [
		"maximilien menesguen",
		"creative technologist",
		"web developer",
		"portfolio",
		"ux/ui design",
		"crazyflie drones",
		"ai development",
	],
	openGraph: {
		type: "website",
		url: "https://www.maximilien-menesguen.com",
		title: "Maximilien Menesguen | Portfolio",
		site_name: "Maximilien Menesguen | Portfolio",
		description: "My name is Maximilien Menesguen. This is my portfolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Maximilien Menesguen Portfolio",
			},
		],
		site_name: "Maximilien Menesguen | Portfolio",
	},
};

const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
	ssr: false,
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<TopProgressBar />
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
