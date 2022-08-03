import styled from "styled-components"

export const Header = styled.div`
  position: absolute;
  top:0;
  width: 100%;
  height: 5rem;
`

export const Nav = styled.nav`
  background-color: #2b2b2b;
  height: 100%;
  color: #e01a4f;
  text-align: center;
  font-size: 18px;
  line-height: 3.5rem;
  border-Bottom: 1px solid transparent;
  padding-Bottom: 1rem;
  @media (max-width: 650px) {
    text-align: left;
    padding:0;
  }
`