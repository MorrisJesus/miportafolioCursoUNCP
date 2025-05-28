
type TituloProps ={
    children: React.ReactNode
  }
const Titulo =  ({children }: TituloProps) => {
  return (
    <>
    
        <h2 className="text-teal-50 font-bold text-lg md:text-2xl uppercase my-2 lg:my-10">{children}</h2>
    
    
    </>
  )
}

export default Titulo