import * as S from './style'
import Logo from 'assets/404.png'

const NotFound = () => {
  //render
  return (
    <S.Container>
      <S.Logo
        src={Logo}
      />
      <S.Text>
        404 Página Não Encontrada
      </S.Text>
    </S.Container>
  )
}

export default NotFound