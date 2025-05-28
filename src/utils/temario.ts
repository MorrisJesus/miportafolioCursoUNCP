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
    "semana": 1,
    "tema": "Generador Emmet",
    "reflexion": "Aprendí que Emmet es una poderosa herramienta que me permite escribir código HTML y CSS de forma más rápida y eficiente. Lo aprendí practicando ejemplos en Visual Studio Code y viendo videos tutoriales.",
    "bibliografia": "https://docs.emmet.io/",
    "libro_recomendado": "Emmet Essentials (documentación oficial) y 'HTML & CSS: Design and Build Websites' de Jon Duckett",
    "url_libro": "https://www.htmlandcssbook.com/"
  },
  {
    "semana": 2,
    "tema": "HTML",
    "reflexion": "Aprendí la estructura básica de una página web y cómo usar etiquetas semánticas para mejorar la accesibilidad y el orden del contenido. Aprendí mediante documentación oficial y creando mis propias páginas.",
    "bibliografia": "https://developer.mozilla.org/es/docs/Web/HTML",
    "libro_recomendado": "'HTML and CSS: Design and Build Websites' – Jon Duckett",
    "url_libro": "https://www.htmlandcssbook.com/"
  },
  {
    "semana": 3,
    "tema": "CSS",
    "reflexion": "Comprendí cómo aplicar estilos a las páginas HTML, incluyendo el uso de selectores, clases, colores, márgenes y flexbox. Practiqué haciendo diseños simples y resolviendo ejercicios visuales.",
    "bibliografia": "https://developer.mozilla.org/es/docs/Web/CSS",
    "libro_recomendado": "'CSS: The Definitive Guide' – Eric A. Meyer",
    "url_libro": "https://www.oreilly.com/library/view/css-the-definitive/9781449325053/"
  },
  {
    "semana": 4,
    "tema": "TAILWIND y BOOSTRAP",
    "reflexion": "Aprendí las diferencias entre Bootstrap y Tailwind. Tailwind me ayudó a diseñar con clases utilitarias mientras que Bootstrap me ofreció componentes listos para usar. Aprendí probando ambas en proyectos pequeños.",
    "bibliografia": "https://tailwindcss.com/docs, https://getbootstrap.com/docs/",
    "libro_recomendado": "'Refactoring UI' – Adam Wathan & Steve Schoger y 'Bootstrap 5 Quick Start' – Jacob Lett",
    "url_libro": "https://refactoringui.com/book/, https://www.packtpub.com/product/bootstrap-5-quick-start/9781800564344"
  },
  {
    "semana": 5,
    "tema": "JAVASCRIPT",
    "reflexion": "Aprendí los fundamentos de la programación en la web: variables, funciones, condicionales y manipulación del DOM. Aprendí resolviendo retos en plataformas y haciendo interactividad en mis páginas.",
    "bibliografia": "https://developer.mozilla.org/es/docs/Web/JavaScript",
    "libro_recomendado": "'Eloquent JavaScript' – Marijn Haverbeke",
    "url_libro": "https://eloquentjavascript.net/"
  },
  {
    "semana": 6,
    "tema": "REACT",
    "reflexion": "Aprendí a construir interfaces dinámicas con componentes reutilizables, usando estados y props. Me apoyé en documentación oficial, cursos prácticos y construyendo pequeñas apps.",
    "bibliografia": "https://react.dev/",
    "libro_recomendado": "'The Road to React' – Robin Wieruch",
    "url_libro": "https://www.roadtoreact.com/"
  },
  {
    "semana": 7,
    "tema": "HOOKS",
    "reflexion": "Aprendí a gestionar el estado y efectos secundarios en React usando useState, useEffect y otros hooks. Comprendí su utilidad al comparar su simplicidad frente a las clases.",
    "bibliografia": "https://react.dev/reference/react",
    "libro_recomendado": "'React Hooks in Action' – John Larsen",
    "url_libro": "https://www.manning.com/books/react-hooks-in-action"
  }
]
