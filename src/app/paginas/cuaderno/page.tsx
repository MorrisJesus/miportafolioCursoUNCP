import { temario } from "@/utils/temario";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<h1 className="text-white text-2xl text-center uppercase font-bold mb-5">
				Mi Cuaderno
			</h1>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-12 p-4 max-md:grid-cols-1">
				{temario.map((item) => (
					<div key={item.semana} className="text-center bg-slate-800 p-5 rounded-2xl">
						<a href={`/cuaderno/semana${item.semana}`} target="_blank">
							<div className="w-[300px] h-[200px] relative mx-auto transform transition-transform duration-300 hover:scale-110">
								{/* Texto encima de la imagen */}
								<div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 rounded">
									<span className="text-white text-xl font-bold uppercase">
										Semana {item.semana}
									</span>
								</div>
								{/* Imagen */}
								<Image
									src="/libro.jpg"
									alt={`Semana ${item.semana}`}
									fill
									className="object-cover rounded shadow-md cursor-pointer"
								/>
							</div>
						</a>
						{/* Texto debajo */}
						<p className="mt-2 font-semibold text-white uppercase">
							{item.tema}
						</p>
            <h3 className="mt-2 font-semibold text-white text-left uppercase">Reflexión</h3>
						<p className="mt-2 font-semibold text-white text-justify">
							{item.reflexion}
						</p>
            <h3 className="mt-5 font-semibold text-white text-left uppercase">Bibliografia</h3>
						<div className="mt-2">
							<a
								href={item.bibliografia}
								className="hover:underline font-semibold text-amber-300 text-justify"
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
