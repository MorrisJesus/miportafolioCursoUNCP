import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="flex flex-col lg:flex-row justify-between gap-16 max-w-7xl mx-auto p-6 max-md:px-4">
				{/* Texto principal */}
				<div className="flex-1 space-y-10  p-8  max-w-full max-md:px-5 bg-slate-800  rounded-2xl shadow-lg border border-slate-700 hover:border-amber-400 transition-all duration-300 hover:scale-[1.02]">
					<h1 className="text-white text-2xl text-center uppercase font-semibold">
						Bienvenido (a)
					</h1>

					<div className="space-y-2 text-center max-md:text-left">
						<h2 className="text-amber-300 text-4xl uppercase font-bold leading-tight">
							Morris Jesus Atencio Espiritu
						</h2>
						<h3 className="text-amber-300 text-2xl font-medium">
							Desarrollador Web Full Stack | Especialista en React, Next.js y
							NestJS
						</h3>
					</div>

					<p className="text-white text-justify leading-relaxed">
						Soy un estudiante de noveno semestre de Ingeniería de Sistemas de la
						UNCP con un fuerte enfoque en el desarrollo web. Me especializo en
						tecnologías modernas como React, Next.js y NestJS, y tengo
						experiencia construyendo aplicaciones web dinámicas, responsivas y
						orientadas a soluciones reales para empresas. Mi objetivo es seguir
						creciendo como desarrollador, aportar valor en cada proyecto en el
						que participo y eventualmente formar mi propia empresa de desarrollo
						de sistemas web.
					</p>

					<div className="space-y-1 text-white text-center max-md:text-left">
						<h3>
							Correo:{" "}
							<a
								href="mailto:jesusatencio8122@gmail.com"
								className="underline hover:text-amber-400"
							>
								jesusatencio8122@gmail.com
							</a>
						</h3>
						<h3>
							N° de Celular:{" "}
							<a
								href="tel:+929989292"
								className="underline hover:text-amber-400"
							>
								929989292
							</a>
						</h3>
					</div>

					{/* Botones de navegación */}
					<div className="flex flex-wrap justify-center max-md:flex-col max-md:items-center gap-6 mt-6">
						{[
							{ href: "/paginas/proyectos", label: "Proyectos" },
							{ href: "/paginas/cuaderno", label: "Cuaderno" },
							{ href: "/paginas/contacto", label: "Contáctame" },
						].map(({ href, label }) => (
							<Link
								key={label}
								href={href}
								className="uppercase font-bold px-6 py-2 rounded-md bg-amber-400 text-black text-sm transition hover:bg-amber-500"
							>
								{label}
							</Link>
						))}
					</div>

					{/* Redes sociales */}
					<div className="flex flex-wrap justify-center max-md:flex-col max-md:items-center gap-6 mt-6">
						{[
							{
								href: "https://github.com/MorrisJesus",
								label: "GIT HUB",
								img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
							},
							{
								href: "https://wa.me/929989292?text=Hola%2C%20quiero%20más%20información",
								label: "WhatsApp",
								img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
							},
							{
								href: "https://www.linkedin.com/in/morris-jesus-atencio-espiritu-0b9b8022b/",
								label: "LINKEDIN",
								img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
							},
						].map(({ href, label, img }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="uppercase font-bold px-6 py-2 rounded-md bg-white text-black text-center text-sm flex flex-col items-center gap-2 hover:bg-gray-200 transition"
							>
								<div className="w-10 h-10 relative">
									<Image
										src={img}
										alt={`${label} logo`}
										fill
										className="object-contain"
									/>
								</div>
								{label}
							</a>
						))}
					</div>
				</div>

				{/* Foto perfil */}
				<div className="hidden lg:flex items-center justify-center flex-shrink-0">
					<div className="w-[400px] h-[480px] relative rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
						<Image
							src="/foto.jpg"
							alt="Foto de Morris Jesus"
							fill
							className="object-cover"
							priority
						/>
					</div>
				</div>
			</div>
		</>
	);
}
