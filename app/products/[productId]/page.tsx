import React from 'react'
import ProductIdClient from './ProductIdClient'
import getProductById from '@/app/actions/getProductById'
import ClientOnly from '@/app/components/ClientOnly'
import EmptyState from '@/app/components/EmptyState'


interface IParams {
    productId?: string
}

const page = async ({ params }: { params: IParams }) => {
    const { productId } = params;

    if (!productId) {
        return (
            <ClientOnly>
                <EmptyState title='Invalid Product Id' subtitle='There is no product'  />
            </ClientOnly>
        )
    }

    const product = await getProductById(params)

    if (!product) {
        return (
            <ClientOnly>
                <EmptyState title='Invalid Product Id' subtitle='There is no product'  />
            </ClientOnly>
        )
    }


    return (
        <ClientOnly>
            <ProductIdClient product={product} productId={productId} />
        </ClientOnly>
    )
}

export default page