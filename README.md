# BortaKväll - More candy to the people

BortaKväll is an e-commerce platform dedicated to bringing more candy to the people. Our mission is to provide a delightful and seamless shopping experience for candy lovers everywhere.

![Preview image](/public/images/Bortkvall.png)

## Assignment Description

You are tasked with creating a simple webshop where users can add products to a cart and then "proceed to checkout" to place an order.

### Highlights

- **Modern Tech Stack**: Built with the latest technologies including React, TypeScript, Zustand, and Tailwind CSS for a robust and scalable application.
- **Responsive Design**: Fully responsive design ensuring a seamless experience across all devices.
- **Performance Optimized**: Leveraging Vite for fast builds and optimized performance.
- **State Management**: Efficient state management using Zustand for a smooth and responsive user experience.
- **Form Validation**: Robust form validation using Zod and React Hook Form to ensure data integrity.
- **API Integration**: Seamless integration with external APIs for dynamic data fetching and real-time updates.
- **Custom Animations**: Engaging user experience with custom animations powered by Framer Motion.
- **Error Handling**: Comprehensive error handling to provide a reliable and user-friendly application.
- **Accessibility**: Adherence to accessibility standards to ensure the platform is usable by everyone.
- **Code Quality**: High code quality maintained with ESLint and TypeScript for type safety and linting.
- **Testing**: Thorough testing to ensure reliability and performance.
- **Continuous Integration**: Automated CI/CD pipeline for streamlined development and deployment processes.
- **100% Type Coverage**: Ensuring complete type safety across the entire codebase with TypeScript.

### Hygiene Requirements

The following hygiene requirements must be met regardless of the grade level:

- The layout must be responsive (mobile first, at least 3 different breakpoints).
- HTML must be semantically correct.
- Use TypeScript according to best practices.
- Communication with the API must be done via a separate service (own module) that performs the actual requests and returns the results.
- eslint, tsc, and type-coverage must pass without any errors.
- Use a reactive framework.

### Specification

You will create a simple webshop that interacts with an API I have set up. You will fetch products that can be added to a cart and then place an order (via a POST to an API endpoint I have also set up).

When the visitor arrives at the page, all products should be displayed with an image (thumbnail), name, price, and an "Add to Cart" button.

The visitor should be able to add multiple instances of a product to the cart. For a passing grade, each instance of a product can be displayed as separate rows in the cart.

The visitor should also be able to click on a product (preferably through a "Read More" link) to see more information about the product (large image, name, price, description) without losing the cart.

The cart should be displayed with a summary on the page that can be expanded, where products can also be removed from the cart. The total sum of all products in the cart should be visible.

In the cart, there should be a "Proceed to Checkout" button that shows a new view where the user fills in their name, address, postal code, city, phone (not required), and email.

When placing the order, any errors should be displayed, and if the order is successful, the order number should be displayed along with a thank you message.

Upon reloading the site, it should return to the same view as before the reload!

### Specification for Distinction

In addition to the above, the following is required:

- Use TypeScript Generics for API responses.
- Use composite types to avoid repetition in types, e.g., when fetching all products and when fetching a single product.
- Error handling for both request and response.
- eslint, tsc, and type-coverage must pass without warnings.

The user should be able to click "Add to Cart" multiple times on a product, but only one instance should be displayed in the cart along with the quantity.

The user should be able to view all products with a specific tag (e.g., if viewing Banana Bubs, the user should see which tags the product has, and when clicking on a tag, all products with that tag should be displayed).

Each product in the cart should have +/- buttons to increase/decrease the quantity. The product should be removed from the cart when the quantity reaches 0.

The user should not be able to add more quantities of a product than are in stock.

After an order is placed, the cart should be emptied of products.

The cart and customer information (if available from previous orders) should also be saved in Local Storage to survive page reloads.

### Validation

- `customer_first_name`: string, max 255 characters
- `customer_last_name`: string, max 255 characters
- `customer_address`: string, max 255 characters
- `customer_postcode`: string, max 6 characters
- `customer_city`: string, max 255 characters
- `customer_email`: string, must be an email address, max 255 characters
- `customer_phone`: not required, string, max 255 characters
- `order_total`: must be the sum of all `item_total`
- `order_items`:
  - `product_id`: must exist
  - `qty`: must be a positive integer
  - `item_price`: must match `product_id`
  - `item_total`: must be `qty` multiplied by `item_price`

### Grading Criteria

- **Pass**: Meets the above specification.
- **Distinction**: Meets the above specification, including the distinction requirements.
