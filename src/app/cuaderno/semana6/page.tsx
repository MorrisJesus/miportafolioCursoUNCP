import SubTituloTema from "@/components/SubTituloTema";
import TituloTema from "@/components/TituloTema";
import { temario } from "@/utils/temario";
import React from "react";

const page = () => {
	return (
		<div className="px-10 w-3/4 mx-auto text-white max-md:w-full">
			<TituloTema>{temario[5].tema}</TituloTema>

			<div className="mx-auto">
				<SubTituloTema>Definición</SubTituloTema>
				<p className="text-white text-justify">
					<span className="font-bold text-amber-300">React</span> es una
					biblioteca de JavaScript para construir interfaces de usuario
					interactivas. Fue desarrollada por Facebook y permite crear
					componentes reutilizables para construir aplicaciones web de manera
					eficiente y declarativa. Utiliza un DOM virtual para optimizar el
					rendimiento.
				</p>
			</div>

			<div className="mx-auto">
				<SubTituloTema>Conceptos Básicos</SubTituloTema>
				<ul className="text-white list-disc list-inside">
					<li>
						<span className="text-amber-300 font-semibold">JSX</span>: Sintaxis
						similar a HTML que se usa dentro de JavaScript para describir la
						interfaz de usuario.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">Componentes</span>:
						Unidades reutilizables de UI. Pueden ser de función o clase.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">Props</span>:
						Propiedades que se pasan a los componentes para configurarlos.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">Estado (State)</span>
						: Datos locales de un componente que pueden cambiar con el tiempo.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">Hooks</span>:
						Funciones especiales como{" "}
						<code className="text-green-300">useState</code> y{" "}
						<code className="text-green-300">useEffect</code> para manejar
						estado y efectos.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">Eventos</span>:
						Manejadores de interacciones del usuario como{" "}
						<code className="text-green-300">onClick</code>.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">Virtual DOM</span>:
						Representación ligera del DOM que mejora el rendimiento.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">
							Single Page Application (SPA)
						</span>
						: Aplicaciones que no recargan la página completamente.
					</li>
				</ul>
			</div>

			<div className="text-white mx-auto">
				<h3 className="mt-4 font-semibold text-amber-300 text-2xl uppercase">
					Ejemplo 1
				</h3>
				<p className="mb-2">Componente funcional básico:</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`function Saludo() {
  return <h1>Hola, mundo desde React</h1>;
}`}
					</code>
				</pre>

				<h3 className="mt-6 font-semibold text-amber-300 text-2xl uppercase">
					Ejemplo 2
				</h3>
				<p className="mb-2">Uso de props:</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`function Saludo({ nombre }) {
  return <h1>Hola, {nombre}</h1>;
}

// Uso:
// <Saludo nombre="Carlos" />`}
					</code>
				</pre>

				<h3 className="mt-6 font-semibold text-amber-300 text-2xl uppercase">
					Ejemplo 3
				</h3>
				<p className="mb-2">Manejo de estado con useState:</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}`}
					</code>
				</pre>

				<h3 className="mt-6 font-semibold text-amber-300 text-2xl uppercase">
					Ejemplo 4
				</h3>
				<p className="mb-2">Efecto con useEffect:</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`import { useEffect } from "react";

function Timer() {
  useEffect(() => {
    console.log("Componente montado");
  }, []);

  return <p>Revisa la consola</p>;
}`}
					</code>
				</pre>

				<h3 className="mt-6 font-semibold text-amber-300 text-2xl uppercase">
					Ejemplo 5
				</h3>
				<p className="mb-2">Formulario controlado:</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`import { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");

  const manejarCambio = (e) => setNombre(e.target.value);

  return (
    <form>
      <input value={nombre} onChange={manejarCambio} />
      <p>Hola, {nombre}</p>
    </form>
  );
}`}
					</code>
				</pre>
			</div>

			<SubTituloTema>Reflexión</SubTituloTema>
			<p className="mb-5">{temario[5].reflexion}</p>
			<SubTituloTema>Bibliografía</SubTituloTema>
			<a
				href={temario[5].bibliografia}
				className="mb-5 hover:underline hover:text-amber-300"
			>
				{temario[5].bibliografia}
			</a>
		</div>
	);
};

export default page;
