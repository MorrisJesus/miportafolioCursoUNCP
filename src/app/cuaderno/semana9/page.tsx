import SubTituloTema from "@/components/SubTituloTema";
import TituloTema from "@/components/TituloTema";
import { temario } from "@/utils/temario";
import React from "react";

const page = () => {
	return (
		<div className="px-10 w-3/4 mx-auto text-white max-md:w-full ">
			<TituloTema>{temario[7].tema}</TituloTema>

			<div className="mx-auto">
				<SubTituloTema>¿Qué es el Backend?</SubTituloTema>
				<p className="text-white text-justify">
					<span className="font-bold text-amber-300">Backend</span> se refiere a
					la parte del desarrollo web que se encarga de la lógica de negocio,
					conexión a bases de datos, autenticación, procesamiento de datos y
					más. A diferencia del frontend, el backend no es visible para el
					usuario, pero es esencial para el funcionamiento de una aplicación.
				</p>
			</div>

			<div className="mx-auto">
				<SubTituloTema>¿Qué es Java Spring?</SubTituloTema>
				<p className="text-white text-justify">
					<span className="font-bold text-amber-300">Spring</span> es un
					framework de código abierto para el desarrollo de aplicaciones en
					Java. Facilita la creación de aplicaciones robustas, seguras y bien
					estructuradas, proporcionando características como inyección de
					dependencias, configuración mediante anotaciones, gestión de
					seguridad, y más.
				</p>
			</div>

			<div className="mx-auto">
				<SubTituloTema>Módulos Principales de Spring</SubTituloTema>
				<ul className="text-white list-disc list-inside">
					<li>
						<span className="text-amber-300 font-semibold">Spring Boot</span>:
						Facilita el arranque rápido de aplicaciones con una configuración
						mínima.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">Spring MVC</span>:
						Permite construir aplicaciones web siguiendo el patrón
						Modelo-Vista-Controlador.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">
							Spring Data JPA
						</span>
						: Facilita el acceso y gestión de datos con bases de datos
						relacionales.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">
							Spring Security
						</span>
						: Proporciona autenticación, autorización y protección de
						aplicaciones.
					</li>
				</ul>
			</div>

			<div className="text-white mx-auto">
				<h3 className="mt-4 font-semibold text-amber-300 text-2xl uppercase">
					Ejemplo Básico con Spring Boot
				</h3>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`@SpringBootApplication
public class DemoApplication {
  public static void main(String[] args) {
    SpringApplication.run(DemoApplication.class, args);
  }
}

@RestController
@RequestMapping("/api")
public class HelloController {
  @GetMapping("/hello")
  public String hello() {
    return "Hola desde Spring Boot";
  }
}`}
					</code>
				</pre>

				<h3 className="mt-6 font-semibold text-amber-300 text-2xl uppercase">
					¿Qué es Apache Tomcat?
				</h3>
				<p className="text-justify mb-2">
					<span className="text-amber-300 font-semibold">Apache Tomcat</span> es
					un servidor web y contenedor de servlets que ejecuta aplicaciones Java
					en el backend. Es ligero, confiable y ampliamente usado en
					aplicaciones corporativas para desplegar proyectos Java.
				</p>

				<SubTituloTema>Instalación de Apache Tomcat</SubTituloTema>
				<ul className="list-disc list-inside">
					<li>
						Descarga desde:{" "}
						<a
							href="https://tomcat.apache.org/"
							className="text-amber-300 hover:underline"
							target="_blank"
						>
							https://tomcat.apache.org/
						</a>
					</li>
					<li>
						Descomprime el archivo ZIP o TAR en un directorio de tu elección.
					</li>
					<li>
						Configura las variables de entorno JAVA_HOME apuntando al JDK
						instalado.
					</li>
					<li>
						Inicia Tomcat ejecutando <code>startup.bat</code> (Windows) o{" "}
						<code>startup.sh</code> (Linux/Mac).
					</li>
					<li>
						Accede a <code>http://localhost:8080</code> en tu navegador.
					</li>
				</ul>
			</div>

			<SubTituloTema>Reflexión</SubTituloTema>
			<p className="mb-5">
				{temario[7].reflexion}
			</p>

			<SubTituloTema>Bibliografía</SubTituloTema>
			<a
				href="https://spring.io/"
				className="mb-5 hover:underline hover:text-amber-300"
				target="_blank"
			>
				{temario[7].bibliografia}
			</a>

			<SubTituloTema>Creacion de un proyecto de práctica</SubTituloTema>
			<a
				href="https://start.spring.io/"
				className="mb-5 hover:underline hover:text-amber-300"
				target="_blank"
			>
				Crea tu primer proyecto con Spring Boot en https://start.spring.io/
			</a>

			
		</div>
	);
};

export default page;
