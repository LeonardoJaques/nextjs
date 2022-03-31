import * as S from './styles'
const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="the picture of aton an write React Advanced on side"
      />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        TypeScrip, ReactJS, NextJS e Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="its a picture of a developer sit in front of computer with a code on the screen"
      />
    </S.Wrapper>
  )
}
export default Main
