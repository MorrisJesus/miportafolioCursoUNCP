import SubTituloTema from "@/components/SubTituloTema";
import TituloTema from "@/components/TituloTema";
import { temario } from "@/utils/temario";
import React from "react";

const page = () => {
	return (
		<div className="px-10 w-3/4 mx-auto text-white max-md:w-full">
			<TituloTema>{temario[13].tema}</TituloTema>

			{/* Introducción a sistemas inteligentes */}
			<SubTituloTema>¿Qué son los sistemas inteligentes?</SubTituloTema>
			<p className="text-white text-justify">
				Los sistemas inteligentes son aplicaciones que incorporan capacidades de razonamiento, aprendizaje o reconocimiento automático. Su objetivo es simular algún aspecto de la inteligencia humana, como tomar decisiones, clasificar información o responder en tiempo real según datos contextuales.
			</p>

			{/* Python para IA */}
			<SubTituloTema>Python para Inteligencia Artificial</SubTituloTema>
			<p className="text-white text-justify">
				Python ofrece un ecosistema rico en bibliotecas para el desarrollo de IA, como <code>scikit-learn</code> para aprendizaje automático clásico, <code>keras</code> y <code>tensorflow</code> para deep learning, y <code>deepface</code> para reconocimiento facial. Estas herramientas permiten crear modelos entrenables que resuelven tareas específicas.
			</p>

			{/* Integración con Flask */}
			<SubTituloTema>Integración con Flask</SubTituloTema>
			<p className="text-white text-justify">
				Flask actúa como interfaz web ligera para exponer modelos inteligentes mediante endpoints. Desde el frontend se pueden enviar datos al backend, procesarlos con modelos en Python y devolver una respuesta útil para el usuario en tiempo real.
			</p>

			<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto mt-2">
				<code className="text-green-300">
{`from flask import Flask, request
from sklearn.linear_model import LogisticRegression
import numpy as np

app = Flask(__name__)
modelo = LogisticRegression().fit([[0], [1]], [0, 1])  # Ejemplo básico

@app.route('/api/prediccion', methods=['POST'])
def predecir():
    data = request.json
    pred = modelo.predict(np.array(data['entrada']).reshape(-1, 1))
    return {"resultado": int(pred[0])}

if __name__ == '__main__':
    app.run(debug=True)`}
				</code>
			</pre>

			{/* Reconocimiento facial con Deepface */}
			<SubTituloTema>Reconocimiento facial con DeepFace</SubTituloTema>
			<p className="text-white text-justify">
				DeepFace es una biblioteca de alto nivel que permite analizar expresiones faciales, identificar personas y estimar emociones con pocas líneas de código. Puede integrarse con Flask para procesar imágenes desde el frontend:
			</p>

			<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto mt-2">
				<code className="text-green-300">
{`from deepface import DeepFace

@app.route('/api/emocion', methods=['POST'])
def detectar_emocion():
    archivo = request.files['imagen']
    resultado = DeepFace.analyze(img_path=archivo, actions=['emotion'])
    return {"emocion": resultado[0]['dominant_emotion']}`}
				</code>
			</pre>

			{/* Recomendaciones prácticas */}
			<SubTituloTema>Buenas prácticas</SubTituloTema>
			<ul className="list-disc list-inside text-white mt-2">
				<li>Separar el modelo de IA en módulos propios.</li>
				<li>Controlar errores y validar los datos del usuario.</li>
				<li>Evitar exponer modelos muy pesados directamente desde el backend.</li>
				<li>Usar versiones optimizadas del modelo si es para producción.</li>
			</ul>

			{/* Reflexión, Bibliografía y Libro */}
			<SubTituloTema>Reflexión</SubTituloTema>
			<p className="mb-5">{temario[13].reflexion}</p>

			<SubTituloTema>Bibliografía</SubTituloTema>
			<a
				href={temario[13].bibliografia}
				className="mb-5 hover:underline hover:text-amber-300"
				target="_blank"
			>
				{temario[13].bibliografia}
			</a>

			<SubTituloTema>Libro Recomendado</SubTituloTema>
			<a
				href={temario[13].url_libro}
				className="mb-5 hover:underline hover:text-amber-300"
				target="_blank"
			>
				{temario[13].libro_recomendado}
			</a>
		</div>
	);
};

export default page;
