import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="space-y-10 px-20 w-3/4 mx-auto max-lg:w-full max-md:px-5 ">
				<h1 className="text-white text-2xl text-center uppercase font-bold">
					SOBRE MI
				</h1>
				<div className="p-6 md:p-10  mb-10 bg-slate-800  rounded-2xl shadow-lg border border-slate-700 hover:border-amber-400 transition-all duration-300 hover:scale-[1.02]">
					<p className="text-white text-justify text-sm md:text-base">
						Soy un estudiante de noveno semestre de Ingeniería de Sistemas de la
						UNCP con un fuerte enfoque en el desarrollo web. Me especializo en
						tecnologías modernas como React, Next.js y NestJS, y tengo
						experiencia construyendo aplicaciones web dinámicas, responsivas y
						orientadas a soluciones reales para empresas. Mi objetivo es seguir
						creciendo como desarrollador, aportar valor en cada proyecto en el
						que participo y eventualmente formar mi propia empresa de desarrollo
						de sistemas web.
					</p>
				</div>

				<div className="flex flex-col md:flex-row justify-center gap-10 max-w-6xl mx-auto mb-10">
					<div className="flex-1">
						<h2 className="text-white text-2xl uppercase font-bold mb-5 text-center md:text-left">
							🎓 Estudios
						</h2>
						<div className="p-6  bg-slate-800  rounded-2xl shadow-lg border border-slate-700 hover:border-amber-400 transition-all duration-300 hover:scale-[1.02]">
							<ul className="text-white text-justify space-y-2 text-sm md:text-base">
								<li>Ingeniería de Sistemas</li>
								<li>UNIVERSIDAD NACIONAL DEL CENTRO DEL PERÚ</li>
								<li>Actualmente cursando el noveno semestre</li>
							</ul>
						</div>
					</div>

					<div className="flex-1">
						<h2 className="text-white text-2xl uppercase font-bold mb-5 text-center md:text-left">
							📚 Cursos y certificaciones
						</h2>
						<div className=" p-6 bg-slate-800  rounded-2xl shadow-lg border border-slate-700 hover:border-amber-400 transition-all duration-300 hover:scale-[1.02]">
							<ul className="text-white text-justify space-y-2 text-sm md:text-base">
								<li>Desarrollo Web con React - UDEMY</li>
								<li>Backend con NestJS - UDEMY</li>
								<li>Fundamentos de UX/UI - UDEMY</li>
								<li>Git y Control de Versiones - UDEMY</li>
							</ul>
						</div>
					</div>
				</div>

				<h2 className="text-white text-2xl uppercase font-bold mb-5 max-md:text-center">
					💼 Experiencia
				</h2>

				<div className=" p-6 md:p-10  max-w-4xl mx-auto bg-slate-800  rounded-2xl shadow-lg border border-slate-700 hover:border-amber-400 transition-all duration-300 hover:scale-[1.02]">
					<h3 className="text-white uppercase font-bold mb-4">
						Sistema Administrativo de Gestión para Clínica Dental "Estética
						Oral"
					</h3>
					<ul className="text-white text-justify space-y-2 text-sm md:text-base mb-4">
						<li>
							<strong>Tecnologías:</strong> Next.js, NestJS, PostgreSQL
						</li>
						<li>
							<strong>Funcionalidades:</strong> Gestión de pacientes,
							tratamientos, citas, exportación de datos
						</li>
					</ul>
					<a
						href="https://clinicafrontend-zryj.vercel.app/login"
						target="_blank"
						rel="noopener noreferrer"
						className="text-amber-300 hover:underline break-all"
					>
						https://clinicafrontend-zryj.vercel.app/login
					</a>
				</div>
			</div>
		</>
	);
}
