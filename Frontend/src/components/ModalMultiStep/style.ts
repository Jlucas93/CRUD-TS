import styled from 'styled-components'

export const ModalContainer = styled.div`
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
export const ModalHeader = styled.div`
  text-align: right;
  text-decoration:underline #E01A4F;
  padding: 1rem;
`
export const ModalForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  padding-bottom: 2rem;
`
export const ModalClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display:flex;
`
export const ModalTitle = styled.h1`
  font-size: 1.25rem;
  text-align: center;
  font-weight: bold;
`
export const ModalFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Button = styled.button`
  cursor: pointer;
  text-align: center;
  width: 7rem;
  padding: 1rem;
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
export const CloseButton = styled.button`
  cursor: pointer;
  background-color:transparent;
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
  width: 60%;
`
export const Span = styled.span`
  text-align: center;
  color: #000;
`