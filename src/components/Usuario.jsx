import { useState } from "react"

export default function Usuario() {
  const [nomeUsuario, setNomeUsuario] = useState("user")
  const [fotoUsuario, setFotoUsuario] = useState("https://www2.sarah.br/Auth/Content/images/user.png")


  function changeUser() {
    let nome = prompt ('Digite o seu nome')
    setNomeUsuario(nome)
  }
  function changeFoto() {
    let foto = prompt ('link da sua foto')
    setFotoUsuario(foto)
  }  
 

  return (
    <div class="usuario">
      <img onClick={changeFoto} src={fotoUsuario} alt="imagem de perfil"/>
      <div class="texto">
        <span>
          <strong>{nomeUsuario}</strong>
          <ion-icon onClick={changeUser} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  )
}