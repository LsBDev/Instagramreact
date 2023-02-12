import { useState } from "react"

export default function Post(props) {
  const [like, setLike] = useState ("heart-outline")
  const [cor, setCor] = useState ("")
  const [save, setSave] = useState ("bookmark-outline")
  const [cont, setCont] = useState (Math.floor(Math.random()*1000))

  function liker() {
    switch (like){
      case "heart-outline":
        setLike("heart")
        setCor("red")
        setCont(cont + 1)
        break;
      case "heart":
        setLike("heart-outline")
        setCor("")
        setCont(cont - 1 )
        break;
      default:
    }
  }

  function likeFoto() {
    switch (like){
      case "heart-outline":
        setLike("heart")
        setCor("red")
        setCont(cont + 1)
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
    <div  data-test="post" class="post">
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
        <img  data-test="post-image" onClick={likeFoto} src={props.fotoConteudo} alt={props.userName}/>
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon data-test="like-post" onClick={liker} class={cor} name={like}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="save-post" onClick={savePost} name={save}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/img/respondeai.svg" alt="respondeai"/>
          <div class="texto">
            Curtido por <strong>respondeai</strong> e <strong data-test="likes-number">outras {cont} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

