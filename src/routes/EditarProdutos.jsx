import React from 'react'
import { useParams } from 'react-router-dom'
import { ListaProduto } from '../components/ListaProdutos';

export default function EditarProdutos() {

    const {id} = useParams();

    document.title = 'Editar Produtos ' + id;


    // Criar uma estratégia para recuperar o produto na lista
    // Utilizando o id
    // const produtoRecuperadoPorId = ListaProduto.filter(item => item.id == parseInt(id));
    const produtoRecuperadoPorId = ListaProduto.filter(item => item.id == parseInt(id))[0];
  return (
    <div>
        <h1>Editar Produtos</h1>
        {/* Dois jeitos de acessar objetos: */}
        {/* <h2>Produto Selecionado : {id}</h2> */}
        {/* ou: */}
        <h2>ID : {produtoRecuperadoPorId.id}</h2>

        <h2>Nome : {produtoRecuperadoPorId.nome}</h2>
        <h2>Descrição : {produtoRecuperadoPorId.desc}</h2>
        <h2>Preço : {produtoRecuperadoPorId.preco}</h2>

        <div>
          <h1>Editar Produtos</h1>
          <form>
            <fieldset>
            <legend>Produto Selecionado</legend>
            <div>
              <label htmlFor="">Nome:</label>
              <input type="text" name='nome' placeholder='Digite o nome do Produto.'/>
            </div>
            <div>
              <label htmlFor="">Descrição:</label>
              <input type="text" name='desc' placeholder='Digite a descrição do Produto.'/>
            </div>
            <div>
              <label htmlFor="">Preço:</label>
              <input type="text" name='preco' placeholder='Digite o preço do Produto.'/>
            </div>
            <div>
              <button>EDITAR</button>
            </div>
            </fieldset>
          </form>
        </div>
    </div>
  )
}
