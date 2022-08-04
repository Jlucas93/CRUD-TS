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
export const ModalForm = styled.form`
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
  justify-content:center;
  font-weight: bold;
`
export const Button = styled.button`
  cursor: pointer;
  width: 6rem;
`
export const CloseButton = styled.button`
  cursor: pointer;
  background-color:transparent;
  border:none;
  width: 3rem;
`
export const Form = styled.form`

`
export const Input = styled.input`
  border: 1px solid transparent;
  border-bottom: 1px solid;
  display: block;
  margin: 10px auto;
  padding: 7px 0;
  outline: none;
  border-radius: .25rem;
  width: 60%;
`