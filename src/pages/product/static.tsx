import { ProductType } from '@/types/product.type';
import ProductView from '@/views/product'
import React from 'react'

const ProductPage = (props: {products: ProductType[]}) => {
  return (
    <div>
        <ProductView products={props.products} />
    </div>
  )
}

export default ProductPage;

export async function getStaticProps() {
    // fetch data
    const res = await fetch('https://fakestoreapi.com/products');
    const response = await res.json();

    return {
        props: {
            products: response,
        }
    }
}