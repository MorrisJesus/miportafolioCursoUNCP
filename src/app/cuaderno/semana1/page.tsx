import SubTituloTema from "@/components/SubTituloTema";
import Titulo from "@/components/Titulo";
import TituloTema from "@/components/TituloTema";
import { temario } from "@/utils/temario";
import React from "react";

const page = () => {
	return (
		<>
			<div className="px-10 w-3/4 mx-auto max-md:w-full">
				<TituloTema>{temario[0].tema}</TituloTema>

				<div className="mx-auto">
					<SubTituloTema>Definición</SubTituloTema>
					<p className="text-white text-justify">
						<span className="text-amber-300 font-bold">Emmet</span> es una
						herramienta que permite escribir código HTML y CSS de forma mucho
						más rápida utilizando abreviaciones que luego se expanden
						automáticamente. Está integrada en la mayoría de editores modernos
						como VSCode, Sublime Text, Atom, entre otros.
					</p>
				</div>

				<div className="mx-auto">
					<SubTituloTema>Conceptos Básicos</SubTituloTema>
					<ul className="text-white list-disc list-inside">
						<li>
							<span className="text-amber-300 font-semibold">Etiqueta:</span>{" "}
							<code>div</code> &rarr; <code>&lt;div&gt;&lt;/div&gt;</code>
						</li>
						<li>
							<span className="text-amber-300 font-semibold">Clase:</span>{" "}
							<code>.clase</code> &rarr;{" "}
							<code>&lt;div class="clase"&gt;&lt;/div&gt;</code>
						</li>
						<li>
							<span className="text-amber-300 font-semibold">ID:</span>{" "}
							<code>#id</code> &rarr;{" "}
							<code>&lt;div id="id"&gt;&lt;/div&gt;</code>
						</li>
						<li>
							<span className="text-amber-300 font-semibold">Anidación:</span>{" "}
							<code>{"ul>li*3"}</code> &rarr; 3 <code>&lt;li&gt;</code> dentro
							de <code>&lt;ul&gt;</code>
						</li>
						<li>
							<span className="text-amber-300 font-semibold">
								Multiplicación:
							</span>{" "}
							<code>div*4</code> &rarr; 4 <code>&lt;div&gt;</code>
						</li>
						<li>
							<span className="text-amber-300 font-semibold">Contenido:</span>{" "}
							<code>p{"Hola Mundo"}</code> &rarr;{" "}
							<code>&lt;p&gt;Hola Mundo&lt;/p&gt;</code>
						</li>
						<li>
							<span className="text-amber-300 font-semibold">Hermano:</span>{" "}
							<code>h1+h2</code> &rarr;{" "}
							<code>&lt;h1&gt;&lt;/h1&gt;&lt;h2&gt;&lt;/h2&gt;</code>
						</li>
						<li>
							<span className="text-amber-300 font-semibold">
								Clases múltiples:
							</span>{" "}
							<code>div.c1.c2</code> &rarr;{" "}
							<code>&lt;div class="c1 c2"&gt;&lt;/div&gt;</code>
						</li>
					</ul>
				</div>

				<div className="text-white mx-auto">
					<h3 className="mt-4 font-semibold text-amber-300 text-2xl uppercase">
						Ejemplo 1
					</h3>
					<p className="mb-2">
						Estructura básica de una página HTML con Emmet:
					</p>
					<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
						<code className="text-green-300">
							{`!
<!-- Emmet: ! -->
<!-- Expande a: -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  
</body>
</html>`}
						</code>
					</pre>

					<h3 className="mt-6 font-semibold text-amber-300 text-2xl uppercase">
						Ejemplo 2
					</h3>
					<p className="mb-2">Lista con elementos:</p>
					<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
						<code className="text-green-300">
							{`ul>li.item$*5
<!-- Expande a: -->
<ul>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
  <li class="item4"></li>
  <li class="item5"></li>
</ul>`}
						</code>
					</pre>

					<h3 className="mt-6 font-semibold text-amber-300 text-2xl uppercase">
						Ejemplo 3
					</h3>
					<p className="mb-2">Formulario básico:</p>
					<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
						<code className="text-green-300">
							{`form>label+input[type=text]+button{Enviar}
<!-- Expande a: -->
<form>
  <label></label>
  <input type="text" />
  <button>Enviar</button>
</form>`}
						</code>
					</pre>
				</div>

				<div className="text-white mx-auto">
					<h3 className="mt-6 font-semibold text-amber-300 text-2xl uppercase">
						Ejemplo 1 - Ejercicio en Clase
					</h3>
					<p className="mb-2">Abreviación de Emmet:</p>
					<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto mb-4">
						<code className="text-green-300">
							{"nav.nav>ul>li*4>a[href=page$@-.html]{Link$@-}"}
						</code>
					</pre>

					<p className="mb-2">Resultado:</p>
					<nav className="nav mb-6">
						<ul className="list-disc list-inside">
							<li>
								<a href="page4.html" className="text-blue-400 underline">
									Link4
								</a>
							</li>
							<li>
								<a href="page3.html" className="text-blue-400 underline">
									Link3
								</a>
							</li>
							<li>
								<a href="page2.html" className="text-blue-400 underline">
									Link2
								</a>
							</li>
							<li>
								<a href="page1.html" className="text-blue-400 underline">
									Link1
								</a>
							</li>
						</ul>
					</nav>

					<h3 className="mt-6 font-semibold text-amber-300 text-2xl uppercase">
						Ejemplo 2 - Ejercicio en Clase
					</h3>
					<p className="mb-2">Abreviación de Emmet:</p>
					<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto mb-4">
						<code className="text-green-300">
							{
								"table.table>thead>tr>th[scope=col]{#}+th[scope=col]{First}+th[scope=col]{Second}+th[scope=col]{Tree}^^(tbody>(tr>th[scope=row]{$}+td{Mark}+td{Otto}+td{Jhonson})*3)"
							}
						</code>
					</pre>

					<p className="mb-2">Resultado:</p>
					<table className="table border-collapse border border-white w-full text-left mb-6">
						<thead>
							<tr>
								<th scope="col" className="border border-white p-2">
									#
								</th>
								<th scope="col" className="border border-white p-2">
									First
								</th>
								<th scope="col" className="border border-white p-2">
									Second
								</th>
								<th scope="col" className="border border-white p-2">
									Tree
								</th>
							</tr>
						</thead>
						<tbody>
							{[1, 2, 3].map((i) => (
								<tr key={i}>
									<th scope="row" className="border border-white p-2">
										{i}
									</th>
									<td className="border border-white p-2">Mark</td>
									<td className="border border-white p-2">Otto</td>
									<td className="border border-white p-2">Jhonson</td>
								</tr>
							))}
						</tbody>
					</table>

					<SubTituloTema>Reflexión</SubTituloTema>
					<p className="mb-5">{temario[0].reflexion}</p>
					<SubTituloTema>Bibliografía</SubTituloTema>
					<a
						href={temario[0].bibliografia}
						className="mb-5 hover:underline hover:text-amber-300"
					>
						{temario[0].bibliografia}
					</a>
				</div>
			</div>
		</>
	);
};

export default page;
