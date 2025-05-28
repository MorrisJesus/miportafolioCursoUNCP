import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="space-y-10 px-20 w-3/4 mx-auto">
				<h1 className="text-white text-2xl text-center uppercase font-bold">
					PROYECTOS
				</h1>
				<div className="bg-slate-800 p-10 rounded-2xl">
					<h2 className="text-white  text-start uppercase font-bold">
						Sistema Administrativo de Gestión para Clínica Dental "Estética
						Oral" Huancayo 2025
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
				<h1 className="text-white text-2xl text-center uppercase font-bold">
					Imágenes del Proyecto
				</h1>
				<div className="flex flex-col gap-10">
					<div className="w-[800] h-[400] relative mx-auto">
						<Image
							src="/1.png"
							alt="logo"
							fill
							className="object-contain rounded-sm"
						/>
					</div>
					<div className="w-[800] h-[400] relative mx-auto">
						<Image
							src="/2.png"
							alt="logo"
							fill
							className="object-contain rounded-sm"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
