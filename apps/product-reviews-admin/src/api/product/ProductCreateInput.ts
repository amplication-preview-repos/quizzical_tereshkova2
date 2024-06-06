import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  category?: string | null;
  description?: string | null;
  name?: string | null;
  price?: number | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
};
