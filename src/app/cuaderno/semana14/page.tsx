import SubTituloTema from "@/components/SubTituloTema";
import TituloTema from "@/components/TituloTema";
import { temario } from "@/utils/temario";
import React from "react";

const page = () => {
	return (
		<div className="px-10 w-3/4 mx-auto text-white max-md:w-full">
			<TituloTema>{temario[12].tema}</TituloTema>

			{/* Introducción a Flask */}
			<SubTituloTema>¿Qué es Flask?</SubTituloTema>
			<p className="text-white text-justify">
				Flask es un microframework de Python para el desarrollo de aplicaciones web y APIs. Está diseñado para ser simple, extensible y flexible, lo que lo convierte en una excelente opción para proyectos backend que requieren control total sobre la arquitectura y componentes.
			</p>

			{/* Creación de la aplicación */}
			<SubTituloTema>Creación de una aplicación Flask</SubTituloTema>
			<p className="text-white text-justify">
				La base de toda app Flask es una instancia de <code>Flask</code>. A partir de ahí se definen rutas (endpoints), controladores y lógica de backend:
			</p>
			<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto mt-2">
				<code className="text-green-300">
{`from flask import Flask

app = Flask(__name__)

@app.route('/api/saludo')
def saludo():
    return {"mensaje": "Hola desde la API"}

if __name__ == '__main__':
    app.run(debug=True)`}
				</code>
			</pre>

			{/* Manejo de rutas y métodos HTTP */}
			<SubTituloTema>Rutas y Métodos HTTP</SubTituloTema>
			<p className="text-white text-justify">
				Flask permite manejar rutas con diferentes métodos HTTP, como <code>GET</code>, <code>POST</code>, <code>PUT</code> y <code>DELETE</code>, ideales para construir APIs RESTful:
			</p>
			<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto mt-2">
				<code className="text-green-300">
{`from flask import request

@app.route('/api/productos', methods=['POST'])
def crear_producto():
    data = request.json
    return {"producto": data}, 201`}
				</code>
			</pre>

			{/* Organización del proyecto */}
			<SubTituloTema>Estructura recomendada del proyecto</SubTituloTema>
			<p className="text-white text-justify">
				A medida que el proyecto crece, es recomendable dividir la lógica backend en módulos separados para mantener el código limpio y escalable:
			</p>
			<ul className="list-disc list-inside text-white mt-2">
				<li><span className="text-amber-300 font-bold">app/</span>: contiene el núcleo de la aplicación.</li>
				<li><span className="text-amber-300 font-bold">routes/</span>: definición de endpoints.</li>
				<li><span className="text-amber-300 font-bold">controllers/</span>: lógica de negocio.</li>
				<li><span className="text-amber-300 font-bold">models/</span>: definición de clases y ORM si se usa SQLAlchemy.</li>
			</ul>

			{/* Uso de JSON y respuesta estructurada */}
			<SubTituloTema>Respuestas JSON en Flask</SubTituloTema>
			<p className="text-white text-justify">
				Flask facilita el retorno de respuestas en formato JSON, que es el estándar en APIs REST. No se necesita serialización manual si se retorna un diccionario:
			</p>
			<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto mt-2">
				<code className="text-green-300">
{`@app.route('/api/status')
def status():
    return {"status": "ok", "version": "1.0.0"}, 200`}
				</code>
			</pre>

			{/* Manejo de errores */}
			<SubTituloTema>Manejo básico de errores</SubTituloTema>
			<p className="text-white text-justify">
				Para una API backend robusta, es importante manejar errores como 404 o 500, y devolver mensajes significativos:
			</p>
			<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto mt-2">
				<code className="text-green-300">
{`@app.errorhandler(404)
def not_found(error):
    return {"error": "Recurso no encontrado"}, 404`}
				</code>
			</pre>

			{/* Reflexión, Bibliografía y Libro */}
			<SubTituloTema>Reflexión</SubTituloTema>
			<p className="mb-5">{temario[12].reflexion}</p>

			<SubTituloTema>Bibliografía</SubTituloTema>
			<a
				href={temario[12].bibliografia}
				className="mb-5 hover:underline hover:text-amber-300"
				target="_blank"
			>
				{temario[12].bibliografia}
			</a>

			<SubTituloTema>Libro Recomendado</SubTituloTema>
			<a
				href={temario[12].url_libro}
				className="mb-5 hover:underline hover:text-amber-300"
				target="_blank"
			>
				{temario[12].libro_recomendado}
			</a>
		</div>
	);
};

export default page;
