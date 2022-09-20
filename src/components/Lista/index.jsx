export const Lista = ({nome, usuario, id, descricao, data_inclusao, palavras_chave}) => {
    return(
          <div className="oda">
              <h1>{nome}</h1>
              <p><strong>Usuário:</strong> {usuario}</p>
              <p><strong>Descrição:</strong> {descricao}</p>
              <p><strong>Data Inclusão:</strong> {data_inclusao}</p>
              <p><strong>Palavra Chave:</strong> {palavras_chave}</p>
            </div>
    )
}
