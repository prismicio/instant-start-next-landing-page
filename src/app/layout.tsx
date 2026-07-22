import "@/app/globals.css"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { repositoryName } from "@/prismicio"
import { PrismicPreview } from "@prismicio/next"
import { Manrope } from "next/font/google"

const manrope = Manrope({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-manrope",
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={manrope.variable}>
			<body className="bg-white text-zinc-900 antialiased selection:bg-black selection:text-white">
				<Header />
				<main className="min-h-screen">{children}</main>
				<Footer />
				<PrismicPreview repositoryName={repositoryName} />
			</body>
		</html>
	)
}
