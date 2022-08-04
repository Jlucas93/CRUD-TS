import * as S from './style'
import Table from 'components/Table'
import { useState, useEffect, useCallback } from 'react'
import * as Icons from 'components/Icons'
import Load from 'components/Load'
import ModalProduct from 'components/ModalProduct'
import { Api, api } from 'utils/api'
import ModalMultiStep from 'components/ModalMultiStep'

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
          product={productUpdate}
          onAdd={onAdd}
          onUpdate={onUpdate}
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