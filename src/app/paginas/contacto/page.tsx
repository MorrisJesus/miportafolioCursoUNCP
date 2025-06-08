"use client";
import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

export default function Home() {
	const [formData, setFormData] = useState({
		nombre: "",
		correo: "",
		mensaje: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		toast.success("Mensaje enviado correctamente");
		setFormData({ nombre: "", correo: "", mensaje: "" });
	};

	return (
		<div className="  px-4 flex flex-col items-center justify-center">
			<h1 className="text-white text-2xl text-center uppercase font-bold mb-5">
				Contacto
			</h1>

			<div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl justify-center p-4">
				{/* Formulario */}
				<div className="flex-1  p-8  max-w-2xl bg-slate-800  rounded-2xl shadow-lg border border-slate-700 hover:border-amber-400 transition-all duration-300 hover:scale-[1.02]">
					<h2 className="text-white text-2xl md:text-3xl uppercase font-bold mb-8 text-center">
						¡También puedes escribirme!
					</h2>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label className="block text-white font-semibold mb-2">Nombre</label>
							<input
								type="text"
								name="nombre"
								required
								value={formData.nombre}
								onChange={handleChange}
								className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
							/>
						</div>

						<div className="mb-4">
							<label className="block text-white font-semibold mb-2">Correo</label>
							<input
								type="email"
								name="correo"
								required
								value={formData.correo}
								onChange={handleChange}
								className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
							/>
						</div>

						<div className="mb-6">
							<label className="block text-white font-semibold mb-2">Mensaje</label>
							<textarea
								name="mensaje"
								required
								rows={4}
								value={formData.mensaje}
								onChange={handleChange}
								className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
							/>
						</div>

						<button
							type="submit"
							className="bg-amber-400 text-black font-bold uppercase px-6 py-2 rounded-lg hover:bg-amber-300 transition-colors w-full"
						>
							Enviar Mensaje
						</button>
					</form>
				</div>

				{/* Redes sociales */}
				<div className="flex lg:flex-col gap-8 place-items-center items-center justify-center">
					{[
						{
							name: "GitHub",
							url: "https://github.com/MorrisJesus",
							img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
						},
						{
							name: "WhatsApp",
							url: "https://wa.me/929989292?text=Hola%2C%20quiero%20más%20información",
							img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
						},
						{
							name: "LinkedIn",
							url: "https://www.linkedin.com/in/morris-jesus-atencio-espiritu-0b9b8022b/",
							img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
						},
					].map((item) => (
						<a
							key={item.name}
							href={item.url}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white text-black font-bold uppercase rounded-2xl p-4 shadow-md hover:shadow-amber-400/30 hover:bg-amber-100 transition-all flex flex-col items-center w-40 max-md:w-20"
						>
							<div className="relative w-20 h-20 mb-3 max-md:w-10 max-md:h-10">
								<Image
									src={item.img}
									alt={`${item.name} logo`}
									fill
									className="object-contain rounded-md"
								/>
							</div>
							<span className="text-sm max-md:text-xs">{item.name}</span>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
