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
  order_items: z.array(
    z.object({
      product_id: z.number(),
      qty: z.number(),
      item_price: z.number(),
      item_total: z.number(),
    })
  ),
});
