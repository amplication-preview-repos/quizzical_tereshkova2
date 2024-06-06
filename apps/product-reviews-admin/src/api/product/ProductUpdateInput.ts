import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  category?: string | null;
  description?: string | null;
  name?: string | null;
  price?: number | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
};
