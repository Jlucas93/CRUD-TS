import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from 'App'
import GlobalStyle from 'GlobalStyle'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'


ReactDOM.createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route element={<App />} path="/">
        <Route index element={<Home />}/>
      </Route>
      <Route
        path="*"
        element={<NotFound/> }
      />
    </Routes>
  </BrowserRouter>

)
