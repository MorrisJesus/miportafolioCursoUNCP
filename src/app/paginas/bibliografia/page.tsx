import { temario } from "@/utils/temario";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<h1 className="text-white text-2xl text-center uppercase font-bold mb-5">
				Bibliografía
			</h1>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-12 p-4 max-md:grid-cols-1">
				{temario.map((item) => (
					<div
						key={item.semana}
						className="text-center bg-slate-800 p-5 rounded-2xl"
					>
						<h3 className="mt-2 font-semibold text-white text-left uppercase">
							Semana {item.semana}
						</h3>
						<p className="mt-2 font-semibold text-amber-300 text-2xl uppercase">
							{item.tema}
						</p>

						<div className="mt-2">
							<a
								href={item.bibliografia}
								className="hover:underline font-semibold text-white text-justify"
								target="_blank"
							>
								{item.bibliografia}
							</a>
						</div>
						
					</div>
				))}
			</div>
		</>
	);
}
