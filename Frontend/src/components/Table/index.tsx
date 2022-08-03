import axios from 'axios'
import { useEffect, useState } from 'react'
import * as S from './style'
interface Product {
  id?: number,
  name: String,
  price: boolean,
  description: String
}
const Table = () => {
  const [product, setProduct] = useState<Product[]>()
  
  useEffect(() => {
    axios.get('http://localhost:5000/backend-ts-327b7/us-central1/app/product')
      .then(({ data }) => setProduct(data.products))
  }, [])
  // Render
  return (
    <S.Container>
                {product && (
          <table>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Descrição</th>
            </tr>
            <tbody>
              {product.map((product,index) =>
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
              </tr>
              )} 
            </tbody>
          </table>
        )}
    </S.Container>
  )
}

export default Table