import Post from "./Post";

export default function Posts(){
  const posts = [
    {userName: "meowed", fotoPerfil: "assets/img/meowed.svg", fotoConteudo: "assets/img/gato-telefone.svg"},
    {userName: "barked", fotoPerfil: "assets/img/barked.svg", fotoConteudo: "assets/img/dog.svg"},
    {userName: "meowed", fotoPerfil: "assets/img/meowed.svg", fotoConteudo: "assets/img/gato-telefone.svg"}   
  ]

  return (
    <div class="posts">
      {posts.map((post) => <Post userName={post.userName} fotoPerfil={post.fotoPerfil} fotoConteudo={post.fotoConteudo}/>)}      
    </div>
  )
}