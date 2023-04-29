'use client'

import React from 'react'
import { Product } from '@prisma/client'
import { useRouter } from 'next/navigation';
import ListingCard from '../components/input/ListingCard';

interface ProductClientProps {
  products: Product[];
}

const ProductClient: React.FC<ProductClientProps> = ({
  products
}) => {
  const router = useRouter();

  return (
    <div className='mt-10'>
      <section onClick={() => router.push('/addProduct')} className='AddProductBtn w-fit'>
        <h3 className='text-xl'>Add your Product</h3>
      </section>

      {/* products */}
      <section className='mt-8 grid grid-cols-1 sm:grid-cols-2 
      md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {products && products.map((product) => (
          <ListingCard product={product} />
        ))}
      </section>
    </div>
  )
}

export default ProductClient