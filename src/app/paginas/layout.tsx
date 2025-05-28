import Header from "@/components/Header";
import Footer from "@/components/Footer";



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
			<div
				className= " bg-slate-900"
			>
				<Header />
				<div className="flex flex-col min-h-screen">
					<div className="flex-grow px-10">{children}</div>

					<Footer />
				</div>
			</div>
	);
}
