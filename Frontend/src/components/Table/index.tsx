import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'
import Modal from 'components/Modal'
import * as Icons from 'components/Icons'
import * as S from './style'
interface Product {
  id?: number,
  name: String,
  price: number,
  description: String
}
const Table = () => {
  const [product, setProduct] = useState<Product[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toLocaleCurrency = (price: number, maximumFractionDigits = 2) => Intl
    .NumberFormat('pt-BR', {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits
    })
    .format(price)

    //Callbacks
    const onDelete = useCallback((product:Product) => {
      axios.delete(`http://localhost:5000/backend-ts-327b7/us-central1/app/product/${product.id}`)
      .then(()=>{setProduct(state => state.filter(produto => produto !== product));})
    }, [])
    //Effect
  useEffect(() => {
    axios.get('http://localhost:5000/backend-ts-327b7/us-central1/app/product')
      .then(({ data }) => setProduct(data.products))
  }, [])
  // Render
  return (
    <S.Container>
      <S.Main>
        {product && (
          <S.Table>
            <table>
              <tr>
                <th>Nome</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Ações</th>
              </tr>
              <tbody>
                {product.map((product, index) =>
                  <tr key={index}>
                    <td>{product.description}</td>
                    <td>{toLocaleCurrency(product.price)}</td>
                    <td>{product.name}</td>
                    <td>
                      <S.Button
                        onClick={() => setIsOpen(true)}
                      >
                        Editar
                      </S.Button>
                      <S.Button
                        onClick={() => onDelete(product)}
                      >
                        Deletar
                      </S.Button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </S.Table>
        )}
        <Modal
          isOpen={isOpen}
          close={() => setIsOpen(false)}
        >
          <S.ModalContainer>
            <S.ModalHeader>
              <S.ModalTitle>
                Hello world
              </S.ModalTitle>
              <S.ModalClose
                onClick={() => setIsOpen(false)}
              >
                <Icons.closeIcon />
              </S.ModalClose>
            </S.ModalHeader>
            <S.ModalBody>
              Hello world Body Modal
              <S.Input/>
            </S.ModalBody>
          </S.ModalContainer>
        </Modal>
      </S.Main>
    </S.Container>
  )
}

export default Table