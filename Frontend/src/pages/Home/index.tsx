import * as S from './style'
import Table from 'components/Table'
const Home = () =>{
  //render
  return(
    <S.Container>
      <S.Title>
      Lista de Produtos
      </S.Title>
      <Table></Table>
    </S.Container>
  )
}

export default Home