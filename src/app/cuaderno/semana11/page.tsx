import SubTituloTema from "@/components/SubTituloTema";
import TituloTema from "@/components/TituloTema";
import { temario } from "@/utils/temario";
import React from "react";

const page = () => {
	return (
		<div className="px-10 w-3/4 mx-auto text-white max-md:w-full">
			<TituloTema>{temario[9].tema}</TituloTema>
			<div className="mx-auto">
				<SubTituloTema>¿Qué es JSP?</SubTituloTema>
				<p className="text-white text-justify">
					<span className="font-bold text-amber-300">
						JSP (JavaServer Pages)
					</span>{" "}
					es una tecnología de Java que permite generar contenido HTML dinámico
					desde el servidor. Fue introducida por Sun Microsystems y forma parte
					del estándar Java EE (ahora Jakarta EE). Con JSP, los desarrolladores
					pueden insertar código Java directamente dentro de páginas HTML
					mediante el uso de etiquetas especiales como <code>&lt;% %&gt;</code>,
					lo que permite manipular datos y generar vistas en tiempo real según
					la lógica del negocio.
				</p>
				<p className="text-white text-justify mt-2">
					JSP trabaja sobre el contenedor de servlets, donde cada archivo JSP es
					compilado internamente a un servlet Java. Esto permite aprovechar la
					potencia del lenguaje Java para construir aplicaciones robustas,
					seguras y eficientes. Además, al trabajar del lado del servidor, JSP
					puede generar contenido personalizado para cada usuario antes de que
					la página se entregue al navegador.
				</p>
				<p className="text-white text-justify mt-2">
					Aunque tecnologías más modernas como Thymeleaf o motores JavaScript
					han reemplazado a JSP en muchos proyectos nuevos, sigue siendo
					ampliamente utilizado en sistemas legacy o aplicaciones empresariales
					con arquitectura tradicional.
				</p>
			</div>

			<div className="mx-auto">
				<SubTituloTema>¿Qué es Jakarta EE?</SubTituloTema>
				<p className="text-white text-justify">
					<span className="font-bold text-amber-300">Jakarta EE</span> es el
					conjunto de especificaciones y APIs estándar para construir
					aplicaciones empresariales en Java. Es la evolución de Java EE (Java
					Platform, Enterprise Edition), que fue transferido desde Oracle a la
					Eclipse Foundation y renombrado como Jakarta EE.
				</p>
				<p className="text-white text-justify mt-2">
					Jakarta EE proporciona herramientas y especificaciones para el
					desarrollo de aplicaciones robustas, escalables y seguras, incluyendo
					tecnologías como Servlets, JSP, JSF, JPA (persistencia), CDI
					(inyección de dependencias), JAX-RS (servicios REST), EJB (beans
					empresariales), y más.
				</p>
				<p className="text-white text-justify mt-2">
					El ecosistema Jakarta EE permite construir desde simples aplicaciones
					web hasta soluciones empresariales distribuidas. Está diseñado para
					funcionar en servidores de aplicaciones como Tomcat, WildFly, Payara o
					GlassFish.
				</p>
			</div>

			<div className="mx-auto">
				<SubTituloTema>Integración con Spring</SubTituloTema>
				<p className="text-white text-justify">
					<span className="font-bold text-amber-300">Spring Framework</span> es
					un ecosistema modular y flexible que puede trabajar con las
					tecnologías de Jakarta EE, incluyendo JSP. Al usar{" "}
					<span className="font-bold text-amber-300">Spring MVC</span>, se
					pueden desarrollar aplicaciones web en las que JSP actúa como motor de
					vistas, mientras que los controladores Spring se encargan de procesar
					las solicitudes HTTP y enviar datos al frontend.
				</p>
				<p className="text-white text-justify mt-2">
					La integración se basa en una estructura de carpetas organizada (
					<code>/WEB-INF/views/</code>) y el uso de <code>ViewResolvers</code>{" "}
					que permiten mapear nombres de vistas a archivos JSP. Gracias a esta
					integración, los desarrolladores pueden beneficiarse del sistema de
					inyección de dependencias, validación, manejo de formularios y
					servicios REST de Spring, mientras usan JSP para presentar los datos.
				</p>
				<p className="text-white text-justify mt-2">
					Un ejemplo típico en Spring MVC con JSP incluye controladores con
					anotaciones <code>@Controller</code>, métodos que retornan nombres de
					vistas (como "inicio") y JSPs ubicados en{" "}
					<code>/WEB-INF/views/inicio.jsp</code>.
				</p>
			</div>

			<div className="mx-auto">
				<SubTituloTema>Características de JSP</SubTituloTema>
				<ul className="list-disc list-inside text-white">
					<li>
						<span className="text-amber-300 font-semibold">
							Separación de responsabilidades:
						</span>{" "}
						JSP permite separar la lógica de presentación (HTML) de la lógica
						del negocio, que reside en los servlets o beans.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">
							Soporte para JSTL (JavaServer Pages Standard Tag Library):
						</span>{" "}
						Facilita operaciones comunes como condicionales, iteraciones, manejo
						de formularios y acceso a datos sin necesidad de escribir código
						Java crudo.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">
							Expression Language (EL):
						</span>{" "}
						Permite acceder a atributos y propiedades de objetos de manera
						sencilla dentro del HTML usando la sintaxis <code>${}</code>.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">
							Reutilización de código:
						</span>{" "}
						JSP permite usar includes (<code>&lt;jsp:include&gt;</code>) y
						fragmentos para crear páginas modulares y mantener el código
						organizado.
					</li>
					<li>
						<span className="text-amber-300 font-semibold">
							Compatibilidad:
						</span>{" "}
						Funciona con todos los servidores de aplicaciones compatibles con
						Jakarta EE.
					</li>
				</ul>
			</div>

			<div className="mx-auto">
				<SubTituloTema>Ejemplo Básico de JSP</SubTituloTema>
				<p className="text-white text-justify mb-2">
					El siguiente ejemplo muestra una página JSP básica que accede a una
					propiedad de un bean llamado <code>usuario</code> y muestra su nombre.
					Este código sería generado por el backend y entregado al navegador con
					el valor resuelto:
				</p>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
						{`<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head><title>Hola JSP</title></head>
<body>
  <h1>Bienvenido, ${"usuario.nombre"}</h1>
</body>
</html>`}
					</code>
				</pre>
				<p className="text-white text-justify mt-2">
					Para que este JSP funcione correctamente, se debe haber configurado
					previamente el atributo <code>usuario</code> en el{" "}
					<code>request</code> desde un controlador o servlet.
				</p>
			</div>

			<SubTituloTema>Reflexión</SubTituloTema>
			<p className="mb-5">{temario[9].reflexion}</p>

			<SubTituloTema>Bibliografía</SubTituloTema>
			<a
				href={temario[9].bibliografia}
				className="mb-5 hover:underline hover:text-amber-300"
				target="_blank"
			>
				{temario[9].bibliografia}
			</a>

			<SubTituloTema>Libro Recomendado</SubTituloTema>
			<a
				href={temario[9].url_libro}
				className="mb-5 hover:underline hover:text-amber-300"
				target="_blank"
			>
				{temario[9].libro_recomendado}
			</a>
		</div>
	);
};

export default page;
