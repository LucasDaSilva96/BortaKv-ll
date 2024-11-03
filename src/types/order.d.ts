// Type definitions for Order
export interface Order_Item {
  product_id: number;
  qty: number;
  item_price: number;
  item_total: number;
}

// Create new order interface
export interface Order {
  customer_first_name: string;
  customer_last_name: string;
  customer_address: string;
  customer_postcode: string;
  customer_city: string;
  customer_email: string;
  customer_phone?: string;
  order_total: number;
  order_items: Order_Item[];
}

// Order response interface
export interface OrderResponse extends Order {
  customer_first_name: string;
  customer_last_name: string;
  customer_address: string;
  customer_postcode: string;
  customer_city: string;
  customer_email: string;
  customer_phone?: string;
  order_total: number;
  id: number;
  user_id: number;
  order_date: string;
  created_at: string;
  updated_at: string;
  items: Order_Item[];
}
