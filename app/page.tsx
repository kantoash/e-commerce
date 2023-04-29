
import { Product } from "@prisma/client";
import getProducts from "./actions/getMyProducts";
import Banner from "./components/input/Banner";
import ListingCard from "./components/input/ListingCard";


export default async function Home() {
  const products = await getProducts()
//  build cart page, build orders page, build filters  //
 
  return (
    <main className="mt-10">
      
      {/* banner */}
     <Banner/>

      {/* products */}
      <section
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 
      md:grid-cols-3 lg:grid-cols-4 gap-5"
      >
        {products &&
          products.map((product: Product) => <ListingCard product={product} />)}
      </section>
    </main>
  );
}
