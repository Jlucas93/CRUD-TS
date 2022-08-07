import * as S from './style'
import { Link } from "react-router-dom"
const Header = () => {

  // Render
  return (
    <S.Header>
      <S.Nav>
        <Link to="/">Home</Link>{" "}
      </S.Nav>
    </S.Header>
  )
}

export default Header