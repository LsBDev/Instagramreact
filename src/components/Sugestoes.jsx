import Sugestao from "./Sugestao"

export default function Sugestoes() {

  const lista =[
    {nome:"bad.vibes.memes", imagem:"assets/img/bad.vibes.memes.svg"},
    {nome:"chibirdart", imagem:"assets/img/chibirdart.svg"},
    {nome:"razoesparaacreditar", imagem:"assets/img/razoesparaacreditar.svg"},
    {nome:"adorable_animals", imagem:"assets/img/adorable_animals.svg"},
    {nome:"smallcutecats", imagem:"assets/img/smallcutecats.svg"}
  ]
 
  return (
    lista.map((sug) => <Sugestao nome={sug.nome} imagem={sug.imagem}/>)
    // como essa func que retorna ... não está dentro de jsx, não precisa da chave
  )
}
