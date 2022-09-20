export const Busca = ({busca, buscaODA}) => {
    return( 
          <input
          name='busca'
          type='text'
          value={busca}
          placeholder='O que você deseja buscar?'
          onChange={buscaODA}
          />
    )
}
