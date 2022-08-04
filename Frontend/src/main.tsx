import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from 'App'
import GlobalStyle from 'GlobalStyle'
import Home from 'pages/Home'
import FormStepOne from 'pages/fromstepone'
import FormStepTwo from 'pages/formsteptwo'
import FormStepThree from 'pages/formstepthree'
import NotFound from 'pages/NotFound'
import {FormProvider} from 'components/Context/FormContext'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route element={<App />} path="/">
        <Route index element={<Home />}/>
        <Route element={<FormStepOne />} path="/step1" />
        <Route element={<FormStepTwo />} path="/step2" />
        <Route element={<FormStepThree />} path="/step3" />
      </Route>
      <Route
        path="*"
        element={<NotFound/> }
      />
    </Routes>
  </BrowserRouter>

)
