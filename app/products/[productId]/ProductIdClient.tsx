"use client";

import { Product, Review, User } from "@prisma/client";
import React, { useState } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { PlusIcon } from "@heroicons/react/24/outline";
import ProductAddReview from "./ProductAddReview";
import ProductImages from "@/app/components/input/ProductImages";
import AddTOCart from "@/app/components/input/AddTOCart";
import UserInfo from "@/app/components/input/UserInfo";
import ReviewCard from "@/app/components/input/ReviewCard";


interface ProductIdClientProps {
  product: Product & {
    user: User;
    reviews: Review[];
  };
  productId: string;
}

const ProductIdClient: React.FC<ProductIdClientProps> = ({
  product,
  productId,
}) => {
  const [addReview, setAddReview] = useState(false);
  return (
    <div className="my-10 p-2">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-10 ">
        {/* images */}
        <ProductImages images={product?.images} />
        {/* info */}
        <div className="space-y-5">
          {/* head */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-4xl font-bold">{product?.title}</h3>
            <p className="text-base sm:text-xl max-w-3xl">
              {product?.description}
            </p>
          </div>

          {/* add to cart */}
          <div className="flex items-center space-x-5 ">
            <div className="flex items-center space-x-1">
              <BsCurrencyRupee className="h-8" />
              <h3 className="text-2xl font-bold">{product?.price}</h3>
            </div>
            <AddTOCart productId={productId}/>
          </div>
          <div className="">
            <UserInfo user={product?.user} />
          </div>
        </div>
      </div>

      {/* review */}
      <div>
        <div className="mt-10 flex items-center gap-3">
          <h3 className="text-2xl md:text-4xl font-bold">Reviews</h3>
          <div
            onClick={() => setAddReview((val) => !val)}
            className="rounded-2xl border-[1px] border-gray-500 p-1 cursor-pointer"
          >
            <PlusIcon className="h-7" />
          </div>
        </div>
        <div className="mt-8 ">
          {addReview && (
            <ProductAddReview productId={productId} key={productId} />
          )}
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-8">
        {product?.reviews &&
          product.reviews.map((review) => <ReviewCard review={review} />)}
      </div>
    </div>
  );
};

export default ProductIdClient;
