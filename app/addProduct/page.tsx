
import React from 'react'
import AddProductClient from './AddProductClient'
import ClientOnly from '../components/ClientOnly'

const page = () => {
  return (
    <ClientOnly>
      <AddProductClient/>
    </ClientOnly>
  )
}

export default page