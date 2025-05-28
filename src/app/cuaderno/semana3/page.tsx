import SubTituloTema from "@/components/SubTituloTema";
import TituloTema from "@/components/TituloTema";
import { temario } from "@/utils/temario";
import React from "react";

const page = () => {
	return (
		<div className="px-10 w-3/4 mx-auto text-white max-md:w-full">
			<TituloTema>{temario[2].tema}</TituloTema>
			<div className="mx-auto">
				<SubTituloTema>Definición</SubTituloTema>
				<p className="text-white text-justify">
					CSS (Cascading Style Sheets) es un lenguaje de hojas de estilo
					utilizado para describir la presentación de un documento HTML. Permite
					aplicar estilos como colores, fuentes, márgenes y posiciones a los
					elementos, separando la estructura del contenido de su apariencia.
				</p>
			</div>

			<div className="mx-auto">
				<SubTituloTema>Conceptos Básicos</SubTituloTema>
				<ul className="text-white list-disc list-inside">
					<li>
						<span className="text-amber-300 font-semibold">Selector</span>:
						Indica a qué elementos HTML se aplicará el estilo.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">Propiedad</span>:
						Característica que se desea modificar (color, font-size, etc.).
					</li>
					<li>
						<span className="text-amber-300 font-semibold">Valor</span>:
						Especifica cómo se aplicará la propiedad.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">Clase (.clase)</span>
						: Permite aplicar estilos a uno o varios elementos.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">ID (#id)</span>:
						Estilo único aplicado a un elemento específico.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">Inline CSS</span>:
						Estilo escrito directamente en una etiqueta HTML.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">CSS Interno</span>:
						Estilos definidos dentro de una etiqueta &lt;style&gt; en el head.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">CSS Externo</span>:
						Estilos escritos en archivos separados con extensión `.css`.
					</li>
				</ul>
			</div>

			<div className="text-white mx-auto">
				<h3 className="mt-4 font-semibold text-amber-300 text-2xl uppercase">
					Ejemplo 1
				</h3>
				<p className="mb-2">CSS Interno aplicado a un párrafo:</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`<html>
<head>
  <style>
    p {
      color: blue;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <p>Este texto es azul y tiene tamaño de 18px.</p>
</body>
</html>`}
					</code>
				</pre>

				<h3 className="mt-6 font-semibold text-amber-300 text-2xl uppercase">
					Ejemplo 2
				</h3>
				<p className="mb-2">Uso de clases e IDs con CSS externo:</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto mb-2">
					<code className="text-green-300">
						{`/* archivo estilos.css */
.titulo {
  color: crimson;
  text-align: center;
}

#mensaje {
  background-color: lightyellow;
  padding: 10px;
}`}
					</code>
				</pre>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`<!-- archivo HTML -->
<html>
<head>
  <link rel="stylesheet" href="estilos.css" />
</head>
<body>
  <h1 class="titulo">Bienvenido</h1>
  <div id="mensaje">Este es un mensaje importante.</div>
</body>
</html>`}
					</code>
				</pre>
			</div>

			<SubTituloTema>Reflexión</SubTituloTema>
			<p className="mb-5">{temario[2].reflexion}</p>
			<SubTituloTema>Bibliografía</SubTituloTema>
			<a
				href={temario[2].bibliografia}
				className="mb-5 hover:underline hover:text-amber-300"
			>
				{temario[2].bibliografia}
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
