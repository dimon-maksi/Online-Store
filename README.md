# Online Store - TypeScript Project

This project demonstrates the development of basic components for an online store using TypeScript generics. It includes type-safe functions for managing products, filtering by price, adding items to a cart, and calculating the total cost.

## Goals of the Project

- Learn the basics of generic types in TypeScript
- Create type-safe functions for data operations
- Apply generics in a practical example

## Project Structure

```plaintext
online-store/
├── src/
│   ├── types.ts               # Type definitions for products and cart items
│   ├── productFunctions.ts    # Functions for managing and filtering products
│   ├── cartFunctions.ts       # Functions for managing the shopping cart
│   └── index.ts               # Main entry point with test data and function usage
├── package.json               # Project configuration and dependencies
└── tsconfig.json              # TypeScript configuration
```
## Project Components

### Type Definitions

- **`BaseProduct`**: A base type for all products with common fields like `id`, `name`, and `price`.
- **Specific Product Types**:
  - `Electronics`: Extends `BaseProduct` with fields specific to electronics.
  - `Clothing`: Extends `BaseProduct` with fields specific to clothing.
  - `Book`: Extends `BaseProduct` with fields specific to books.

### Functions

1. **Product Functions** (in `productFunctions.ts`):
   - `findProduct`: Searches for a product by its ID.
   - `filterByPrice`: Filters products by a maximum price.

2. **Cart Functions** (in `cartFunctions.ts`):
   - `addToCart`: Adds a product to the shopping cart with the specified quantity.
   - `calculateTotal`: Calculates the total cost of all items in the cart.
  
## Requirements

- All functions must be type-safe.
- Use only functions (no classes) for simplicity.
- Validate inputs as necessary.
