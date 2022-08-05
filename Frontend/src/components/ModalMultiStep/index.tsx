import React from 'react';
import * as S from './styles'
import Modal from 'components/Modal'
import * as Icons from 'components/Icons'

interface IStep<T extends { [key: string]: any }> {
  name: keyof T & string
  type?: string
}

interface Props<T extends { [key: string]: any } = any> {
  initialProps?: T | undefined | null
  steps: IStep<T>[][]
  onSubmit: (body: T) => void
  onClose: () => void
}

function ModalMultiSteps<T extends { [key: string]: any } = any>({
  initialProps,
  steps,
  onSubmit,
  onClose
}: Props<T>) {
  //State
  const [currentStep, setCurrentStep] = React.useState(0)
  // Refs
  const formRef = React.useRef<HTMLFormElement>(null)
  const bodyRef = React.useRef<T | null>(null)
  const body = bodyRef.current || initialProps || {} as T
  // Callbacks
  const saveInputsState = React.useCallback(() => {
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
  }, [])
  const handlePrevious = React
    .useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      saveInputsState()
      setCurrentStep(currentStep - 1)
    }, [currentStep])
  const handleNext = React.useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    saveInputsState()
    setCurrentStep(currentStep + 1)
  }, [currentStep])
  // Effects
  React.useEffect(() => {
    if (initialProps !== null) {
      bodyRef.current = { ...initialProps } as T
    } else {
      setCurrentStep(0)
      bodyRef.current = null
    }
  }, [initialProps])
  // Render
  return (
    <Modal
      isOpen={initialProps !== null}
      close={onClose}
    >
      <S.Container>
        <S.Header>
          <S.Title>Multi Step Form</S.Title>
          <S.CloseButton
            onClick={onClose}
          >
            <Icons.Close />
          </S.CloseButton>
        </S.Header>
        <S.Form
          ref={formRef}
          onSubmit={event => {
            event.preventDefault()
            saveInputsState()
            onSubmit(body)
            console.log(body)
          }}
        >
          <S.Span>
          Passo {currentStep + 1} de {steps.length}
          </S.Span>
          {steps[currentStep].map((inputProps, i) => (
            <S.Input
              key={inputProps.name as string}
              {...inputProps}
              defaultValue={body[inputProps.name]}
            />
          ))}
        </S.Form>
          <S.Footer>
            {currentStep !== 0 ? (
              <S.Button onClick={handlePrevious}>Voltar</S.Button>
            ) : null}
            {currentStep === steps.length - 1
              ? (
                <S.Button>Submit</S.Button>
              ) : (
                <S.Button onClick={handleNext}>Próximo</S.Button>
              )}
          </S.Footer>
      </S.Container>
    </Modal >
  );
}
export default ModalMultiSteps