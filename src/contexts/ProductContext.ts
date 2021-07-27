import { createContext } from 'react'

const ProductContext = createContext({
    products: [],
    addProduct: (productName: any, productPrice:any) => {},
    getProduct: (id: any) => {},
    delProduct: (id: any) => {},
})

export default ProductContext
