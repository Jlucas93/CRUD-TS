import { useState, useEffect, useCallback } from 'react'
import Table from 'components/Table'
import ModalMultiStep from 'components/ModalMultiStep'
import Load from 'components/Load'
import { Api, api } from 'utils/api'
import * as Icons from 'components/Icons'
import * as S from './style'

const Home = () => {

  //States
  const [products, setProducts] = useState<Api.Product[]>([])
  /**
   * null: close
   * undefined: new product
   * Product: update product
   */
  const [productUpdate, setProductUpdate] = useState<Api.Product | null | undefined>(null)

  // Callbacks
  const onAdd = useCallback((new_product: Api.Product) => {
    setProducts(state => [...state, new_product])
  }, [])

  const onUpdate = useCallback((product: Api.Product, new_props: Partial<Api.Product>) => {
    setProducts(state => state.map(produto => produto === product
      ? Object.assign(product, new_props)
      : produto
    ))
  }, [])
  const onDelete = useCallback((product: Api.Product) => {
    api.delete(`/product/${product.id}`)
      .then(() => { setProducts(state => state.filter(produto => produto !== product)) })
      .catch((error) => { console.log(error) })
  }, [])
  // Effects
  useEffect(() => {
    setTimeout(() => {
      api.get('/product')
        .then(({ data }) => setProducts(data.products))
    }, 1000)
  }, [])
  //render
  if (products.length)
    return (
      <S.Container>
        <S.Title>
          List of Products
          <S.AddButton
            onClick={() => setProductUpdate(undefined)}
          >
            <Icons.Add />
            Add Item
          </S.AddButton>
        </S.Title>
        <Table
          products={products}
          onUpdate={product => setProductUpdate(product)}
          onDelete={onDelete}
        />
        <ModalMultiStep
          initialProps={productUpdate}
          onSubmit={new_product => {
            if (productUpdate) {
              api.put(`/product/${productUpdate.id}`, new_product)
                .then(() => onUpdate(productUpdate, new_product))
                .catch(({ message }) => console.log(message))
            } else {

              api.post('/product', new_product)
                .then(() => (
                  onAdd(new_product)
                ))
            }
          }}
          steps={[
            [
              {
                name: 'name'
              }
            ],
            [
              {
                name: 'price'
              }
            ],
            [
              {
                name: 'description'
              }
            ]
          ]}
          onClose={() => setProductUpdate(null)}
        />
      </S.Container>
    )
  return (
    <S.Loading>
      <S.Title>
        Loading
      </S.Title>
      <Load />
    </S.Loading>
  )
}

export default Home