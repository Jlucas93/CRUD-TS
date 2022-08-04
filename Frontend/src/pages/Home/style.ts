import styled from 'styled-components'

export const Container = styled.div`
  width:100%;
`
export const Title = styled.h1`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  text-align: center;
  margin: 2rem;
  font-weight: bold;
`
export const Button = styled.div`
  cursor: pointer;
  font-size: 1rem;
  text-align: center;
  width: 10rem;
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
export const AddButton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  display:flex;
  text-align: center;
  width: 7.5rem;
  padding: .5rem;
  border-radius: .5rem;
  color: #E01A4F;
  background-color: #2b2b2b;
  &:hover{
    color: #53B3CB;
  }
`

export const Loading = styled.div`
  display:flex;
  align-items: center;
  flex-direction: column;
`