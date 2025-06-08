import { temario } from "@/utils/temario";
import { BookOpen, Link as LinkIcon } from "lucide-react";

export default function Home() {
	return (
		<div className="min-h-screen ">
			<h1 className="text-white text-2xl text-center uppercase font-bold mb-5">
				Bibliografía por Semana
			</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
				{temario.map((item) => (
					<div
						key={item.semana}
						className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 hover:border-amber-400 transition-all duration-300 hover:scale-[1.02]"
					>
						<div>
							<h3 className="text-white font-bold text-lg uppercase mb-1">
								Semana {item.semana}
							</h3>
							<p className="text-amber-300 font-semibold text-xl uppercase mb-4">
								{item.tema}
							</p>

							

							<div className="mb-2 flex items-center gap-2">
								<p className="text-white text-sm">URL:</p>
								<LinkIcon className="text-amber-400 w-4 h-4" />
								<a
									href={item.bibliografia}
									className="text-white hover:underline text-sm"
									target="_blank"
									rel="noopener noreferrer"
								>
									Referencia oficial
								</a>
							</div>

							<div className="flex items-center gap-2">
								<p className="text-white text-sm">Libro:</p>
								<BookOpen className="text-amber-400 w-4 h-4" />
								<a
									href={item.url_libro}
									className="text-white hover:underline text-sm"
									target="_blank"
									rel="noopener noreferrer"
								>
									{item.libro_recomendado}
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
