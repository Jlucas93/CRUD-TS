import React from 'react'
import * as S from './style'
import { Api } from 'utils/api'
// Types
interface Props {
  products: Api.Product[]
  onDelete: (product: Api.Product) => void
  onUpdate: (product: Api.Product) => void
}
// Component
const Table: React.FC<Props> = ({ products, onDelete, onUpdate }) => {
  //Methods
  const toLocaleCurrency = (price: number, maximumFractionDigits = 2) => Intl
    .NumberFormat('pt-BR', {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits
    })
    .format(price)
  // Render
  return (
    <S.Container>
      <S.Main>
        <S.Table>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) =>
                <tr key={index}>
                  <td>{product.description}</td>
                  <td>{toLocaleCurrency(product.price)}</td>
                  <td>{product.name}</td>
                  <td>
                    <S.Button
                      onClick={() => onUpdate(product)}
                    >
                      Update
                    </S.Button>
                    <S.Button
                      onClick={() => onDelete(product)}
                    >
                      Delete
                    </S.Button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </S.Table>
      </S.Main>
    </S.Container >
  )
}

export default Table