import Header from '../src/components/Header'
import Link from 'next/link'

function IndexPage() {
  return (
    <>
      <div>
      <Header />

      <div className="jumbotron jumbotron-fluid bg-info text-light">
        <div className="container">
          <h1 className="display-3">NextJS SideServerRender</h1>
          <p className="lead">Renderização no Servidor! Diretórios de api GitHub!
          <Link href="/repositories">
          <a className="text-danger"> Veja Aqui!</a>
        </Link>
          </p>
          </div>
      </div>       
      
<div className="card text-center">
  <h5 className="card-header bg-warning">Atividade Renderização no Servidor!</h5>
  <div className="card-body bg-light">
    <h5 className="card-title">Uso da função getServerSidePros</h5>
    <p className="card-text">Conteúdo renderizado no Servidor NodeJS e tbm API de Quiz!
    <Link href="/api/db">
          <a className="text-danger"> Veja Aqui API de Quiz!</a>
    </Link>
    </p>
    <a href="https://www.recodepro.org.br/" target="_blank" className="btn btn-primary">Full Stack Recode Pro</a>
  </div>
</div>
</div> 
</>
  )
}

export default IndexPage

