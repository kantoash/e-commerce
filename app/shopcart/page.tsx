
import React from 'react'
import CartClient from './CartClient'
import ClientOnly from '../components/ClientOnly'

type Props = {}

const page = (props: Props) => {
  return (
    <ClientOnly>
      <CartClient/>
    </ClientOnly>
  )
}

export default page