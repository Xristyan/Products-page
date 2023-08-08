# Products-page
The "Product Page" project is a web application resembling a typical page in an ecommerce store.
## Technologies
In this project i am using: 
* Javascript
* React
* html
* css.
### Libraries
* React Router - for seamless client-side routing. This enables users to navigate between different sections of the application without full page reloads.
* Redux Toolkit - for managing global states in the application.
## Implementation
 * Sticky Navigation Bar: A sticky navigation bar is implemented at the top of the page, to ensure that it remains visible even when users scroll down the page.
 * Product Sorting Dropdown: Dropdown menu that allows users to sort the displayed products based on various criteria . This functionality is implementet with Redux Toolkit and custom hook.
 * Load More Button:This button displays additional products when clicked. This approach prevents loading all products at once, ensuring a smoother user experience.
 * Filtering menu: Responsive menu that allows users to filter the displaye products on different criteria such as brand, price, color.For the implementation is used custom hook and Redux Toolkit.
 * Products grid: Contains a set of product tiles positioned in a grid structure.The data comes from json and for the particular category the data is filterd with the help of useParams from React Router.
 * Product counter: Showing how many products are currently displayed in the product grid (x out of y).Implemented with React hooks.
