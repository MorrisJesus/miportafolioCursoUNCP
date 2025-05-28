
type SubTituloTemaProps ={
    children: React.ReactNode
  }
const SubTituloTema =  ({children }: SubTituloTemaProps) => {
  return (
    <>
    
        <h2 className="text-lime-500 font-bold text-lg md:text-2xl uppercase my-2 lg:my-3 ">{children}</h2>
    
    
    </>
  )
}

export default SubTituloTema