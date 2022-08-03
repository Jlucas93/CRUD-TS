import styled from "styled-components"

export const FooterTitle = styled.div`
  font-weight: bold;
  font-size: 1.4rem;
  padding-bottom: .7rem;
  text-decoration: underline #53b3cb;
`
export const Column = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  padding: 0rem .5rem;
  flex: 1;
  &:first-child {
    flex: 2;
  }
`
export const Footer = styled.footer`
  position:absolute;
  bottom:0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-around;
  flex-direction: row;
  width: 100%;
  margin: auto;
  margin-bottom: 0px;
  min-height: 10rem;
  padding: 1rem 2rem;
  background-color: #2b2b2b;
  color: #e01a4f;
  gap: 1rem;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    padding:0;
    ${Column} {
      margin: 0;
    }
  }
`
export const Row = styled.div`
  display:flex;
  align-items: center;
  flex-direction:row;
`
export const Span = styled.span`
  color:#53b3cb;
  padding: .4rem;
  margin-left: .2rem;
`
export const Link = styled.a`
  color:#e01a4f;
`