import Image from "next/image";

export default function Home() {
	return (
		<>
			<h1 className="text-white text-2xl text-center uppercase font-bold">
				CONTACTO
			</h1>
			<div className="flex justify-center gap-20 mx-auto my-20">
				<a
					href="https://github.com/MorrisJesus"
					target="_blank"
					rel="noopener noreferrer"
					className="uppercase font-bold max-lg:min-w-max px-3 py-1 lg:py-2 rounded-md text-center text-sm transition-colors text-black bg-white"
				>
					<div className="w-[100px] h-[100px] relative ">
						<Image
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
							alt="logo"
							fill
							className="object-cover rounded-sm"
						/>
					</div>
					GIT HUB
				</a>
				<a
					href="https://wa.me/929989292?text=Hola%2C%20quiero%20más%20información"
					target="_blank"
					rel="noopener noreferrer"
					className="uppercase font-bold max-lg:min-w-max px-3 py-1 lg:py-2 rounded-md text-center text-sm transition-colors text-black bg-white"
				>
					<div className="w-[100px] h-[100px] relative">
						<Image
							src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
							alt="logo"
							fill
							className="object-cover rounded-sm"
						/>
					</div>
					WhatsApp
				</a>
				<a
					href="https://www.linkedin.com/in/morris-jesus-atencio-espiritu-0b9b8022b/"
					target="_blank"
					rel="noopener noreferrer"
					className="uppercase font-bold max-lg:min-w-max px-3 py-1 lg:py-2 rounded-md text-center text-sm transition-colors text-black bg-white"
				>
					<div className="w-[100px] h-[100px] relative ">
						<Image
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
							alt="logo"
							fill
							className="object-cover rounded-sm"
						/>
					</div>
					LINKEDIN
				</a>
			</div>
			<h2 className="text-white text-2xl text-center uppercase font-bold">
				Espero que me contactes
			</h2>
		</>
	);
}
