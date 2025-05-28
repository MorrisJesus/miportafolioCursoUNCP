// /app/not-found.tsx o /pages/404.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-4xl font-bold text-gray-800">404 - Ruta no válida</h1>
      </div>
      <p className="text-gray-600 text-lg mb-6">
        La página que estás buscando no existe o fue movida.
      </p>
      <Link
        href="/paginas"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
