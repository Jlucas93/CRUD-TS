import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ddd;
`
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  padding-bottom: 5rem;
  background-color: #ffff;
  overflow:auto;
`

export const Button = styled.button`
  cursor: pointer;
  text-align: center;
  width: 7rem;
  padding: 1rem 2rem;
  margin-left: .5rem;
  border-radius: .5rem;
  color: #E01A4F;
  background-color: #2b2b2b;
  &:hover{
    transform: scale(1.1);
    color: #53B3CB;
  }
`

export const Table = styled.div`
  margin: auto;
  display: flex;
  text-align: center;
  justify-content: center;
  height:100%;
  width: 100%;

  table {
    background-color: #2b2b2b;
    height: 100%;
    width: 80%;
  }
  th {
    color: #E01A4F;
    background-color: #2b2b2b;
    font-weight: 400;
    padding: .5rem 1rem;
    text-align: center;
    line-height: 1.5rem;
    border: 1px solid transparent;
  }
  td {
    background-color: #ddd;
    padding: .5rem 1rem;
    &:first-child {
      font-weight: bold;
    }
  }
`
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
  text-decoration:underline #E01A4F;
  position: relative;
  padding: 1rem;
`
export const ModalBody = styled.div`
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