import SubTituloTema from "@/components/SubTituloTema";
import TituloTema from "@/components/TituloTema";
import { temario } from "@/utils/temario";
import React from "react";

const page = () => {
	return (
		<div className="px-10 w-3/4 mx-auto text-white max-md:w-full">
			<TituloTema>{temario[8].tema}</TituloTema>

			<div className="mx-auto">
				<SubTituloTema>¿Qué es la Autenticación en Spring Boot?</SubTituloTema>
				<p className="text-white text-justify">
					La <span className="font-bold text-amber-300">autenticación</span> es el proceso mediante el cual una aplicación verifica la identidad de un usuario. En Java Spring Boot, se implementa comúnmente mediante el módulo{" "}
					<span className="font-bold text-amber-300">Spring Security</span>, que permite manejar el inicio de sesión, generación y validación de tokens, y la protección de endpoints.
				</p>
			</div>

			<div className="mx-auto">
				<SubTituloTema>¿Qué es JWT?</SubTituloTema>
				<p className="text-white text-justify">
					<span className="font-bold text-amber-300">JWT (JSON Web Token)</span> es un estándar para transmitir información de manera segura entre dos partes como un objeto JSON. En aplicaciones Spring Boot, es común generar un JWT al momento del login y luego enviarlo en cada solicitud para verificar la identidad del usuario.
				</p>
			</div>

			<div className="mx-auto">
				<SubTituloTema>¿Qué es Spring Security?</SubTituloTema>
				<p className="text-white text-justify">
					<span className="font-bold text-amber-300">Spring Security</span> es un
					módulo potente y altamente personalizable del ecosistema Spring que permite
					implementar autenticación y autorización en aplicaciones Java. Ofrece
					integración con múltiples mecanismos de autenticación, como formularios,
					básico, OAuth2 y JWT.
				</p>
			</div>

			<div className="mx-auto">
				<SubTituloTema>Flujo de Autenticación con JWT</SubTituloTema>
				<ol className="list-decimal list-inside text-white mt-2">
					<li>El usuario envía sus credenciales (correo y contraseña) al endpoint <code>/login</code>.</li>
					<li>El backend valida las credenciales con la base de datos usando un servicio personalizado.</li>
					<li>Si son válidas, se genera un token JWT firmado y se devuelve al cliente.</li>
					<li>El cliente guarda el token (por ejemplo, en localStorage o cookies).</li>
					<li>Para cada petición protegida, el cliente debe enviar el token en el encabezado <code>Authorization: Bearer &lt;token&gt;</code>.</li>
					<li>El backend intercepta las peticiones, valida el token y, si es válido, permite el acceso al recurso.</li>
				</ol>
			</div>

			<div className="mx-auto">
				<SubTituloTema>Componentes Clave en la Autenticación JWT</SubTituloTema>
				<ul className="list-disc list-inside text-white">
					<li><span className="text-amber-300 font-semibold">UserDetailsService:</span> Encargado de cargar los datos del usuario desde la base de datos.</li>
					<li><span className="text-amber-300 font-semibold">AuthenticationManager:</span> Valida las credenciales del usuario.</li>
					<li><span className="text-amber-300 font-semibold">JwtUtil:</span> Clase personalizada para generar y validar tokens JWT.</li>
					<li><span className="text-amber-300 font-semibold">SecurityFilterChain:</span> Configura las rutas públicas y protegidas, y define el filtro JWT.</li>
					<li><span className="text-amber-300 font-semibold">JWTFilter:</span> Filtro personalizado que intercepta las solicitudes y valida el token JWT.</li>
				</ul>
			</div>

			<div className="text-white mx-auto">
				<h3 className="mt-4 font-semibold text-amber-300 text-2xl uppercase">
					Ejemplo Básico de Endpoint Protegido con Spring Security
				</h3>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
{`@RestController
@RequestMapping("/api")
public class AuthController {

    @GetMapping("/public")
    public String publicEndpoint() {
        return "Este endpoint es público.";
    }

    @GetMapping("/private")
    @PreAuthorize("hasRole('USER')")
    public String privateEndpoint() {
        return "Este endpoint está protegido y requiere autenticación.";
    }
}`}
					</code>
				</pre>

				<h3 className="mt-6 font-semibold text-amber-300 text-2xl uppercase">
					Configuración Básica con Spring Security
				</h3>
				<pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
					<code className="text-green-300">
{`@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public").permitAll()
                .anyRequest().authenticated()
            )
            .httpBasic(); // o usar .oauth2ResourceServer().jwt() con configuración adicional
        return http.build();
    }
}`}
					</code>
				</pre>
			</div>

			<div className="mx-auto">
				<SubTituloTema>Comandos Útiles</SubTituloTema>
				<ul className="list-disc list-inside text-white">
					<li><code>./mvnw spring-boot:run</code>: Ejecuta el proyecto con Maven.</li>
					<li><code>curl -X POST http://localhost:8080/api/login -d `{`{ "username": "user", "password": "pass" }`}`</code>: Probar login desde terminal.</li>
					<li><code>http POST http://localhost:8080/api/private Authorization:"Bearer &lt;token&gt;"</code>: Usar HTTPie para probar un endpoint protegido.</li>
				</ul>
			</div>

			<SubTituloTema>Reflexión</SubTituloTema>
			<p className="mb-5">{temario[8].reflexion}</p>

			<SubTituloTema>Bibliografía</SubTituloTema>
			<a
				href={temario[8].bibliografia}
				className="mb-5 hover:underline hover:text-amber-300"
				target="_blank"
			>
				{temario[8].bibliografia}
			</a>

			<SubTituloTema>Libro Recomendado</SubTituloTema>
			<a
				href={temario[8].url_libro}
				className="mb-5 hover:underline hover:text-amber-300"
				target="_blank"
			>
				{temario[8].libro_recomendado}
			</a>

			<SubTituloTema>Creación de un Proyecto de Autenticación</SubTituloTema>
			<a
				href="https://start.spring.io/"
				className="mb-5 hover:underline hover:text-amber-300"
				target="_blank"
			>
				Inicia tu proyecto Spring Boot en https://start.spring.io/
			</a>
		</div>
	);
};

export default page;
