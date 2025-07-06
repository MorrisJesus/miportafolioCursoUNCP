import SubTituloTema from "@/components/SubTituloTema";
import TituloTema from "@/components/TituloTema";
import { temario } from "@/utils/temario";
import React from "react";

const page = () => {
	return (
		<div className="px-10 w-3/4 mx-auto text-white max-md:w-full">
			<TituloTema>{temario[11].tema}</TituloTema>

			{/* Relaciones en Eloquent */}
			<SubTituloTema>Relaciones Avanzadas en Eloquent</SubTituloTema>
			<p className="text-white text-justify">
				Laravel Eloquent proporciona una forma sencilla de gestionar relaciones entre tablas de base de datos mediante métodos en los modelos. Las relaciones más comunes incluyen:
			</p>
			<ul className="list-disc list-inside text-white mt-2">
				<li><span className="font-bold text-amber-300">Uno a Muchos (hasMany):</span> Un usuario puede tener muchos posts.</li>
				<li><span className="font-bold text-amber-300">Muchos a Muchos (belongsToMany):</span> Un estudiante puede tener muchos cursos, y viceversa.</li>
				<li><span className="font-bold text-amber-300">Relaciones polimórficas:</span> Una imagen puede pertenecer a un producto o a un usuario.</li>
			</ul>
			<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto mt-2">
				<code className="text-green-300">
{`// Modelo Usuario
public function posts() {
    return $this->hasMany(Post::class);
}

// Modelo Post
public function user() {
    return $this->belongsTo(User::class);
}
`}
				</code>
			</pre>

			{/* Middleware personalizado */}
			<SubTituloTema>Creación de Middleware personalizado</SubTituloTema>
			<p className="text-white text-justify">
				Los middleware son clases que inspeccionan y filtran las solicitudes HTTP. Puedes crear uno para verificar si un usuario tiene un rol específico.
			</p>
			<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto mt-2">
				<code className="text-green-300">
{`// Crear middleware con Artisan
php artisan make:middleware VerificarRol

// En app/Http/Middleware/VerificarRol.php
public function handle($request, Closure $next, $rol)
{
	if (!auth()->check() || auth()->user()->rol !== $rol) {
		return redirect('/');
	}
	return $next($request);
}

// En Kernel.php
'rol' => \App\Http\Middleware\VerificarRol::class,

// En rutas
Route::get('/admin', function () {
	// ...
})->middleware('rol:admin');`}
				</code>
			</pre>

			{/* API REST */}
			<SubTituloTema>Creación de API RESTful con Laravel</SubTituloTema>
			<p className="text-white text-justify">
				Para desarrollar APIs, Laravel ofrece controladores tipo <code>apiResource</code>, manejo de respuestas JSON y autenticación mediante tokens.
			</p>
			<p className="text-white text-justify mt-2">
				Utilizamos archivos como <code>routes/api.php</code> y clases como <code>Http/Resources</code> para formatear las respuestas:
			</p>
			<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto mt-2">
				<code className="text-green-300">
{`// routes/api.php
Route::apiResource('posts', PostController::class);

// app/Http/Resources/PostResource.php
public function toArray($request)
{
	return [
		'id' => $this->id,
		'titulo' => $this->titulo,
		'autor' => $this->user->name,
	];
}
`}
				</code>
			</pre>

			{/* Form Request */}
			<SubTituloTema>Validación con Form Request</SubTituloTema>
			<p className="text-white text-justify">
				Laravel permite encapsular la lógica de validación en clases llamadas Form Request, mejorando la limpieza del controlador.
			</p>
			<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto mt-2">
				<code className="text-green-300">
{`// Crear una clase FormRequest
php artisan make:request StorePostRequest

// En StorePostRequest.php
public function rules()
{
	return [
		'titulo' => 'required|string|max:255',
		'contenido' => 'required',
	];
}

// En el controlador
public function store(StorePostRequest $request)
{
	Post::create($request->validated());
}`}
				</code>
			</pre>

			{/* Inyección de Dependencias y Servicios */}
			<SubTituloTema>Servicios e Inyección de Dependencias</SubTituloTema>
			<p className="text-white text-justify">
				Una buena práctica en Laravel es extraer lógica compleja a clases de servicio. Laravel se encarga de inyectarlas automáticamente en los controladores.
			</p>
			<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto mt-2">
				<code className="text-green-300">
{`// Servicio
namespace App\\Services;
class NotificacionService {
	public function enviar($mensaje) {
		// lógica de envío
	}
}

// Controlador
public function store(Request $request, NotificacionService $notificacion) {
	$notificacion->enviar("Post creado correctamente");
}`}
				</code>
			</pre>

			{/* Testing */}
			<SubTituloTema>Pruebas Automatizadas</SubTituloTema>
			<p className="text-white text-justify">
				Laravel incluye PHPUnit y helpers como <code>actingAs</code>, <code>get</code>, <code>post</code> y <code>assert</code> para escribir pruebas de endpoints y lógica de negocio.
			</p>
			<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto mt-2">
				<code className="text-green-300">
{`public function test_usuario_autenticado_puede_crear_post()
{
	$user = User::factory()->create();
	$response = $this->actingAs($user)->post('/posts', [
		'titulo' => 'Nuevo post',
		'contenido' => 'Contenido del post'
	]);

	$response->assertStatus(302);
	$this->assertDatabaseHas('posts', ['titulo' => 'Nuevo post']);
}`}
				</code>
			</pre>

			{/* Reflexión, Bibliografía y Libro */}
			<SubTituloTema>Reflexión</SubTituloTema>
			<p className="mb-5">{temario[11].reflexion}</p>

			<SubTituloTema>Bibliografía</SubTituloTema>
			<a
				href={temario[11].bibliografia}
				className="mb-5 hover:underline hover:text-amber-300"
				target="_blank"
			>
				{temario[11].bibliografia}
			</a>

			<SubTituloTema>Libro Recomendado</SubTituloTema>
			<a
				href={temario[11].url_libro}
				className="mb-5 hover:underline hover:text-amber-300"
				target="_blank"
			>
				{temario[11].libro_recomendado}
			</a>
		</div>
	);
};

export default page;
