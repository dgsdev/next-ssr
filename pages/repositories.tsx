import { GetServerSideProps } from "next"
import Header from "../src/components/Header"
import Link from 'next/link'

type Repo = {
  name: String;
  description: String;
}

type RepositoriesProps = {
  repos: Repo[]
}

export default function Repositories({ repos }) {
  return (    
    <div>
      <Header />         
      <div className="jumbotron jumbotron-fluid bg-info text-light">
        <div className="container">
          <h1 className="display-3">NextJS SideServerRender</h1>
          <p className="lead">Renderização no Servidor! Diretórios de api GitHub! Desative o Javascript no Devtools!
          <Link href="/">
          <a className="text-danger"> Home</a>
        </Link></p>
          </div>
      </div>
    <ul>
      {repos.map(repo => (
      <li key={repo.name}>{repo.name}</li>
      ))}
    </ul>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://api.github.com/orgs/rocketseat/repos')
    const data = await response.json();
 

  return {
    props: {
      repos: data
    }
  }
}
