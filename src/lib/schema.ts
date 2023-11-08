import { z } from "zod"
import { categories } from "./categories"

export const menuItemSchema = z.object({
  item: z
    .string()
    .min(4, { message: "Item name must be at least 4 characters." }),
  price: z
    .number({
      required_error: "Price is required.",
      invalid_type_error: "Price is must be a number.",
    })
    .min(1, { message: "Price must be atleast $1.00" }),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required." }),
  }),
})

export type menuItemFormData = z.infer<typeof menuItemSchema>
