
import React from "react";
import OrderClient from "./OrderClient";
import getMyOrders from "../actions/getMyOrders";
import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";


const page = async () => {
  const orders = await getMyOrders();
  if (!orders) {
    return (
      <ClientOnly>
        <EmptyState title="No Orders" subtitle="here is no order of yours" />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <OrderClient orders={orders} />
    </ClientOnly>
  );
};

export default page;
