import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  width:80%;
  margin: auto;
  min-height: 80%;
  max-height: 90%;
  border-radius: 3px;
  overflow: auto;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 .7rem 2rem rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(1.5rem);
`
export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  height: 100%;
  min-height: 22rem;
  padding: 2rem;
`
export const Header = styled.div`
  display:flex;
  text-align: center;
  text-decoration:underline #E01A4F;
  justify-content:space-between;
  padding: 1rem;
`
export const Title = styled.h1`
  font-size: 1.25rem;
  text-align: center;
  font-weight: bold;
`
export const CloseButton = styled.button`
  cursor: pointer;
  background-color:transparent;
  outline:none;
  border:none;
  width: 3rem;
`
export const Input = styled.input`
  border: 1px solid transparent;
  border-bottom: 3px solid #E01A4F;
  display: block;
  margin: 10px auto;
  padding: 7px 0;
  outline: none;
  border-radius: .25rem;
  background-color: white;
  width: 35rem;
`
export const Span = styled.span`
    text-align: center;
    color: #000;
  `
export const Footer = styled.div`
  width: 100%;
  height: 5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
`
export const Button = styled.button`
  cursor: pointer;
  text-align: center;
  width: 7rem;
  height: 3rem;
  padding: .5rem;
  margin-left: .5rem;
  border: 1px solid transparent;
  outline: none;
  border-radius: .5rem;
  color: #E01A4F;
  background-color: #2b2b2b;
  transition: .5s;
  &:hover{
    transform: scale(1.1);
    color: #53B3CB;
  }
`