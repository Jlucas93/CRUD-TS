import * as S from './style'
import { Link } from "react-router-dom"
const Header = () => {

  // Render
  return (
    <S.Header>
      <nav>
        <Link to="/step1">step1</Link> |{" "}
        <Link to="/step2">step2</Link>
      </nav>
    </S.Header>
  )
}

export default Header