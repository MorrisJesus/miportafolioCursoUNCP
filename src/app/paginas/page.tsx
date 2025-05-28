import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="flex justify-between gap-20 items-center">
				<div className="space-y-10 px-20 bg-slate-800 p-10 rounded-2xl ">
					<h1 className="text-white text-2xl text-center uppercase">
						Bienvenido (a)
					</h1>
					<div className="">
						<h1 className="text-amber-300 text-4xl uppercase">
							Morris Jesus Atencio Espiritu
						</h1>
						<h1 className="text-amber-300 text-2xl">
							Desarrollador Web Full Stack | Especialista en React, Next.js y
							NestJS
						</h1>
					</div>

					<p className="text-white text-justify">
						Soy un estudiante de noveno semestre de Ingeniería de Sistemas de la
						UNCP con un fuerte enfoque en el desarrollo web. Me especializo en
						tecnologías modernas como React, Next.js y NestJS, y tengo
						experiencia construyendo aplicaciones web dinámicas, responsivas y
						orientadas a soluciones reales para empresas. Mi objetivo es seguir
						creciendo como desarrollador, aportar valor en cada proyecto en el
						que participo y eventualmente formar mi propia empresa de desarrollo
						de sistemas web.
					</p>
					<h3 className="text-white my-0">Correo: jesusatencio8122@gmail.com</h3>
					<h3 className="text-white">N° de Celular: 929989292</h3>
					<div className="flex justify-center gap-20">
						<Link
							href="/paginas/proyectos"
							className=" uppercase font-bold max-lg:min-w-max px-3 py-1 lg:py-2 rounded-md text-left text-sm transition-colors text-black bg-amber-400"
						>
							Proyectos
						</Link>
						<Link
							href="/paginas/cuaderno"
							className=" uppercase font-bold max-lg:min-w-max px-3 py-1 lg:py-2 rounded-md text-left text-sm transition-colors text-black bg-amber-400"
						>
							Cuaderno
						</Link>
						<Link
							href="/paginas/contacto"
							className=" uppercase font-bold max-lg:min-w-max px-3 py-1 lg:py-2 rounded-md text-left text-sm transition-colors text-black bg-amber-400"
						>
							Contáctame
						</Link>
					</div>
					<div className="flex justify-center gap-20 mx-auto ">
						<a
							href="https://github.com/MorrisJesus"
							target="_blank"
							rel="noopener noreferrer"
							className="uppercase font-bold max-lg:min-w-max px-3 py-1 lg:py-2 rounded-md text-center text-sm transition-colors text-black bg-white"
						>
							<div className="w-[50] h-[50] relative mx-auto">
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
							<div className="w-[50] h-[50] relative mx-auto">
								<Image
									src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
									alt="logo"
									fill
									className="object-cover rounded-sm "
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
							<div className="w-[50] h-[50] relative mx-auto">
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
				</div>
				<div className="">
					<div className="hidden lg:block justify-center items-center">
						<div className="w-[500px] h-[600px] relative ">
							<Image
								src="/foto.jpg"
								alt="foto"
								fill
								className="object-cover rounded-sm transform transition-transform duration-300 hover:scale-110"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
