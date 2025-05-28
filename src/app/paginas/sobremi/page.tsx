import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="space-y-10 px-20 w-3/4 mx-auto max-md:w-full max-md:px-5 ">
				<h1 className="text-white text-2xl text-center uppercase font-bold">
					SOBRE MI
				</h1>
				<div className="bg-slate-800 p-10 rounded-2xl">
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
				</div>
				<div className="flex justify-center gap-20 max-md:flex-col max-md:gap-0">
					<div className="">
						<h2 className="text-white text-2xl uppercase font-bold mb-5 text-center">
							🎓 Estudios
						</h2>

						<div className="text-white text-justify bg-slate-800 p-5 rounded-2xl">
							<ul className="text-white text-justify">
								<li>Ingeniería de Sistemas </li>
								<li>UNIVERSIDAD NACIONAL DEL CENTRO DEL PERÚ </li>
								<li>Actualmente cursando el noveno semestre</li>
							</ul>
						</div>
					</div>

					<div className="">
						<h2 className="text-white text-2xl text-center uppercase font-bold mb-5">
							📚 Cursos y certificaciones
						</h2>

						<div className="text-white text-justify bg-slate-800 p-5 rounded-2xl">
							<ul className="text-white text-justify">
								<li>Desarrollo Web con React - UDEMY</li>
								<li>Backend con NestJS - UDEMY</li>
								<li>Fundamentos de UX/UI - UDEMY</li>
								<li>Git y Control de Versiones - UDEMY</li>
							</ul>
						</div>
					</div>
				</div>
				<h2 className="text-white text-2xl text-start uppercase font-bold max-md:text-center">
					💼 Experiencia
				</h2>
				<div className="bg-slate-800 p-10 rounded-2xl mb-5">
					<h2 className="text-white  text-start uppercase font-bold">
						Sistema Administrativo de Gestión para Clínica Dental "Estética
						Oral"
					</h2>
					<ul className="text-white text-justify">
						<li>Tecnologías: Next.js, NestJS, PostgreSQL </li>
						<li>
							Funcionalidades: Gestión de pacientes,tratamientos, citas,
							exportación de datos
						</li>
						<a
							href="https://clinicafrontend-zryj.vercel.app/login"
							target="_blank"
						>
							https://clinicafrontend-zryj.vercel.app/login
						</a>
					</ul>
				</div>
			</div>
		</>
	);
}
