
import "./styles.css"

export default function card(props){
    return(
      <div className="card">
          <img src={props.img ? props.img : "https://th.bing.com/th?id=OIP.4HChHv1QgzLfTscxGYAegwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"}/>
            <p>{props.titulo ? props.titulo : "titulo invalido"}</p>
            <p className="description">{props.descricao ? props.descricao : "descricao invalida"}</p>
          </div>
    )
  }
  