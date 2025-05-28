import SubTituloTema from "@/components/SubTituloTema";
import TituloTema from "@/components/TituloTema";
import { temario } from "@/utils/temario";
import React from "react";

const page = () => {
	return (
		<div className="px-10 w-3/4 mx-auto text-white">
			<TituloTema>{temario[4].tema}</TituloTema>

			<div className="mx-auto">
				<SubTituloTema>Definición</SubTituloTema>
				<p className="text-white text-justify">
					<span className="font-bold text-amber-300">JavaScript</span> es un
					lenguaje de programación interpretado, orientado a objetos, que se
					ejecuta en el navegador del cliente. Es uno de los pilares del
					desarrollo web junto a HTML y CSS. Permite crear páginas web
					dinámicas, responder a eventos del usuario, modificar el DOM,
					comunicarse con servidores y más.
				</p>
			</div>

			<div className="mx-auto">
				<SubTituloTema>Conceptos Básicos</SubTituloTema>
				<ul className="text-white list-disc list-inside">
					<li>
						<span className="text-amber-300 font-semibold">Variables</span>: Se
						pueden declarar con <code className="text-green-300">let</code>,{" "}
						<code className="text-green-300">const</code> o{" "}
						<code className="text-green-300">var</code>.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">Funciones</span>:
						Bloques reutilizables de código, pueden ser declarativas o flecha (
						<code>=&gt;</code>).
					</li>
					<li>
						<span className="text-amber-300 font-semibold">Condicionales</span>:
						Usan <code className="text-green-300">if</code>,{" "}
						<code className="text-green-300">else</code>,{" "}
						<code className="text-green-300">switch</code>.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">Bucles</span>:{" "}
						<code className="text-green-300">for</code>,{" "}
						<code className="text-green-300">while</code>,{" "}
						<code className="text-green-300">forEach</code>.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">Objetos</span>:
						Estructuras clave-valor para agrupar datos relacionados.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">DOM</span>: Permite
						acceder y modificar los elementos HTML desde JS.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">Eventos</span>:
						Capturan acciones del usuario (
						<code className="text-green-300">onclick</code>,{" "}
						<code className="text-green-300">onchange</code>, etc.).
					</li>
					<li>
						<span className="text-amber-300 font-semibold">
							Funciones Flecha
						</span>
						: Sintaxis corta para funciones:{" "}
						<code className="text-green-300">const saludar = () =&gt; {}</code>
					</li>
					<li>
						<span className="text-amber-300 font-semibold">JSON</span>:
						JavaScript Object Notation, formato para enviar/recibir datos
						estructurados.
					</li>
				</ul>
			</div>

			<div className="text-white mx-auto">
				<h3 className="mt-4 font-semibold text-amber-300 text-2xl uppercase">
					Ejemplo 1
				</h3>
				<p className="mb-2">Declaración de variables y función básica:</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`const nombre = "Ana";
let edad = 25;

function saludar(persona) {
  return "Hola, " + persona + "!";
}

console.log(saludar(nombre));`}
					</code>
				</pre>

				<h3 className="mt-6 font-semibold text-amber-300 text-2xl uppercase">
					Ejemplo 2
				</h3>
				<p className="mb-2">Acceso y modificación del DOM:</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`// HTML:
// <p id="mensaje"></p>
// <button onclick="mostrarSaludo()">Saludar</button>

function mostrarSaludo() {
  document.getElementById("mensaje").innerText = "¡Hola desde JavaScript!";
}`}
					</code>
				</pre>

				<h3 className="mt-6 font-semibold text-amber-300 text-2xl uppercase">
					Ejemplo 3
				</h3>
				<p className="mb-2">Uso de objetos y arrays:</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`const persona = {
  nombre: "Carlos",
  edad: 30,
  saludar: function () {
    return "Hola, soy " + this.nombre;
  }
};

const frutas = ["manzana", "pera", "naranja"];
console.log(frutas[1]); // "pera"
console.log(persona.saludar());`}
					</code>
				</pre>

				<h3 className="mt-6 font-semibold text-amber-300 text-2xl uppercase">
					Ejemplo 4
				</h3>
				<p className="mb-2">Manejo de eventos en botones:</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`document.querySelector("#btn").addEventListener("click", () => {
  alert("Botón presionado");
});`}
					</code>
				</pre>

				<h3 className="mt-6 font-semibold text-amber-300 text-2xl uppercase">
					Ejemplo 5
				</h3>
				<p className="mb-2">Petición Fetch a una API:</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));`}
					</code>
				</pre>
			</div>

			<SubTituloTema>Reflexión</SubTituloTema>
			<p className="mb-5">{temario[4].reflexion}</p>
			<SubTituloTema>Bibliografía</SubTituloTema>
					<a
						href={temario[4].bibliografia}
						className="mb-5 hover:underline hover:text-amber-300"
					>
						{temario[4].bibliografia}
					</a>
		</div>
	);
};

export default page;
