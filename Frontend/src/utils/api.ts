import axios from 'axios'

export declare namespace Api {
  interface Product {
    id?: number,
    name: string,
    price: number,
    description: string
  }
}

export const api = axios.create({
  baseURL: 'http://localhost:5000/backend-ts-327b7/us-central1/app'
})