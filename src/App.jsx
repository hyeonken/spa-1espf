import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Footer from "./components/footer";
import viteLogo from "./assets/vite.svg";

export default function App(){

  let viteLogoAlt = "vite-Logo"

  return(
    <>
      <h1>APP - Componente principal!</h1>
      <div>

        {/* iniciando a área do cabeçalho */}
        <Cabecalho/>

        {/* Iniciando a área do conteúdo */}
        <Conteudo viteLogoProps={viteLogo} viteLogoAltProps={viteLogoAlt}/>

        {/* Iniciando a área do footer */}
        <Footer/>
      </div>
    </>
  );
}