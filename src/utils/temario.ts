export interface SemanaTema {
	semana: number;
	tema: string;
	reflexion: string;
	bibliografia: string;
	libro_recomendado: string;
	url_libro: string;
}

export const temario: SemanaTema[] = [
	{
		semana: 1,
		tema: "Generador Emmet",
		reflexion:
			"Aprendí que Emmet es una poderosa herramienta que me permite escribir código HTML y CSS de forma más rápida y eficiente. Lo aprendí practicando ejemplos en Visual Studio Code y viendo videos tutoriales.",
		bibliografia: "https://docs.emmet.io/",
		libro_recomendado:
			"Emmet Essentials (documentación oficial) y 'HTML & CSS: Design and Build Websites' de Jon Duckett",
		url_libro: "https://www.htmlandcssbook.com/",
	},
	{
		semana: 2,
		tema: "HTML",
		reflexion:
			"Aprendí la estructura básica de una página web y cómo usar etiquetas semánticas para mejorar la accesibilidad y el orden del contenido. Aprendí mediante documentación oficial y creando mis propias páginas.",
		bibliografia: "https://developer.mozilla.org/es/docs/Web/HTML",
		libro_recomendado:
			"'HTML and CSS: Design and Build Websites' – Jon Duckett",
		url_libro: "https://www.htmlandcssbook.com/",
	},
	{
		semana: 3,
		tema: "CSS",
		reflexion:
			"Comprendí cómo aplicar estilos a las páginas HTML, incluyendo el uso de selectores, clases, colores, márgenes y flexbox. Practiqué haciendo diseños simples y resolviendo ejercicios visuales.",
		bibliografia: "https://developer.mozilla.org/es/docs/Web/CSS",
		libro_recomendado: "'CSS: The Definitive Guide' – Eric A. Meyer",
		url_libro:
			"https://www.oreilly.com/library/view/css-the-definitive/9781449325053/",
	},
	{
		semana: 4,
		tema: "TAILWIND y BOOSTRAP",
		reflexion:
			"Aprendí las diferencias entre Bootstrap y Tailwind. Tailwind me ayudó a diseñar con clases utilitarias mientras que Bootstrap me ofreció componentes listos para usar. Aprendí probando ambas en proyectos pequeños.",
		bibliografia:
			"https://tailwindcss.com/docs, https://getbootstrap.com/docs/",
		libro_recomendado: "'Refactoring UI' – Adam Wathan & Steve Schoger",
		url_libro: "https://refactoringui.com/book/",
	},
	{
		semana: 5,
		tema: "JAVASCRIPT",
		reflexion:
			"Aprendí los fundamentos de la programación en la web: variables, funciones, condicionales y manipulación del DOM. Aprendí resolviendo retos en plataformas y haciendo interactividad en mis páginas.",
		bibliografia: "https://developer.mozilla.org/es/docs/Web/JavaScript",
		libro_recomendado: "'Eloquent JavaScript' – Marijn Haverbeke",
		url_libro: "https://eloquentjavascript.net/",
	},
	{
		semana: 6,
		tema: "REACT",
		reflexion:
			"Aprendí a construir interfaces dinámicas con componentes reutilizables, usando estados y props. Me apoyé en documentación oficial, cursos prácticos y construyendo pequeñas apps.",
		bibliografia: "https://react.dev/",
		libro_recomendado: "'The Road to React' – Robin Wieruch",
		url_libro: "https://www.roadtoreact.com/",
	},
	{
		semana: 7,
		tema: "HOOKS",
		reflexion:
			"Aprendí a gestionar el estado y efectos secundarios en React usando useState, useEffect y otros hooks. Comprendí su utilidad al comparar su simplicidad frente a las clases.",
		bibliografia: "https://react.dev/reference/react",
		libro_recomendado: "'React Hooks in Action' – John Larsen",
		url_libro: "https://www.manning.com/books/react-hooks-in-action",
	},
	{
		semana: 9,
		tema: "Desarrollo Backend con Java Spring",
		reflexion:
			"Aprendí a crear APIs RESTful utilizando el framework Spring Boot. Comprendí cómo funciona la inyección de dependencias, la estructura de capas (controlador, servicio, repositorio) y cómo se facilita la conexión con bases de datos mediante Spring Data JPA.",
		bibliografia: "https://spring.io/projects/spring-boot",
		libro_recomendado: "'Spring Boot in Action' – Craig Walls",
		url_libro: "https://www.manning.com/books/spring-boot-in-action",
	},
	{
		semana: 10,
		tema: "Autenticación con Java Spring Boot",
		reflexion:
			"Esta semana aprendí a implementar un sistema de autenticación seguro utilizando Spring Boot. Entendí el flujo completo de autenticación mediante JWT (JSON Web Tokens), incluyendo la validación de credenciales, generación de tokens y protección de rutas mediante filtros de seguridad. También profundicé en el uso de Spring Security para gestionar roles y permisos.",
		bibliografia: "https://spring.io/projects/spring-boot",
		libro_recomendado: "'Spring Boot Reference Documentation' – Phillip Webb",
		url_libro:
			"https://docs.spring.io/spring-boot/docs/3.2.7/reference/pdf/spring-boot-reference.pdf",
	},
	{
		semana: 11,
		tema: "JSP con Jakarta y Spring",
		reflexion:
			"Esta semana aprendí a desarrollar interfaces web utilizando JSP (JavaServer Pages) junto con Jakarta EE y Spring Framework. Comprendí cómo se integran las vistas JSP con los controladores de Spring MVC para renderizar contenido dinámico. Además, me familiaricé con el uso de Expression Language (EL), JSTL y el manejo de formularios para la interacción con el usuario desde el backend Java.",
		bibliografia: "https://jakarta.ee/specifications/pages/",
		libro_recomendado: "'Spring in Action' – Craig Walls",
		url_libro: "https://www.manning.com/books/spring-in-action-sixth-edition",
	},
	{
		semana: 12,
		tema: "Desarrollo web con PHP y Laravel",
		reflexion:
			"Durante esta semana me enfoqué en aprender Laravel, un framework de PHP moderno y robusto para el desarrollo de aplicaciones web. Comprendí el patrón MVC (Modelo-Vista-Controlador), el enrutamiento, la migración de bases de datos y la creación de controladores y modelos. Laravel me permitió trabajar de manera eficiente con bases de datos, autenticación y estructuras RESTful, haciendo el desarrollo más estructurado y seguro.",
		bibliografia: "https://laravel.com/docs/11.x",
		libro_recomendado: "'Laravel: Up & Running' – Matt Stauffer",
		url_libro: "https://laravelupandrunning.com/",
	},
	{
		semana: 13,
		tema: "Laravel Intermedio: Eloquent, Middleware y API REST",
		reflexion:
			"Esta semana profundicé en aspectos intermedios de Laravel. Aprendí a utilizar Eloquent ORM de manera más avanzada, implementando relaciones entre modelos como uno a muchos, muchos a muchos y relaciones polimórficas. También trabajé con middleware para gestionar el acceso a rutas protegidas, y comencé a construir APIs RESTful utilizando recursos, controladores API y respuestas JSON. Laravel demostró su potencia y flexibilidad al facilitar la creación de servicios web limpios y mantenibles.",
		bibliografia: "https://laravel.com/docs/11.x/eloquent",
		libro_recomendado:
			"'Laravel: Up & Running' – Matt Stauffer (Capítulos intermedios)",
		url_libro: "https://laravelupandrunning.com/",
	},
	{
		semana: 14,
		tema: "Flask Básico: Introducción, Rutas y Plantillas",
		reflexion:
			"Esta semana comencé a aprender Flask, un microframework de Python orientado al desarrollo web. Aprendí a crear aplicaciones básicas, definir rutas mediante funciones y retornar respuestas en distintos formatos. También trabajé con el sistema de plantillas Jinja2 para generar contenido HTML dinámico e incorporé formularios simples para manejar datos del usuario. Flask me pareció una herramienta muy intuitiva y flexible, ideal para comenzar en el desarrollo backend con Python y construir proyectos pequeños de forma rápida y ordenada.",
		bibliografia: "https://flask.palletsprojects.com/en/3.0.x/quickstart/",
		libro_recomendado:
			"'Flask Web Development' – Miguel Grinberg (Capítulos iniciales)",
		url_libro: "https://flaskbook.com/",
	},
];
