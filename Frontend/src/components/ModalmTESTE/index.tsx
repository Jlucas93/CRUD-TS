import React, { useRef, useState } from 'react';
import Modal from 'components/Modal';
import { api, Api } from 'utils/api'
import * as S from './style'
import * as Icons from 'components/Icons'

interface Props {
  product: Api.Product | undefined | null
  onClose: () => void
  onAdd: (body: Api.Product) => void
  onUpdate: (product: Api.Product, body: Partial<Api.Product>) => void
}

const steps = [
  {
    id: "NAME",
    title: "Name of the Product"
  },
  {
    id: "PRICE",
    title: "Price of Product"
  },
  {
    id: "DESCRIPTION",
    title: "Description of Product"
  }
];

const ModalMultiStep: React.FC<Props> = ({ product, onAdd, onClose, onUpdate }) => {
  //State
  const [currentStep, setCurrentStep] = useState(0)
  // Refs
  const formRef = React.useRef<HTMLFormElement>(null)
  const bodyRef = React.useRef(product || {})
  // Callbacks
  const handleNext = () => {
    if (!formRef.current)
      return
    Object.assign(
      bodyRef.current,
      Object.fromEntries(
        (Object.values(formRef.current) as HTMLInputElement[])
          .filter(element => element.value)
          .map(element => [element.name, element.value])
      )
    )
    setCurrentStep((prevState) => prevState + 1)
  }
  const handlePrevious = () => {
    if (!formRef.current)
      return
    Object.assign(
      bodyRef.current,
      Object.fromEntries(
        (Object.values(formRef.current) as HTMLInputElement[])
          .filter(element => element.value)
          .map(element => [element.name, element.value])
      )
    )
    setCurrentStep((prevState) => prevState - 1)
  }
  const handleSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    Object.assign(
      bodyRef.current,
      Object.fromEntries(
        (Object.values(event.target) as HTMLInputElement[])
          .filter(element => element.value)
          .map(element => [element.name, element.value])
      )
    )
    console.log(product)
    product
      ? api.put(`/product/${product.id}`, bodyRef.current)
        .then(() => onUpdate(product, bodyRef.current))
        .catch(({ message }) => console.log(message))
      : api.post('/product', bodyRef.current)
        .then(() => (
          onAdd(bodyRef.current)
        ))
    onClose()
  }, [])
  return (
    <Modal
      isOpen={product !== null}
      close={onClose}
    >
      <S.ModalContainer>
        <S.ModalHeader>
          <S.ModalTitle>Multi Step Form</S.ModalTitle>
          <S.CloseButton
            onClick={onClose}
          >
            <Icons.Close />
          </S.CloseButton>
        </S.ModalHeader>
        <S.Span>
          Passo
          {currentStep + 1} de {steps.length}
        </S.Span>
        <S.ModalForm
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <S.Span>
            {steps[currentStep].title}
          </S.Span>
          {steps[currentStep].id === "NAME" && (
            <>
              <label htmlFor="name-input">Name</label>
              <S.Input
                id="name-input"
                type="text"
                name="name"
                placeholder="Name of the Product"
                defaultValue={product?.name}
              />
            </>
          )}

          {steps[currentStep].id === "PRICE" && (
            <S.Input
              type="text"
              placeholder="price"
              name="price"
              defaultValue={bodyRef.current.price}
            />
          )}
          {steps[currentStep].id === "DESCRIPTION" && (
            <S.Input
              type="text"
              placeholder="Description"
              name="description"
              defaultValue={bodyRef.current.description}
            />
          )}

          <S.ModalFooter>
            {currentStep < steps.length - 1 && (
              <>
                {(currentStep - steps.length) > -3 && (
                  < S.Button
                    type='button'
                    onClick={handlePrevious}
                  >
                    Previous
                  </S.Button>
                )}
                <S.Button
                  type='button'
                  onClick={handleNext}
                >
                  Next
                </S.Button >
              </>
            )}
            {currentStep === steps.length - 1 && (
              <>
                {(currentStep - steps.length) > -3 && (
                  < S.Button
                    type='button'
                    onClick={handlePrevious}
                  >
                    Previous
                  </S.Button>
                )}
                <S.Button
                  type='submit'
                >
                  Submit
                </S.Button >
              </>
            )}
          </S.ModalFooter>
        </S.ModalForm>
      </S.ModalContainer>
    </Modal >
  );
}
export default ModalMultiStep