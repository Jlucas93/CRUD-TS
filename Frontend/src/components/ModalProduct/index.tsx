import React, { useState } from 'react'
import Modal from 'components/Modal'
import * as Icons from 'components/Icons'
import * as S from './style'
import { api, Api } from 'utils/api'


interface Props {
  product: Api.Product | undefined | null
  onClose: () => void
  onAdd: (body: Api.Product) => void
  onUpdate: (product: Api.Product, body: Partial<Api.Product>) => void
}
const ModalProduct: React.FC<Props> = ({ product, onAdd, onClose, onUpdate }) => {

  const handleSubmit = (event: any) =>{
      event.preventDefault()
      const formElement = event.target as HTMLFormElement
      const [
        input_name,
        input_price,
        input_description
      ] = Object.values(formElement)
      const body = {
        name: input_name.value,
        price: parseFloat(input_price.value),
        description: input_description.value
      }
      product
        ? api.put(`/product/${product.id}`, body)
          .then(() => onUpdate(product, body))
          .catch(({ message }) => console.log(message))
        : api.post('/product', body)
          .then(({ data }) => (
            onAdd({ ...body, id: data.id })
          ))
      onClose()
  }
  // Render
  return (
    <Modal
      isOpen={product !== null}
      close={onClose}
    >
      <S.ModalContainer>
        <S.ModalHeader>
          <S.CloseButton
            onClick={onClose}
          >
            <Icons.Close />
          </S.CloseButton>
        </S.ModalHeader>
        <S.ModalForm
          onSubmit={handleSubmit}
        >
          <S.Input
            type="text"
            name="name"
            placeholder="Nome do Produto"
            defaultValue={product?.name}
            required
          />
          <S.Input
            type="text"
            name="price"
            placeholder="Preço"
            defaultValue={product?.price}
            required
          />
          <S.Input
            type="text"
            name="description"
            placeholder="Descrição"
            defaultValue={product?.description}
            required
          />
          <S.Button>
            Submit
          </S.Button>
        </S.ModalForm>
      </S.ModalContainer>
    </Modal>
  )
}

export default ModalProduct