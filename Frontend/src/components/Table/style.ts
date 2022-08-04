import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  background-color: #ddd;
`
export const Title = styled.h1`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  text-align: center;
  margin: 2rem;
  font-weight: bold;
  text-decoration:underline #E01A4F;
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

export const Label = styled.label`
  width: 60%;
`