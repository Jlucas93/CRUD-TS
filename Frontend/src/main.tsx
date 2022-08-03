import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App'
import GlobalStyle from './GlobalStyle'
import FormStepOne from './pages/fromstepone'
import { FormStepTwo } from './pages/formsteptwo'
import { FormStepThree } from './pages/formstepthree'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route element={<App />} path="/" />
      <Route element={<FormStepOne />} path="/step1" />
      <Route element={<FormStepTwo />} path="/step2" />
      <Route element={<FormStepThree />} path="/step3" />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>404</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
)
