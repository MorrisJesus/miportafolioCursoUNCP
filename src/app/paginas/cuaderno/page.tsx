import { temario } from "@/utils/temario";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<h1 className="text-white text-2xl text-center uppercase font-bold mb-5">
				Mi Cuaderno
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-6">
				{temario.map((item) => (
					<div
						key={item.semana}
						className="bg-slate-800 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01] border border-slate-700 hover:border-amber-400"
					>
						<a
							href={`/cuaderno/semana${item.semana}`}
							target="_blank"
							rel="noopener noreferrer"
							className="block relative h-[200px] w-full"
						>
							<div className="absolute inset-0 z-10 bg-black/40 flex items-center justify-center">
								<span className="text-white text-xl font-bold uppercase">
									Semana {item.semana}
								</span>
							</div>
							<Image
								src="/libro.jpg"
								alt={`Semana ${item.semana}`}
								fill
								className="object-cover rounded-t-2xl"
							/>
						</a>

						<div className="p-5 flex flex-col gap-3">
							<p className="text-amber-300 text-lg font-bold uppercase text-center">
								{item.tema}
							</p>

							<div>
								<h3 className="text-white text-sm font-bold uppercase mb-1">
									Reflexión
								</h3>
								<p className="text-white text-sm text-justify leading-relaxed">
									{item.reflexion}
								</p>
							</div>

							<div>
								<h3 className="text-white text-sm font-bold uppercase mt-3 mb-1">
									Bibliografía
								</h3>
								<a
									href={item.bibliografia}
									target="_blank"
									className="text-amber-300 hover:underline text-sm break-all"
									rel="noopener noreferrer"
								>
									{item.bibliografia}
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
