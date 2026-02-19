WEEK 3 : Assignment: Product Cart with Component Communication

Objective
Build a product browsing interface with search functionality and cart counter using Angular
component communication.

Requirements

1. Component Structure
   Create 4 components using Angular CLI:
   NavbarComponent - Top navigation bar
   SearchInputComponent - Search field (child of navbar)
   ProductCardComponent - Individual product display
   AppComponent - Parent component (main container)

2. Navbar Component
   Must include:
   App title/logo
   Search input component (nested)
   Cart counter badge
   Data flow:
   Receive cart count from parent via @Input
   Emit search query to parent via @Output

3. Search Input Component
   Must include:
   Text input field with [(ngModel)]
   Placeholder: "Search products..."
   Emit search value to parent on every keystroke
   Technical:
   Import FormsModule
   Use @Output to emit search query

4. Product Card Component
   Display:
   Product image
   Product name
   Short description (2-3 lines)
   Price
   Functionality:
   Click anywhere on card to select it
   Selected cards have different background color
   Emit product to parent via @Output when clicked
   Receive from parent:
   Product data via @Input
   Selected state via @Input

5. App Component (Parent)
   Must have:
   Array of at least 6 products
   Cart array to store selected products
   Filter products by name based on search query
   Product Interface:
   interface Product {
   id: number;
   name: string;
   description: string;
   price: number;
   imageUrl: string;
   }

6. Layout Requirements
   Product Grid:
   Use CSS Grid or Flexbox
   3 columns on desktop
   2 columns on tablet
   1 column on mobile
   Add gap between cards
   Styling:
   Cards have border and shadow
   Hover effect on cards
   Selected cards have different background color
   Sample Product Data
   products: Product[] = [
   {
   id: 1,
   name: 'Wireless Headphones',
   description: 'Premium noise-cancelling wireless headphones',
   price: 199.99,
   imageUrl: 'https://via.placeholder.com/200'
   }
   ];

Data Flow
Search:
User types → SearchInputComponent emits →
NavbarComponent re-emits → AppComponent filters products
Cart:
User clicks ProductCard → Card emits product →
AppComponent adds to cart → Cart count updates →
NavbarComponent displays count
Submission
What to submit:
Link to Github repo containing code.
Due Date: [30/12/2025]

Common Issues
ngModel not working?
Import FormsModule in your component
@Input/@Output not working?
Check you imported the component in parent's imports array
Verify decorator syntax: @Input() and @Output()
Search not filtering?
