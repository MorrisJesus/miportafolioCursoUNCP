import SubTituloTema from "@/components/SubTituloTema";
import TituloTema from "@/components/TituloTema";
import { temario } from "@/utils/temario";
import React from "react";

const page = () => {
	return (
		<div className="px-10 w-3/4 mx-auto text-white">
			<TituloTema>{temario[3].tema}</TituloTema>

			<div className="mx-auto">
				<SubTituloTema>Definición</SubTituloTema>
				<p className="text-white text-justify">
					<span className="font-bold text-amber-300">Tailwind CSS</span> y{" "}
					<span className="font-bold text-amber-300">Bootstrap</span> son
					frameworks CSS utilizados para facilitar el diseño de interfaces web.
					Ambos ofrecen utilidades predefinidas, pero con enfoques distintos:
					<br />
					<br />- <strong>Tailwind CSS</strong>: Framework de clases utilitarias
					que permite construir interfaces directamente en el HTML con clases
					como <code className="text-green-300">p-4</code>,{" "}
					<code className="text-green-300">text-center</code>, etc.
					<br />- <strong>Bootstrap</strong>: Framework basado en componentes
					predefinidos (botones, formularios, tarjetas) con clases ya diseñadas
					para una estructura más rápida.
				</p>
			</div>

			<div className="mx-auto">
				<SubTituloTema>Conceptos Básicos</SubTituloTema>
				<ul className="text-white list-disc list-inside">
					<li>
						<span className="text-amber-300 font-semibold">
							Tailwind: Clases utilitarias
						</span>{" "}
						- Se aplican directamente en los elementos para diseñar sin escribir
						CSS personalizado.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">
							Bootstrap: Componentes
						</span>{" "}
						- Usa estructuras ya listas como{" "}
						<code className="text-green-300">.btn</code>,{" "}
						<code className="text-green-300">.card</code>, etc.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">
							Tailwind: Configuración
						</span>{" "}
						- Personalizable mediante el archivo{" "}
						<code className="text-green-300">tailwind.config.js</code>.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">
							Bootstrap: Grid System
						</span>{" "}
						- Sistema de columnas para maquetar usando{" "}
						<code className="text-green-300">.row</code> y{" "}
						<code className="text-green-300">.col</code>.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">
							Tailwind: Mobile First
						</span>{" "}
						- Usa prefijos como <code className="text-green-300">md:</code>,{" "}
						<code className="text-green-300">lg:</code>.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">
							Bootstrap: Responsive
						</span>{" "}
						- También aplica clases responsivas como{" "}
						<code className="text-green-300">.d-md-block</code>.
					</li>
				</ul>
			</div>

			<div className="text-white mx-auto">
				<h3 className="mt-4 font-semibold text-amber-300 text-2xl uppercase">
					Ejemplo Tailwind
				</h3>
				<p className="mb-2">Botón estilizado con Tailwind CSS:</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click aquí
</button>`}
					</code>
				</pre>

				<h3 className="mt-6 font-semibold text-amber-300 text-2xl uppercase">
					Ejemplo Bootstrap
				</h3>
				<p className="mb-2">Botón con clase de Bootstrap:</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`<button class="btn btn-primary">
  Click aquí
</button>`}
					</code>
				</pre>

				<h3 className="mt-6 font-semibold text-amber-300 text-2xl uppercase">
					Comparación Visual
				</h3>
				<p className="mb-2">Diseño de tarjeta con ambos frameworks:</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto mb-4">
					<code className="text-green-300">
						{`<!-- Tailwind -->
<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="img.jpg" alt="Imagen" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Título</div>
    <p class="text-gray-700 text-base">Contenido de la tarjeta.</p>
  </div>
</div>`}
					</code>
				</pre>

				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`<!-- Bootstrap -->
<div class="card" style="width: 18rem;">
  <img src="img.jpg" class="card-img-top" alt="Imagen">
  <div class="card-body">
    <h5 class="card-title">Título</h5>
    <p class="card-text">Contenido de la tarjeta.</p>
  </div>
</div>`}
					</code>
				</pre>
			</div>

			<SubTituloTema>Reflexión</SubTituloTema>
			<p className="mb-5">{temario[3].reflexion}</p>
			<SubTituloTema>Bibliografía</SubTituloTema>
					<a
						href={temario[3].bibliografia}
						className="mb-5 hover:underline hover:text-amber-300"
					>
						{temario[3].bibliografia}
					</a>
		</div>
	);
};

export default page;
