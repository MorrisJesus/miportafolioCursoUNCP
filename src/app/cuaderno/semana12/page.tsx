import SubTituloTema from "@/components/SubTituloTema";
import TituloTema from "@/components/TituloTema";
import { temario } from "@/utils/temario";
import React from "react";

const page = () => {
	return (
		<div className="px-10 w-3/4 mx-auto text-white max-md:w-full">
			<TituloTema>{temario[10].tema}</TituloTema>

			<div className="mx-auto">
				<SubTituloTema>¿Qué es Laravel?</SubTituloTema>
				<p className="text-white text-justify">
					<span className="font-bold text-amber-300">Laravel</span> es un
					framework de desarrollo web de código abierto para PHP, diseñado para
					facilitar tareas comunes como el enrutamiento, la autenticación, el
					manejo de sesiones y la interacción con bases de datos. Fue creado por
					Taylor Otwell con el objetivo de hacer el desarrollo web más sencillo
					y elegante. Laravel sigue el patrón arquitectónico{" "}
					<span className="font-bold text-amber-300">
						MVC (Modelo-Vista-Controlador)
					</span>
					, lo que permite una clara separación entre la lógica de negocio, la
					interfaz de usuario y el control del flujo de datos.
				</p>
				<p className="text-white text-justify mt-2">
					Además de sus funcionalidades listas para usar, Laravel promueve
					buenas prácticas como el uso de controladores RESTful, inyección de
					dependencias, pruebas automatizadas y estructuras modulares. Es
					ampliamente utilizado en aplicaciones de todo tipo, desde sitios web
					simples hasta plataformas empresariales complejas.
				</p>
			</div>

			<div className="mx-auto">
				<SubTituloTema>Características Principales</SubTituloTema>
				<ul className="list-disc list-inside text-white">
					<li>
						<span className="font-bold text-amber-300">
							Routing sencillo y expresivo:
						</span>{" "}
						Define rutas y sus controladores asociados de manera clara usando el
						archivo <code>web.php</code>.
					</li>
					<li>
						<span className="font-bold text-amber-300">Eloquent ORM:</span> Es
						el sistema de mapeo objeto-relacional de Laravel que permite
						trabajar con bases de datos usando objetos PHP en lugar de
						sentencias SQL.
					</li>
					<li>
						<span className="font-bold text-amber-300">
							Migraciones y Seeders:
						</span>{" "}
						Permiten versionar la estructura de la base de datos y poblarla con
						datos de prueba.
					</li>
					<li>
						<span className="font-bold text-amber-300">Blade:</span> Motor de
						plantillas que permite crear vistas limpias con herencia de layouts
						y control de flujo como <code>@if</code>, <code>@foreach</code>,
						etc.
					</li>
					<li>
						<span className="font-bold text-amber-300">
							Sistema de autenticación:
						</span>{" "}
						Laravel facilita la implementación de login, registro, recuperación
						de contraseña y manejo de sesiones con solo unos comandos.
					</li>
					<li>
						<span className="font-bold text-amber-300">CLI Artisan:</span> Una
						poderosa línea de comandos que permite generar código, ejecutar
						migraciones, pruebas y más.
					</li>
					<li>
						<span className="font-bold text-amber-300">Middleware:</span>{" "}
						Filtros que se ejecutan antes o después de las rutas para verificar
						condiciones como la autenticación del usuario.
					</li>
				</ul>
			</div>

			<div className="mx-auto">
				<SubTituloTema>Ejemplo de Ruta y Controlador</SubTituloTema>
				<p className="text-white text-justify mb-2">
					En Laravel, las rutas definen los endpoints de la aplicación y suelen
					estar relacionadas con controladores que procesan las peticiones. A
					continuación se muestra un ejemplo básico donde se define una ruta que
					invoca el método <code>index</code> de un controlador:
				</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`// routes/web.php
Route::get('/bienvenido', [HomeController::class, 'index']);

// app/Http/Controllers/HomeController.php
public function index() {
    return view('bienvenido'); // Carga la vista resources/views/bienvenido.blade.php
}`}
					</code>
				</pre>
			</div>

			<div className="mx-auto">
				<SubTituloTema>Autenticación con Laravel</SubTituloTema>
				<p className="text-white text-justify">
					Laravel proporciona múltiples formas de implementar autenticación. En
					versiones modernas (8 en adelante), se recomienda usar{" "}
					<span className="font-bold text-amber-300">Laravel Breeze</span> para
					una autenticación simple basada en Blade,{" "}
					<span className="font-bold text-amber-300">Jetstream</span> para una
					solución más avanzada con Livewire o Inertia.js, o{" "}
					<span className="font-bold text-amber-300">Fortify</span> para
					configuraciones personalizadas sin front-end.
				</p>
				<p className="text-white text-justify mt-2">
					Estas herramientas permiten generar funcionalidades como login,
					registro, verificación de email, recuperación de contraseña y manejo
					de sesiones de forma rápida y segura. Laravel protege las rutas usando
					middleware como <code>auth</code> o <code>guest</code>.
				</p>
				<p className="text-white text-justify mt-2">
					Además, Laravel permite extender fácilmente el sistema de
					autenticación para incluir roles, permisos o autenticación con APIs
					mediante tokens con Laravel Sanctum o Passport.
				</p>
			</div>

			<SubTituloTema>Reflexión</SubTituloTema>
			<p className="mb-5">{temario[10].reflexion}</p>

			<SubTituloTema>Bibliografía</SubTituloTema>
			<a
				href={temario[10].bibliografia}
				className="mb-5 hover:underline hover:text-amber-300"
				target="_blank"
			>
				{temario[10].bibliografia}
			</a>

			<SubTituloTema>Libro Recomendado</SubTituloTema>
			<a
				href={temario[10].url_libro}
				className="mb-5 hover:underline hover:text-amber-300"
				target="_blank"
			>
				{temario[10].libro_recomendado}
			</a>
		</div>
	);
};

export default page;
