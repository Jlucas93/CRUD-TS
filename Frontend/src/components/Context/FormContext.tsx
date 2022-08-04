import { createContext, useReducer, useContext, ReactNode, ProviderProps } from "react";

type State ={
  currentSetp: Number
  name: string
  price: number
  description: string
}
type FormProviderProps ={
  children: ReactNode
}
type Action = {
  type: FormActions 
  payload:any
}
type ContextType ={
  state:State
  dispatch:(action:Action) => void
}
const initialData : State = {
  currentSetp: 0,
  name: '',
  price: 0,
  description: ''
}

//Context
const FormContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum FormActions {
  setCurrentStep,
  setName,
  SetPrice,
  SetDescription
}
const formReducer = (state:State, action:Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentSetp: action.payload }
    case FormActions.setName:
      return { ...state, name: action.payload }
    case FormActions.SetDescription:
      return { ...state, description: action.payload }
    case FormActions.SetPrice:
      return { ...state, price: action.payload }
    default:
      return state
  }
}

//Provider
export const FormProvider = ({ children }:FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData)
  const value = { state, dispatch }
  return (
    <FormContext.Provider
      value={value}
    >
      {children}
    </FormContext.Provider>
  )
}

//const Hook

export const useForm = () =>{
  const context = useContext(FormContext )
  if(context === undefined){
    throw new Error ("userFomr precisa de Formprovider")
  }
  return context
}
