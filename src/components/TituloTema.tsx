
type TituloTemaProps ={
    children: React.ReactNode
  }
const TituloTema =  ({children }: TituloTemaProps) => {
  return (
    <>
    
        <h2 className="text-lime-500 font-bold text-lg md:text-4xl uppercase my-2 lg:my-10 text-center">{children}</h2>
    
    
    </>
  )
}

export default TituloTema