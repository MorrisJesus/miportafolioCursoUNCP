import SubTituloTema from "@/components/SubTituloTema";
import TituloTema from "@/components/TituloTema";
import { temario } from "@/utils/temario";
import React from "react";

const page = () => {
	return (
		<div className="px-10 w-3/4 mx-auto text-white max-md:w-full">
			<TituloTema>{temario[6].tema}</TituloTema>

			<div className="mx-auto">
				<SubTituloTema>Definición</SubTituloTema>
				<p className="text-white text-justify">
					<span className="font-bold text-amber-300">Hooks</span> son funciones
					especiales en React que permiten usar estado, ciclos de vida y otras
					características de React en componentes funcionales. Fueron
					introducidos en la versión 16.8 de React para evitar depender de
					componentes de clase.
				</p>
			</div>

			<div className="mx-auto">
				<SubTituloTema>Hooks Más Comunes</SubTituloTema>
				<ul className="text-white list-disc list-inside">
					<li>
						<span className="text-amber-300 font-semibold">useState</span>:
						Maneja el estado local en componentes.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">useEffect</span>:
						Ejecuta efectos secundarios como peticiones, suscripciones o
						manipulación del DOM.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">useContext</span>:
						Consume datos del contexto global.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">useRef</span>: Crea
						una referencia mutable que persiste entre renderizados.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">useMemo</span>:
						Memoriza valores costosos de calcular.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">useCallback</span>:
						Memoriza funciones para evitar recrearlas en cada render.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">useReducer</span>:
						Alternativa a useState para estados más complejos.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">Custom Hooks</span>:
						Hooks personalizados para reutilizar lógica entre componentes.
					</li>
				</ul>
			</div>

			<div className="text-white mx-auto">
				<h3 className="mt-4 font-semibold text-amber-300 text-2xl uppercase">
					Ejemplo 1
				</h3>
				<p className="mb-2">
					Contador usando <code>useState</code>:
				</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  );
}`}
					</code>
				</pre>

				<h3 className="mt-6 font-semibold text-amber-300 text-2xl uppercase">
					Ejemplo 2
				</h3>
				<p className="mb-2">
					Efecto con <code>useEffect</code>:
				</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`import { useState, useEffect } from "react";

function Reloj() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // limpieza
  }, []);

  return <p>Hora actual: {hora}</p>;
}`}
					</code>
				</pre>

				<h3 className="mt-6 font-semibold text-amber-300 text-2xl uppercase">
					Ejemplo 3
				</h3>
				<p className="mb-2">
					Uso de <code>useRef</code> para enfocar un input:
				</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`import { useRef } from "react";

function EnfocarInput() {
  const inputRef = useRef(null);

  const enfocar = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={enfocar}>Enfocar</button>
    </div>
  );
}`}
					</code>
				</pre>

				<h3 className="mt-6 font-semibold text-amber-300 text-2xl uppercase">
					Ejemplo 4
				</h3>
				<p className="mb-2">Hook personalizado (Custom Hook):</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`import { useState, useEffect } from "react";

function useOnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return online;
}

// Uso del hook
function EstadoConexion() {
  const estaOnline = useOnlineStatus();
  return <p>{estaOnline ? "Estás conectado" : "Estás desconectado"}</p>;
}`}
					</code>
				</pre>
			</div>

			<SubTituloTema>Reflexión</SubTituloTema>
			<p className="mb-5">{temario[6].reflexion}</p>
			<SubTituloTema>Bibliografía</SubTituloTema>
			<a
				href={temario[6].bibliografia}
				className="mb-5 hover:underline hover:text-amber-300"
			>
				{temario[6].bibliografia}
			</a>
		</div>
	);
};

export default page;
