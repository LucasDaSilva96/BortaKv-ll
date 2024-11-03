import { z } from 'zod';

export const formSchema = z.object({
  customer_first_name: z.string().min(2).max(255),
  customer_last_name: z.string().min(2).max(255),
  customer_address: z.string().min(2).max(255),
  customer_postcode: z.string().min(2).max(6),
  customer_city: z.string().min(2).max(255),
  customer_email: z.string().email(),
  customer_phone: z.string().optional(),
  order_total: z.number().min(0),
  order_items: z.object({
    cart: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        on_sale: z.boolean(),
        images: z.object({
          thumbnail: z.string(),
          large: z.string(),
        }),
        stock_status: z.string(),
        stock_quantity: z.number(),
        tags: z.array(
          z.object({ id: z.number(), name: z.string(), slug: z.string() })
        ),
      })
    ),
  }),
});
