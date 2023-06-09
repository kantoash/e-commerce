"use client";

import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import { CartContextType } from "@/typing";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import FullInfoListingCard from "../components/input/FullInfoListingCard";
import Input from "../components/input/Input";

const CartClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { products, allEmpty } = useContext(CartContext) as CartContextType;
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      address: "",
      products: products
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/order", data)
      .then(() => {
        toast.success("Order Created");
        router.push('/')
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
        reset();
        allEmpty();
      });
  };


  return (
    <main className="my-10 p-4">
      <h3 className="text-2xl md:text-3xl font-bold mb-6 whitespace-nowrap">
        Cart Items
      </h3>
      <section className="flex flex-col gap-5 items-center justify-center">
        <div className="flex flex-col gap-6 ">
          {products && products.map((product) => (
            <div>
              <FullInfoListingCard productId={product} />
            </div>
          ))}
        </div>

        <div className="my-10 w-[350px] sm:w-[500px] flex flex-col justify-center gap-5">
          <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
            order confirm
          </h2>
          <div className="flex flex-col gap-5">
            <Input
              id="name"
              label="Name"
              type="text"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />

            <Input
              id="address"
              label="Address"
              type="text"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
          </div>
          <button onClick={handleSubmit(onSubmit)} className="AddProductBtn">payment</button>
        </div>
      </section>
    </main>
  );
};

export default CartClient;
