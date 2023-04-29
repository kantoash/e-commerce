
import prisma from '../libs/prismadb'

export default async function getProducts() {
    try {
       
        const products = await prisma.product.findMany({
            orderBy: {
                createdAt: 'asc'
            }
        })
        return products;
    } catch (error: any) {
        return null;
    }
}