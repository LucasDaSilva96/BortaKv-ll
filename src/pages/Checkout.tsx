import CheckoutSwiper from '@/components/CheckoutSwiper';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { formSchema } from '@/schema/order';
import { formatOrder } from '@/services/orders/formatOrder';
import { createOrder } from '@/services/orders/order_post';
import { useCart } from '@/stores/cart';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

export default function Checkout() {
  const { cart, total_amount } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
  }, [cart, navigate]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customer_first_name: '',
      customer_last_name: '',
      customer_address: '',
      customer_postcode: '',
      customer_city: '',
      customer_email: '',
      customer_phone: '',
      order_total: total_amount,
      order_items: formatOrder(cart),
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      const response = await createOrder(values);
      if (response) {
        navigate(`/confirmation/${response.id}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <section className='w-full pt-32 lg:pt-20 pb-4 px-4 flex flex-col items-center gap-2 min-h-svh'>
      <h1 className='font-bold text-3xl'>Checkout</h1>

      <div className='w-full max-w-lg h-[260px] p-4 flex items-center justify-center relative'>
        <CheckoutSwiper cart={cart} />
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4 w-full max-w-md'
        >
          <div className='w-full grid grid-cols-2 gap-2'>
            <FormField
              control={form.control}
              name='customer_first_name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name*</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete='given-name'
                      placeholder='First name'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className='sr-only'>
                    Please enter your first name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='customer_last_name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name*</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete='family-name'
                      placeholder='Last name'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className='sr-only'>
                    Please enter your last name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name='customer_address'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address*</FormLabel>
                <FormControl>
                  <Input
                    autoComplete='shipping street-address'
                    placeholder='Address'
                    {...field}
                  />
                </FormControl>
                <FormDescription className='sr-only'>
                  Please enter your address.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='w-full grid grid-cols-2 gap-2'>
            <FormField
              control={form.control}
              name='customer_postcode'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Post Code*</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete='shipping postal-code'
                      placeholder='Post code'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className='sr-only'>
                    Please enter your post code.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='customer_city'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City*</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete='home city'
                      placeholder='City'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className='sr-only'>
                    Please enter your City.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='w-full grid grid-cols-2 gap-2'>
            <FormField
              control={form.control}
              name='customer_email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email*</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete='email'
                      placeholder='Email'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className='sr-only'>
                    Please enter your email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='customer_phone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete='tel'
                      placeholder='Phone Number'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className='sr-only'>
                    Please enter your phone number.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <button
            disabled={isLoading}
            className='w-full bg-black text-slate-50 p-2 rounded-md font-semibold uppercase'
            type='submit'
          >
            {isLoading ? 'Loading...' : `Place Order - ${total_amount}kr`}
          </button>
        </form>
      </Form>
    </section>
  );
}
