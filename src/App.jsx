import MeuComponente from "./components/Meucomponente";
import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Footer from "./components/footer";

export default function App(){
  return(
    <>
      <h1>APP - Componente principal!</h1>
      <div>

        {/* iniciando a área do cabeçalho */}
        <Cabecalho/>

        {/* Iniciando a área do conteúdo */}
        <Conteudo/>

        {/* Iniciando a área do footer */}
        <Footer/>
      </div>
    </>
  );
};