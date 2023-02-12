import { useState } from "react"

export default function Post(props) {
  const [like, setLike] = useState ("heart-outline")
  const [cor, setCor] = useState ("")
  const [save, setSave] = useState ("bookmark-outline")  

  function liker() {
    switch (like){
      case "heart-outline":
        setLike("heart")
        setCor("red")
        break;
      case "heart":
        setLike("heart-outline")
        setCor("")
        break;
      default:
    }
  }

  function likeFoto() {
    switch (like){
      case "heart-outline":
        setLike("heart")
        setCor("red")
        break;
      default:
    }
  }

  function savePost() {
    switch (save) {
      case "bookmark-outline":
        setSave("bookmark")
        break
      case "bookmark":
        setSave("bookmark-outline")
        break;
      default:
    }
  }

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.fotoPerfil} alt={props.userName}/>
          {props.userName}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img onClick={likeFoto} src={props.fotoConteudo} alt={props.userName}/>
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon onClick={liker} class={cor} name={like}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon onClick={savePost} name={save}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/img/respondeai.svg" alt="respondeai"/>
          <div class="texto">
            Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

