import React from 'react'
import ProductClient from './ProductClient'
import getMyProducts from '../actions/getMyProducts';
import ClientOnly from '../components/ClientOnly';
import EmptyState from '../components/EmptyState';
const page = async () => {
  const products = await getMyProducts();
  
  if (!products) {
    return (
        <ClientOnly>
            <EmptyState title='No Products' subtitle='There is no product'  />
        </ClientOnly>
    )
  }


  return (
    <ClientOnly>
      <ProductClient products={products} />
    </ClientOnly>
  )
}

export default page