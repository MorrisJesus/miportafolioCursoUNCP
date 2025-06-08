import { temario } from "@/utils/temario";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<h1 className="text-white text-2xl text-center uppercase font-bold mb-5">
				Reflexiones
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
				{temario.map((item) => (
					<div
						key={item.semana}
						className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 hover:border-amber-400 transition-all duration-300 hover:scale-[1.02]"
					>
						<h3 className="text-white text-lg font-bold uppercase mb-2 text-left">
							Semana {item.semana}
						</h3>

						<p className="text-amber-300 text-xl font-extrabold uppercase mb-3 text-center">
							{item.tema}
						</p>

						<p className="text-white text-sm text-justify leading-relaxed">
							{item.reflexion}
						</p>
					</div>
				))}
			</div>
		</>
	);
}
