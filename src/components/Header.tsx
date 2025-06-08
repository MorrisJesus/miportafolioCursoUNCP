"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Titulo from "./Titulo";
const menuItems = [
	{ label: "Inicio", href: "/paginas" },
	{ label: "Sobre mi", href: "/paginas/sobremi" },
	{ label: "Proyectos", href: "/paginas/proyectos" },
	{ label: "Cuaderno", href: "/paginas/cuaderno" },
	{ label: "Contáctame", href: "/paginas/contacto" },
	{ label: "Reflexión final", href: "/paginas/reflexion" },
	{ label: "Bibliografía", href: "/paginas/bibliografia" },
];
const Header = () => {
	const pathname = usePathname();
	return (
		<nav className="w-full flex items-center justify-between gap-4 px-6 py-3  backdrop-blur-md shadow-md lg:rounded-tr-2xl">
			<Titulo>MI PORTAFOLIO ELECTRÓNICO</Titulo>

			<ul className="flex gap-3 max-md:overflow-x-auto max-md:whitespace-nowrap scrollbar-hide">
				{menuItems.map((item) => (
					<li key={item.href} className="flex-shrink-0">
						<Link
							href={item.href}
							className={`inline-block px-4 py-2 rounded-md text-sm font-bold uppercase transition-colors duration-200 ${
								pathname === item.href
									? "bg-slate-700 text-white"
									: "bg-gray-100 text-black hover:bg-slate-600 hover:text-white"
							}`}
						>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Header;
