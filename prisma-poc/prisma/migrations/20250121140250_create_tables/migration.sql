-- CreateTable
CREATE TABLE "tb_orders" (
    "id" SERIAL NOT NULL,
    "client" TEXT NOT NULL,
    "totalPrice" DECIMAL(10,2) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pendente',
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "shippingAddressId" INTEGER,

    CONSTRAINT "tb_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_order_items" (
    "id" SERIAL NOT NULL,
    "productName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" DECIMAL(10,2) NOT NULL,
    "orderId" INTEGER NOT NULL,

    CONSTRAINT "tb_order_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_shipping_address" (
    "id" SERIAL NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "neighboorhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipCode" VARCHAR(11) NOT NULL,

    CONSTRAINT "tb_shipping_address_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_orders" ADD CONSTRAINT "tb_orders_shippingAddressId_fkey" FOREIGN KEY ("shippingAddressId") REFERENCES "tb_shipping_address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_order_items" ADD CONSTRAINT "tb_order_items_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "tb_orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
