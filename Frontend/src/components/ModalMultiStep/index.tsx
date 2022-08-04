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
  const [currentStep, setCurrentStep] = useState(0);
  //Refs
  const inputRef = useRef<HTMLInputElement>(null)

  const handleNext = () => {
    setCurrentStep((prevState) => prevState + 1)
  }
  const handlePrevious = () => {
    setCurrentStep((prevState) => prevState - 1);
  }
  const handleSubmit = (event: any) => {
    event.preventDefault()
    const formElement = event.target as HTMLFormElement
    const [
      input_name,
      input_price,
      input_description
    ] = Object.values(formElement)
    if (inputRef.current === undefined || inputRef.current === null) {
      return
    }
    const body = {
      [inputRef.current.name]: inputRef.current.value,
      [inputRef.current.name]: parseFloat((inputRef.current.value).toString()),
      [inputRef.current.name]: inputRef.current.value
    }
    console.log(body)
    product
      ? api.put(`/product/${product.id}`, body)
        .then(() => onUpdate(product, body))
        .catch(({ message }) => console.log(message))
      : api.post('/product', body)
        .then(() => (
          onAdd(body)
        ))
    onClose()
  }
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
          {currentStep + 1} de {steps.length}
        </S.Span>
        <S.ModalForm>
          <S.Span>
            {steps[currentStep].title}
          </S.Span>
          {steps[currentStep].id === "NAME" && (
            <S.Input
              ref={inputRef}
              type="text"
              name="name"
              placeholder="Name of the Product"
              defaultValue={product?.name}
            />
          )}

          {steps[currentStep].id === "PRICE" && (
            <S.Input
              ref={inputRef}
              type="text"
              placeholder="price"
              name="price"
              defaultValue={product?.price}
            />
          )}
          {steps[currentStep].id === "DESCRIPTION" && (
            <S.Input
              ref={inputRef}
              type="text"
              placeholder="Description"
              name="description"
              defaultValue={product?.description}
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
                  onClick={handleSubmit}
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