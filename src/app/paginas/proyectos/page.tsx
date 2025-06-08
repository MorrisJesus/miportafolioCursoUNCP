import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="space-y-10 px-20 w-3/4 mx-auto max-lg:w-full max-md:px-5 ">
				<h1 className="text-white text-2xl text-center uppercase font-bold">
					PROYECTOS
				</h1>
				<div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 hover:border-amber-400 transition-all duration-300 hover:scale-[1.02]">
					<h2 className="text-white text-xl md:text-2xl uppercase font-bold mb-4 text-center">
						Sistema Administrativo de Gestión para Clínica Dental "Estética
						Oral" Huancayo 2025
					</h2>
					<ul className="text-white text-sm md:text-base space-y-2 list-disc list-inside text-justify">
						<li>
							<span className="font-semibold">Tecnologías:</span> Next.js,
							NestJS, PostgreSQL
						</li>
						<li>
							<span className="font-semibold">Funcionalidades:</span> Gestión de
							pacientes, tratamientos, citas, exportación de datos
						</li>
						<li>
							<a
								href="https://clinicafrontend-zryj.vercel.app/login"
								target="_blank"
								rel="noopener noreferrer"
								className="text-amber-300 hover:underline break-all"
							>
								https://clinicafrontend-zryj.vercel.app/login
							</a>
						</li>
					</ul>
				</div>

				<h1 className="text-white text-2xl md:text-3xl text-center uppercase font-bold mb-6">
					Imágenes del Proyecto
				</h1>

				<div className="flex flex-col items-center gap-5">
					{["/1.png", "/2.png"].map((src, idx) => (
						<div
							key={idx}
							className="relative w-full max-w-[90%] sm:max-w-[600px] md:max-w-[800px] aspect-video"
						>
							<Image
								src={src}
								alt={`Proyecto ${idx + 1}`}
								fill
								className="object-contain  bg-slate-800  rounded-2xl shadow-lg border border-slate-700 hover:border-amber-400 transition-all duration-300 hover:scale-[1.02]"
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
//bg-slate-800  rounded-2xl shadow-lg border border-slate-700 hover:border-amber-400 transition-all duration-300 hover:scale-[1.02]