import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner"



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
			<div
				className= " bg-animated-gradient"
			>
				<Header />
				<div className="flex flex-col min-h-screen">
					<div className="flex-grow px-10 max-md:px-2">{children}</div>
					<Toaster />
					<Footer />
				</div>
			</div>
	);
}
