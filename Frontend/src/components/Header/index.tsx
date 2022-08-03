import * as S from './style'
import { Link } from "react-router-dom"
const Header = () => {

  // Render
  return (
    <S.Header>
      <S.Nav>
        <Link to="/">Home</Link>{" "}|{" "}
        <Link to="/step1">step1</Link>{" "} |{" "}
        <Link to="/step2">step2</Link>{" "}|{" "}
        <Link to="/step3">step3</Link>
      </S.Nav>
    </S.Header>
  )
}

export default Header