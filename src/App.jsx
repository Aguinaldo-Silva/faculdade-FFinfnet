import "./styles.css"
import Card from "./cards/card"
import img1 from "./img/image 1.png"
import img2 from "./img/image 2.png"
import img3 from "./img/image 3.png"
import img4 from "./img/image 4.png"
import img5 from "./img/image 5.png"

export function App(){
  return(
    <div>
    <header className="Container">
      <h1> FF infnet</h1>

      <ul>
        <li>Home</li>
        <li>Contato</li>
        <li>quem somos</li>
      </ul>
    </header>

    <h2 className="subtitle">Fast-food Infnet</h2>

      <div className="container_cards">
        
        

       <Card titulo="feijoada" descricao="Prato tipíco brasileiro" img={img1}/>
       <Card titulo="Camarão" descricao="Prato de camarão" img={img2}/>
       <Card titulo="Coxinha" descricao="Prato tipíco brasileiro" img={img3}/>
       <Card titulo="Torta de Limão" descricao="Prato tipíco brasileiro" img={img4}/>
       <Card titulo="Coca-cola" descricao="viciante" img={img5}/>
       <Card />
       



      </div>

      <footer className="app_footer">
        <p>Todos os direitos reservados - 2024</p>
      </footer>


    </div>
  )
}




