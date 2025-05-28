import SubTituloTema from "@/components/SubTituloTema";
import TituloTema from "@/components/TituloTema";
import { temario } from "@/utils/temario";
import React from "react";

const page = () => {
	return (
		<div className="px-10 w-3/4 mx-auto text-white max-md:w-full">
			<TituloTema>{temario[1].tema}</TituloTema>
			<div className=" mx-auto">
				<SubTituloTema>Definición</SubTituloTema>
				<p className="text-white text-justify">
					HTML (HyperText Markup Language) es el lenguaje estándar para crear
					páginas web. Utiliza una serie de "etiquetas" para estructurar el
					contenido, como encabezados, párrafos, listas, imágenes y enlaces.
					HTML es el esqueleto de toda página web.
				</p>
			</div>

			<div className="mx-auto">
				<SubTituloTema>Conceptos Básicos</SubTituloTema>
				<ul className="text-white list-disc list-inside">
					<li>
						<span className="text-amber-300 font-semibold">
							&lt;!DOCTYPE html&gt;
						</span>
						: Indica el tipo de documento.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">&lt;html&gt;</span>:
						Etiqueta raíz de un documento HTML.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">&lt;head&gt;</span>:
						Contiene metadatos, enlaces a estilos y scripts.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">&lt;body&gt;</span>:
						Contiene el contenido visible de la página.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">
							&lt;h1&gt; a &lt;h6&gt;
						</span>
						: Encabezados, del más importante al menos importante.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">&lt;p&gt;</span>:
						Párrafos de texto.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">&lt;a&gt;</span>:
						Enlaces.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">&lt;img&gt;</span>:
						Imágenes.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">&lt;div&gt;</span>:
						Contenedor genérico para agrupar contenido.
					</li>
				</ul>
			</div>

			<div className="text-white mx-auto">
				<h3 className="mt-4 font-semibold text-amber-300 text-2xl uppercase">
					Ejemplo 1
				</h3>
				<p className="mb-2">Estructura básica de una página HTML:</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`<!DOCTYPE html>
<html>
  <head>
    <title>Mi Primera Página</title>
  </head>
  <body>
    <h1>Hola Mundo</h1>
    <p>Este es mi primer sitio web con HTML.</p>
  </body>
</html>`}
					</code>
				</pre>

				<h3 className="mt-6 font-semibold text-amber-300 text-2xl uppercase">
					Ejemplo 2
				</h3>
				<p className="mb-2">Lista con enlace e imagen:</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`<ul>
  <li><a href="https://example.com">Ir a Example</a></li>
  <li><img src="logo.png" alt="Logo" width="100"/></li>
</ul>`}
					</code>
				</pre>
			</div>

			<SubTituloTema>Reflexión</SubTituloTema>
			<p className="mb-5">{temario[1].reflexion}</p>
			<SubTituloTema>Bibliografía</SubTituloTema>
			<a
				href={temario[1].bibliografia}
				className="mb-5 hover:underline hover:text-amber-300"
				target="_blank"
			>
				{temario[1].bibliografia}
			</a>
			<SubTituloTema>Ejercicios de práctica</SubTituloTema>
			<a
				href="https://github.com/MorrisJesus/PRACTICA-HTML-Y-CSS"
				className="mb-5 hover:underline hover:text-amber-300"
				target="_blank"
			>
				https://github.com/MorrisJesus/PRACTICA-HTML-Y-CSS
			</a>
		</div>
	);
};

export default page;
