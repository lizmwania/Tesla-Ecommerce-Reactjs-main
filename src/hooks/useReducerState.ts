import { useAppSelector } from "../app/store";
//car cart reducer
export const useCartState = () => useAppSelector((state) => state.car.cart);
