import * as S from './style'
import * as Icons from 'components/Icons'
const Header = () => {

  // Render
  return (
    <S.Footer>
      <S.Column>
        <S.FooterTitle>Social Media</S.FooterTitle>
        <S.Row>
          <S.Link
            href='mailto:jlnascimentoandrade@gmail.com'
          >
            <Icons.Mail />
          </S.Link>
          <S.Span>
            jlnascimentoandrade@gmail.com
          </S.Span>
        </S.Row>
        <S.Row>
          <S.Link
            target={'_blank'}
            href='#'>
            <Icons.Linkedin />
          </S.Link>
          <S.Span>
            Linkendin
          </S.Span>
        </S.Row>
        <S.Row>
          <S.Link
            target={'_blank'}
            href='https://github.com/Jlucas93'
          >
            <Icons.Github />
          </S.Link>
          <S.Span>
            Github
          </S.Span>
        </S.Row>
      </S.Column>
      <S.Column>
      <S.FooterTitle>Project Tecnologies</S.FooterTitle>
        <S.Row>
          <Icons.ReactIcon/>
          <S.Span>
            React
          </S.Span>
        </S.Row>
        <S.Row>
          <Icons.TSIcon/>
          <S.Span>
          TypeScript
          </S.Span>
        </S.Row>
        <S.Row>
          <Icons.Node/>
          <S.Span>
            NodeJs
          </S.Span>
        </S.Row>
      </S.Column>
    </S.Footer>
  )
}

export default Header