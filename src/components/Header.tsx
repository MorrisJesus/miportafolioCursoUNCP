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
		<nav className=" flex  gap-4  w-full  px-10 lg:rounded-tr-2xl justify-between items-center">
			<Titulo>MI PORTAFOLIO ELECTRÓNICO</Titulo>
			<ul className="flex justify-between gap-2 py-1 max-md:overflow-x-auto max-md:whitespace-nowrap max-w-full">
				{menuItems.map((item) => (
					<li key={item.href}>
						<Link
							href={item.href}
							className={`inline-block lg:block uppercase font-bold max-lg:min-w-max px-3 py-1 lg:py-2 rounded-md text-left text-sm transition-colors ${
								pathname === item.href
									? "bg-slate-600 text-white  max-sm:bg-black"
									: "bg-white text-black hover:bg-slate-600 hover:text-white max-sm:hover:bg-black"
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
