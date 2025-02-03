import { calcDeliveryDateAndPrice } from "@/lib/actions/order.action";
import { Cart, OrderItem } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState: Cart = {
  items: [],
  itemsPrice: 0,
  taxPrice: undefined,
  shippingPrice: undefined,
  totalPrice: 0,
  paymentMethod: undefined,
  deliveryDateIndex: undefined,
};

interface CartState {
  cart: Cart;
  addItem: (item: OrderItem, quantity: number) => Promise<string>;
  updateItem: (item: OrderItem, quantity: number) => Promise<void>;
  removeItem: (item: OrderItem) => Promise<void>;
}

const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      cart: initialState,

      addItem: async (item: OrderItem, quantity: number) => {
        const { items } = get().cart;
        const existItem = items.find(
          (x) =>
            x.product === item.product &&
            x.color === item.color &&
            x.size === item.size
        );

        if (existItem) {
          if (existItem.countInStock < quantity + existItem.quantity) {
            throw new Error("Not enough items in stock");
          }
        } else {
          if (item.countInStock < quantity) {
            throw new Error("Not enough items in stock");
          }
        }

        const updatedCartItems = existItem
          ? items.map((x) =>
              x.product === item.product &&
              x.color === item.color &&
              x.size === item.size
                ? { ...existItem, quantity: existItem.quantity + quantity }
                : x
            )
          : [...items, { ...item, quantity }];

        const deliveryData = await calcDeliveryDateAndPrice({
          items: updatedCartItems,
        });

        set({
          cart: {
            ...get().cart,
            items: updatedCartItems,
            itemsPrice: updatedCartItems.reduce((total, x) => total + x.price * x.quantity, 0), // Calculate itemsPrice
            ...deliveryData,
          },
        });
// eslint-disable-next-line
        return updatedCartItems.find(
          (x) =>
            x.product === item.product &&
            x.color === item.color &&
            x.size === item.size
        )?.clientId!;
      },

      updateItem: async (item: OrderItem, quantity: number) => {
        const { items } = get().cart;
        const exist = items.find(
          (x) =>
            x.product === item.product &&
            x.color === item.color &&
            x.size === item.size
        );

        if (!exist) return;

        const updatedCartItems = items.map((x) =>
          x.product === item.product &&
          x.color === item.color &&
          x.size === item.size
            ? { ...exist, quantity }
            : x
        );

        const deliveryData = await calcDeliveryDateAndPrice({
          items: updatedCartItems,
        });

        set({
          cart: {
            ...get().cart,
            items: updatedCartItems,
            itemsPrice: updatedCartItems.reduce((total, x) => total + x.price * x.quantity, 0), // Calculate itemsPrice
            ...deliveryData,
          },
        });
      },

      removeItem: async (item: OrderItem) => {
        const { items } = get().cart;
        const updatedCartItems = items.filter(
          (x) =>
            x.product !== item.product ||
            x.color !== item.color ||
            x.size !== item.size
        );

        const deliveryData = await calcDeliveryDateAndPrice({
          items: updatedCartItems,
        });

        set({
          cart: {
            ...get().cart,
            items: updatedCartItems,
            itemsPrice: updatedCartItems.reduce((total, x) => total + x.price * x.quantity, 0), // Calculate itemsPrice
            ...deliveryData,
          },
        });
      },

      init: () => set({ cart: initialState }),
    }),
    {
      name: "cart-store",
    }
  )
);

export default useCartStore;